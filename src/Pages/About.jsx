import React from "react"
import { Badge } from "../Components/Badge"
import { Button } from "../Components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/Card"

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

export default function Component() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <section className="relative mt-14 py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        Muhsin Mashkur
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        A Speaker. A Teacher. A Torchbearer of Qur'anic Light.
                    </p>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                        From memorizing the Qur'an at 11, to earning the Prime Minister's Gold Medal at Dhaka University — Muhsin
                        Mashkur walks a lifelong path to reconnect the Ummah with the meaning of the Qur'an.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <BookOpen className="w-5 h-5 mr-2" />
                            View Courses
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Join Academy
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4 bg-gray-900/50">
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
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
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
                                        <p className="font-semibold">Part-Time Lecturer</p>
                                        <p className="text-sm text-gray-400">University of Dhaka (Since Dec 2022)</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Adjunct Faculty</p>
                                        <p className="text-sm text-gray-400">Islamic University of Technology (Since Jan 2020)</p>
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
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Academic Excellence</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <Award className="w-5 h-5 mr-2" />
                                    Prime Minister's Gold Medal
                                </CardTitle>
                                <CardDescription className="text-gray-400">2015 - University of Dhaka</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Awarded for outstanding academic performance in Arabic studies</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    First Academic Researcher
                                </CardTitle>
                                <CardDescription className="text-gray-400">Qur'anic Arabic in Bangladesh</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Pioneering research in Qur'anic Arabic pedagogy for Bengali speakers</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <Heart className="w-5 h-5 mr-2" />
                                    Hafiz at Age 11
                                </CardTitle>
                                <CardDescription className="text-gray-400">2001 - Al-Fatah Academy</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">Memorized the complete Qur'an with first-class distinction</p>
                            </CardContent>
                        </Card>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What I Do</h2>
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
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    Collaborate
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Signature Courses */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Signature Courses</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-emerald-800">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 text-xl">
                                    📘 Learn Quran with Meaning – Tadabbur Series
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Deep dive into Qur'anic understanding with comprehensive analysis</p>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    Join Now <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800">
                            <CardHeader>
                                <CardTitle className="text-blue-400 text-xl">🔥 Basic Spoken Arabic for Bengali Speakers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Master conversational Arabic with practical, everyday applications</p>
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Start Learning <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-800">
                            <CardHeader>
                                <CardTitle className="text-purple-400 text-xl">🕋 Arabic for Hajj & Umrah Travelers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Essential Arabic for your spiritual journey to the Holy Land</p>
                                <Button className="bg-purple-600 hover:bg-purple-700">
                                    Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-800">
                            <CardHeader>
                                <CardTitle className="text-orange-400 text-xl">🕌 Mindful Salah: Understanding Every Word</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Transform your prayer experience with complete understanding</p>
                                <Button className="bg-orange-600 hover:bg-orange-700">
                                    Begin Journey <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
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
                            className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                        >
                            Visit Blog <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join the Movement</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Be part of the mission to empower 10 million Bengali Muslims to understand the Qur'an by 2030
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Start Your Journey
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
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