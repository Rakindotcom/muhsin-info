import React from "react"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Badge } from "../Components/Badge"
import { Button } from "../Components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/Card"
import Social from "../Components/Social"

import {
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
import Hero from "../Components/Hero"
import { BookShowcase } from "../Components/BookShowcase"

export default function Component() {

    const [isScrolled, setIsScrolled] = useState(false)
      const [mobileOpen, setMobileOpen] = useState(false)
    
      // Add shadow on scroll
      useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
      }, [])
    
      // Scroll smoothly to footer with id 'contact'
      const scrollToFooter = (e) => {
        e.preventDefault()
        const footer = document.getElementById("contact")
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" })
          setMobileOpen(false)
        }
      }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <Hero />
            {/* Hero Section */}
            <section className="relative py-14 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => window.open("https://academy.muhsinmashkur.com/", "_blank", "noopener,noreferrer")} className="bg-emerald-400 hover:bg-emerald-600 hover:scale-105 hover:cursor-pointer">
                            <BookOpen className="w-5 h-5 mr-2" />
                            View Courses
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.open("https://academy.muhsinmashkur.com/dashboard/", "_blank", "noopener,noreferrer")}
                            className="bg-transparent border-gray-600 text-gray-300 hover:cursor-pointer"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Join Muhsin Maskur Academy
                        </Button>
                    </div>
                </div>

            {/* Mission Statement */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-gray-800">
                        <Quote className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">Mission 2030</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To empower <span className="text-emerald-400 font-semibold">10 million Bengali Muslims</span> to
                            understand the Qur'an and Salah by 2030. Reviving hearts through Qur'anic Arabic and building a generation
                            that prays with understanding and lives with divine purpose.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Enlightened Soul with Understanding Quran
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify w-[90%]">
                                An Arabic educator, researcher, and course designer passionate about helping Bengali-speaking Muslims
                                understand the Quran, Arabic language, and Islamic identity — simply, effectively, and impactfully.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center text-emerald-400">
                                    <Award className="w-5 h-5 mr-3" />
                                    <span>10+ years of experience in Arabic education</span>
                                </div>
                                <div className="flex items-center text-emerald-400">
                                    <GraduationCap className="w-5 h-5 mr-3" />
                                    <span>M.Phil in Qur'anic Arabic | Dhaka University</span>
                                </div>
                                <div className="flex items-center text-emerald-400">
                                    <BookOpen className="w-5 h-5 mr-3" />
                                    <span>PhD in Qur'anic Arabic | Ongoing</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-emerald-400 flex items-center">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Current Positions
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-semibold">Fellow</p>
                                        <p className="text-sm text-gray-400">DDS, USA</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Part-Time Lecturer</p>
                                        <p className="text-sm text-gray-400">Institute of Modern Languages (IML), University of Dhaka</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Adjunct Faculty</p>
                                        <p className="text-sm text-gray-400">TVE, Islamic University of Technology (IUT- A subsidiary organ of OIC), Gazipur, Bangladesh</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Khateeb</p>
                                        <p className="text-sm text-gray-400">Purba Kunipara G.M.G Jame Mosque, Tejgaon, Dhaka-1208</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Founder & CEO</p>
                                        <p className="text-sm text-gray-400">Muhsin Mashkur Academy</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Excellence */}
            <section className="mt-16 max-w-6xl mx-auto px-4">
  <h3 className="text-3xl font-extrabold text-center mb-12 text-emerald-400 tracking-wide drop-shadow-md">
    Education
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {/* PhD */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">🎓</span>
        <h4 className="text-xl font-bold text-white">PhD - Ongoing</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1">Department of Arabic, University of Dhaka</p>
      <p className="text-gray-400 italic">
        Topic: <span className="text-emerald-300 font-medium">Teaching the Meaning of the Holy Quran in Primary, Secondary, and Higher Secondary Levels: An Empirical Study</span>
      </p>
    </div>

    {/* MPhil */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">📚</span>
        <h4 className="text-xl font-bold text-white">Master of Philosophy (MPhil) - 2022</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1"><strong>Institution:</strong> University Of Dhaka</p>
      <p className="text-gray-300 font-semibold mb-1"><strong>Department:</strong> Department of Arabic</p>
      <p className="text-gray-400 italic mb-1">
        Topic: <span className="text-emerald-300 font-medium">“The Method of Teaching the Meaning of Al-Quran: An Empirical Study on Bengali Speaking People”</span>
      </p>
      <p className="text-gray-400">Degree Awarded on 27th of March 2022 with Scholarship.</p>
    </div>

    {/* MA */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">🎓</span>
        <h4 className="text-xl font-bold text-white">Master of Arts (M.A) - 2015</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1">Department of Arabic, University of Dhaka</p>
      <p className="text-emerald-300 font-bold">CGPA 4.00 (Out of 4.00) — 1st class 1st (1st Position)</p>
    </div>

    {/* BA */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">📜</span>
        <h4 className="text-xl font-bold text-white">Bachelor of Arts (B.A) - 2014</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1">Department of Arabic, University of Dhaka</p>
      <p className="text-emerald-300 font-bold">C.G.P.A 3.98 (out of 4.00), 1st class 1st, 1st position in the faculty of Arts</p>
    </div>

    {/* Takmeel / Dawratul Hadith */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">🕌</span>
        <h4 className="text-xl font-bold text-white">Takmeel / Dawratul Hadith - 2009</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1">Al Jamiyatul Islamiya Darul Uloom Madani Nagar, Dhaka</p>
      <p className="text-emerald-300 font-bold">Befaqul Madarisil arabiyyah Bangladesh — 1st class</p>
    </div>

    {/* Hifzul Qura’n */}
    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="text-emerald-400 text-2xl mr-3">📖</span>
        <h4 className="text-xl font-bold text-white">Hifzul Qura’n - 2001</h4>
      </div>
      <p className="text-gray-300 font-semibold mb-1">Al-Fatah Tahfizul Qura’n Academy, Dhaka</p>
      <p className="text-emerald-300 font-bold">Befaqul Madarisil arabiyyah Bangladesh — 1st class</p>
    </div>
  </div>
</section>


            {/* Areas of Expertise */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Areas of Expertise</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Teaching Arabic as a Foreign Language (TAFL)",
                            "Qur'an Arabic for General Learners",
                            "Teaching Arabic to Non-Native Speakers",
                            "Teaching Spoken Arabic (MSA)",
                            "Environment and Technology",
                            "Teaching Islamic Studies",
                            "Project Management",
                            "Public Lecture",
                        ].map((expertise, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></div>
                                <span className="text-gray-300">{expertise}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What We Do</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <GraduationCap className="w-6 h-6 mr-2" />
                                    Arabic Language Courses
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    Learn to speak, understand, and love Arabic — even if you're a complete beginner.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open("https://academy.muhsinmashkur.com/", "_blank", "noopener,noreferrer")}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <BookOpen className="w-6 h-6 mr-2" />
                                    Qur'an Study Programs
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    From Salah to Surah analysis — understand the Qur'an word-by-word with clarity.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open("https://academy.muhsinmashkur.com/", "_blank", "noopener,noreferrer")}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    Start Learning
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <Globe className="w-6 h-6 mr-2" />
                                    Islamic EdTech & Content
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    Developing engaging online courses and educational tools for Muslims in the digital age.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={scrollToFooter}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    Collaborate
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-800/30">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Our Books</h2>
                <BookShowcase />
            </section>
            
            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Students Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                                <p className="text-gray-300 mb-4 italic">
                                    "Ustadh Muhsin's course helped me understand Salah like never before."
                                </p>
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400">— Arafat, Qatar</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                                <p className="text-gray-300 mb-4 italic">
                                    "The Spoken Arabic program made my journey to Saudi much easier."
                                </p>
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400">— Jaber, Student</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Insightful Blogs</h2>
                    <div className="space-y-6">
                        {[
                            "How to Learn Quran with Meaning in Just 30 Days",
                            "Why Bengali Muslims Struggle with Arabic (And How to Fix It)",
                            "Khilafah & Climate: A Forgotten Link",
                        ].map((title, index) => (
                            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">✍️ {title}</h3>
                                        <p className="text-gray-400 text-sm">Click to read the full article</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:bg-emerald-950">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button
                            variant="outline"
                            onClick={() => window.open("https://academy.muhsinmashkur.com/blog/", "_blank", "noopener,noreferrer")}
                            className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                        >
                            Visit Blog <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <Social />

            {/* Call to Action */}
            <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join the Movement</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Be part of the mission to empower 10 million Bengali Muslims to understand the Qur'an by 2030
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="border-3 border-emerald-500 hover:cursor-pointer hover:scale-101">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Start Your Journey
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-gray-600 text-gray-300 hover:bg-amber-800 hover:cursor-pointer hover:scale-101"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Contact for Collaboration
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}