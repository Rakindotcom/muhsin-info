import React from "react"
import { Badge } from "../Components/Badge"
import { Button } from "../Components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/Card"
import Social from "../Components/Social"
import TypewriterHeading from "../Components/Typewriter"
import { motion } from "framer-motion";

import {
  Calendar, Clock, MessageSquareHeart,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Globe,
  Heart,
  Star,
  ArrowRight,
  Quote,
  MapPin,
  ExternalLink,
} from "lucide-react";

const steps = [
  {
    title: "Healing Homes with Faith & Wisdom",
    content:
      "Helping couples and families build harmony, resolve conflicts, and strengthen emotional bonds by combining Islamic guidance with insights from contemporary counselling practices — without clinical therapy.",
  },
  {
    title: "Islamic Personal Mentorship — Faithful Living with Purpose",
    content: `Real-life struggles. Qur’anic solutions — break free, reconnect, transform.

For young minds and busy professionals seeking to rethink their lifestyle and leave behind haram habits like illicit relationships, addictions, or spiritual confusion — we offer one-on-one faith-based mentorship that is practical, non-judgmental, and deeply rooted in Qur’anic wisdom and Prophetic guidance.

Whether you're seeking clarity in a world full of distractions or trying to build a stronger connection with Allah — this is your space for growth, healing, and realignment.

Struggling with addiction, confusion, or emotional lows? Caught between modern chaos and spiritual emptiness?

We help you reconnect with the deeper purpose of life through Islamic wisdom, real conversations, and personalized support — all rooted in the Qur’an and Sunnah.

This is for anyone — student, executive, or parent — who wants to live with clarity, self-control, and faith.`,
  },
  {
    title: "Personal Career Counselling",
    content:
      "Find your purpose and build a Halal career.\n\nWhether you're a Madrasah graduate exploring new opportunities or a university student seeking a career aligned with Islamic values — our one-on-one sessions help you discover your strengths, clarify your goals, and plan a career that is both meaningful and Halal.",
  },
];

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <TypewriterHeading />
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">Nurturing Homes & Relationships</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Guiding families toward harmony and understanding through authentic Islamic principles combined with modern
            counselling approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer text-white border-1 border-white hover:border-amber-400">

              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:cursor-pointer"
            >
              <Users className="w-5 h-5 mr-2" />
              Upcoming Programs
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border border-white hover:border-amber-400 hover:cursor-pointer"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 text-white shadow-xl backdrop-blur"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-300 leading-snug">
              {step.title}
            </h3>
            <p className="text-gray-200 whitespace-pre-line text-justify leading-relaxed text-sm p-2">
              {step.content}
            </p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <div className="max-w-5xl mx-auto bg-gray-900/50 rounded-2xl shadow-xl backdrop-blur-md p-10 border border-gray-800">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            About the Consultant
          </h2>
          <div className="space-y-6 text-sm md:text-lg text-gray-300 text-justify leading-relaxed">
            <p>
              <span className="text-amber-400 font-semibold">Muhammad Muhsin Mashkur</span> is a classically trained Islamic scholar and contemporary educator with a passion for reconnecting people with the Qur’an’s message. A Hafiz of the Qur’an by age 11 and a graduate of Dawratul Hadith, he completed both his <span className="text-amber-400 font-semibold">B.A. and M.A. in Arabic</span> at the University of Dhaka — ranking First Class First in both, and earning the Prime Minister’s Gold Medal and multiple Dean’s Awards.
            </p>
            <p>
              He holds an MPhil on Qur’anic pedagogy for Bengali speakers and is currently pursuing a PhD focusing on Qur’anic education from primary to higher secondary levels. He serves as a part-time faculty at the Institute of Modern Languages, University of Dhaka, and teaches Arabic at IUT (OIC).
            </p>
            <p>
              With over a decade of experience as a Khatib, mentor, and trainer, he specializes in making Qur’anic Arabic accessible to non-Madrasa learners through innovative, research-based methods. As a <span className="text-amber-400 font-semibold">certified fellow (DDS, USA)</span>, he also consults on education reform, youth guidance, and Islamic family wellbeing — merging classical Islamic wisdom with relevant contemporary insights.
            </p>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Services Offered</h2>
            <p className="text-gray-400 text-lg">Comprehensive support for every family need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">
                  Private Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  One-on-one sessions tailored to your family's unique needs. Available both online and in-person.
                </p>
                <div className="flex items-center text-emerald-400 text-sm">
                  <span>Personalized approach</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  <Users className="w-6 h-6 mr-2" />
                  Group Seminars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Monthly sessions on rotating topics including marriage enrichment and conflict resolution.
                </p>
                <div className="flex items-center text-blue-400 text-sm">
                  <span>Interactive workshops</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-xl">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Comprehensive Programmes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Structured courses for different life stages, from pre-marriage to parenting teenagers.
                </p>
                <div className="flex items-center text-purple-400 text-sm">
                  <span>Life-stage focused</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
            >

              Consult Now
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Consultation Options</h2>
            <p className="text-gray-400 text-lg">Choose the perfect session for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Quick Advice Card */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-emerald-800 relative">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">Get Quick Advice – 30 min</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-emerald-400">৳990</div>
                <div className="text-gray-300">
                  <p className="font-semibold">30-minute focused session</p>
                  <p className="text-sm text-gray-400 mt-2">For quick insight or urgent concerns</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-emerald-400 text-sm">
                    <span>Targeted guidance</span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <span>Quick solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deep Session Card */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">Go Deep – 60 min Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-blue-400">৳1500 - ৳2000</div>
                <div className="text-gray-300">
                  <p className="font-semibold">Full hour of in-depth guidance</p>
                  <p className="text-sm text-gray-400 mt-2">Deep, transformational sessions</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-400 text-sm">
                    <span>Comprehensive analysis</span>
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <span>Detailed action plan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Support Plan Card */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-800 relative">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-xl">Monthly Support Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-purple-400">From ৳7,500</div>
                <div className="text-gray-300">
                  <p className="font-semibold">4 sessions per month</p>
                  <p className="text-sm text-gray-400 mt-2">For couples/families wanting consistent change</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-purple-400 text-sm">
                    <span>Ongoing support</span>
                  </div>
                  <div className="flex items-center text-purple-400 text-sm">
                    <span>Tailored strategies</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Friday Special Talks & Counselling Sessions
          </h2>
          <p className="text-gray-400 text-lg">
            After Jumu'ah Prayer · Open to All · Practical & Purpose-Driven
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Talk 1 */}
          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-700 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-emerald-600 text-white">8 Nov</Badge>
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-emerald-400 text-lg leading-snug">
                Crafting Your Career with Faith
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
              <p className="flex items-center gap-2 text-emerald-300">
                <Clock className="w-4 h-4" /> After Jumu’ah Prayer (1:30 PM approx.)
              </p>
              <p className="flex items-center gap-2 text-emerald-200">
                <Users className="w-4 h-4" /> Students & Young Professionals
              </p>
              <p>
                A motivational session exploring how Islamic principles can guide you in choosing and thriving in a career aligned with purpose and barakah.
              </p>
            </CardContent>
          </Card>

          {/* Talk 2 */}
          <Card className="bg-gray-900 border-gray-800 hover:border-blue-700 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-600 text-white">22 Nov</Badge>
                <MessageSquareHeart className="w-5 h-5 text-blue-400" />
              </div>
              <CardTitle className="text-blue-400 text-lg leading-snug">
                Healing the Self
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
              <p className="flex items-center gap-2 text-blue-300">
                <Clock className="w-4 h-4" /> After Jumu’ah Prayer (1:30 PM approx.)
              </p>
              <p className="flex items-center gap-2 text-blue-200">
                <Users className="w-4 h-4" /> Anyone facing emotional burden
              </p>
              <p>
                A reflection session combining Islamic insights and practical frameworks to deal with emotional well-being and personal growth.
              </p>
            </CardContent>
          </Card>

          {/* Talk 3 */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-700 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-purple-600 text-white">13 Dec</Badge>
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <CardTitle className="text-purple-400 text-lg leading-snug">
                Saving the Home
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
              <p className="flex items-center gap-2 text-purple-300">
                <Clock className="w-4 h-4" /> After Jumu’ah Prayer (1:30 PM approx.)
              </p>
              <p className="flex items-center gap-2 text-purple-200">
                <Users className="w-4 h-4" /> Couples, Parents, Family Leaders
              </p>
              <p>
                A powerful session to rebuild harmony in the home using Islamic family values blended with practical counselling perspectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Books & Resources</h2>
            <p className="text-gray-400 text-lg">Instant digital downloads to support your journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Islamic Marriage Toolkit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-400 mb-2">450 BDT</div>
                <p className="text-gray-300 mb-4">Instant PDF download</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300 w-full"
                >

                  Download Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-lg">
                  <Users className="w-5 h-5 mr-2" />
                  Parenting Wisdom for Modern Families
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400 mb-2">350 BDT</div>
                <p className="text-gray-300 mb-4">Instant PDF download</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-600 text-blue-400 hover:bg-blue-950 hover:text-blue-300 w-full"
                >

                  Download Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  40 Hadith on Family Life
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400 mb-2">250 BDT</div>
                <p className="text-gray-300 mb-4">Instant PDF download</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-purple-600 text-purple-400 hover:bg-purple-950 hover:text-purple-300 w-full"
                >

                  Download Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about our services</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What is Islamic Family Consultancy?",
                answer:
                  "A professional service that addresses family challenges through Islamic principles combined with modern counselling techniques.",
              },
              {
                question: "Is online counselling confidential?",
                answer: "Absolutely. All sessions use secure platforms and follow strict confidentiality protocols.",
              },
              {
                question: "What age groups are your parenting programmes for?",
                answer: "Guidance for all stages: 0–5, 6–12, and 13–19 years.",
              },
              {
                question: "Do you offer emergency support?",
                answer: "Priority bookings available within 24 hours for urgent cases.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg mt-4 font-semibold text-emerald-400 mb-3 flex items-center">

                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">→ {faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Family Life?</h2>
          <p className="text-xl text-gray-300 mb-8">Take the first step towards a harmonious Islamic family today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-white hover:border-amber-400">

              Book Your Session
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-white hover:border-amber-400"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Check Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
