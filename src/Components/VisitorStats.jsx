// src/Components/VisitorStats.jsx
import { useEffect, useState } from "react";
import { rtdb } from "../firebase";
import { ref, set, onDisconnect, onValue, runTransaction, push } from "firebase/database";
import { User, CalendarDays } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

export default function VisitorStats() {
  const [todayVisits, setTodayVisits] = useState(0);
  const [onlineCount, setOnlineCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const dailyRef = ref(rtdb, `dailyVisits/${today}`);
    const onlineRef = ref(rtdb, "onlineUsers");

    // --- Session-safe online tracking ---
    let sessionId = sessionStorage.getItem("visitorId");
    if (!sessionId) {
      sessionId = push(onlineRef).key;
      sessionStorage.setItem("visitorId", sessionId);
    }

    const myRef = ref(rtdb, `onlineUsers/${sessionId}`);
    set(myRef, true);
    onDisconnect(myRef).remove();

    // Listen for online users count
    onValue(onlineRef, (snapshot) => {
      setOnlineCount(snapshot.exists() ? Object.keys(snapshot.val()).length : 0);
    });

    // --- Track today's visits (once per session) ---
    if (!sessionStorage.getItem("visitedToday")) {
      runTransaction(dailyRef, (currentVal) => (currentVal || 0) + 1).then((result) => {
        if (result?.snapshot) setTodayVisits(result.snapshot.val());
        sessionStorage.setItem("visitedToday", "true");
      });
    } else {
      onValue(dailyRef, (snapshot) => {
        if (snapshot.exists()) setTodayVisits(snapshot.val());
      });
    }
  }, []);

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Today's Visits Card */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-md border border-white/20 transform hover:scale-105 transition-transform duration-300">
          <CalendarDays className="w-8 h-8 text-teal-400 animate-pulse" />
          <div>
            <div className="text-sm opacity-80">{t('todaysVisits')}</div>
            <div className="text-2xl font-bold">{todayVisits}</div>
          </div>
        </div>

        {/* Online Users Card */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-md border border-white/20 transform hover:scale-105 transition-transform duration-300">
          <User className="w-8 h-8 text-green-400 animate-bounce" />
          <div>
            <div className="text-sm opacity-80">{t('onlineNow')}</div>
            <div className="text-2xl font-bold">{onlineCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}