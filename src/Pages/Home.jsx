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
import VisitorStats from "../Components/VisitorStats"
import PreviewSection from "../Components/PreviewSection"
import { useTranslation } from "../hooks/useTranslation"

export default function Component() {
    const { t } = useTranslation()
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
                            {t('viewCourses')}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.open("https://academy.muhsinmashkur.com/dashboard/", "_blank", "noopener,noreferrer")}
                            className="bg-transparent border-gray-600 text-gray-300 hover:cursor-pointer"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            {t('joinAcademy')}
                        </Button>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-gray-800">
                        <Quote className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">{t('mission2030')}</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {t('missionDescription')}
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
                                {t('enlightenedSoul')}
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify w-[90%]">
                                {t('aboutDescription')}
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center text-emerald-400">
                                    <Award className="w-5 h-5 mr-3" />
                                    <span>{t('experience10Years')}</span>
                                </div>
                                <div className="flex items-center text-emerald-400">
                                    <GraduationCap className="w-5 h-5 mr-3" />
                                    <span>{t('mphilQuranic')}</span>
                                </div>
                                <div className="flex items-center text-emerald-400">
                                    <BookOpen className="w-5 h-5 mr-3" />
                                    <span>{t('phdOngoing')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-emerald-400 flex items-center">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        {t('currentPositions')}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-300">
                                    <div>
                                        <p className="font-semibold">{t('fellow')}</p>
                                        <p className="text-sm text-gray-400">{t('fellowOrg')}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{t('partTimeLecturer')}</p>
                                        <p className="text-sm text-gray-400">{t('partTimeLecturerOrg')}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{t('adjunctFaculty')}</p>
                                        <p className="text-sm text-gray-400">{t('adjunctFacultyOrg')}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{t('khateeb')}</p>
                                        <p className="text-sm text-gray-400">{t('khateebOrg')}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{t('founderCeo')}</p>
                                        <p className="text-sm text-gray-400">{t('founderCeoOrg')}</p>
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
                    {t('education')}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* PhD */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">🎓</span>
                            <h4 className="text-xl font-bold text-white">{t('phdOngoingTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{t('phdDepartment')}</p>
                        <p className="text-gray-400 italic">
                            {t('topic')} <span className="text-emerald-300 font-medium">{t('phdTopic')}</span>
                        </p>
                    </div>

                    {/* MPhil */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">📚</span>
                            <h4 className="text-xl font-bold text-white">{t('mphilTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1"><strong>{t('institution')}:</strong> {t('universityOfDhaka')}</p>
                        <p className="text-gray-300 font-semibold mb-1"><strong>{t('department')}:</strong> {t('arabicDepartment')}</p>
                        <p className="text-gray-400 italic mb-1">
                            {t('topic')}: <span className="text-emerald-300 font-medium">"{t('mphilTopic')}"</span>
                        </p>
                        <p className="text-gray-400">{t('degreeAwarded')}</p>
                    </div>

                    {/* MA */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">🎓</span>
                            <h4 className="text-xl font-bold text-white">{t('maTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{t('arabicDepartment')}, {t('universityOfDhaka')}</p>
                        <p className="text-emerald-300 font-bold">{t('maCgpa')}</p>
                    </div>

                    {/* BA */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">📜</span>
                            <h4 className="text-xl font-bold text-white">{t('baTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{t('arabicDepartment')}, {t('universityOfDhaka')}</p>
                        <p className="text-emerald-300 font-bold">{t('baCgpa')}</p>
                        <p className="text-amber-300 font-bold">{t('pmGoldMedal')}
                        </p>
                    </div>

                    {/* Takmeel / Dawratul Hadith */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">🕌</span>
                            <h4 className="text-xl font-bold text-white">{t('takmeelTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{t('takmeelOrg')}</p>
                        <p className="text-emerald-300 font-bold">{t('takmeelGrade')}</p>
                    </div>

                    {/* Hifzul Qura'n */}
                    <div className="bg-gray-800 border border-emerald-600 rounded-lg p-6 shadow-lg hover:shadow-emerald-500 transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                            <span className="text-emerald-400 text-2xl mr-3">📖</span>
                            <h4 className="text-xl font-bold text-white">{t('hifzTitle')}</h4>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{t('hifzOrg')}</p>
                        <p className="text-emerald-300 font-bold">{t('hifzGrade')}</p>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t('areasOfExpertise')}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {Array.isArray(t('expertise')) ? t('expertise').map((expertise, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></div>
                                <span className="text-gray-300">{expertise}</span>
                            </div>
                        )) : null}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t('whatWeDo')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <GraduationCap className="w-6 h-6 mr-2" />
                                    {t('arabicLanguageCourses')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    {t('arabicCoursesDesc')}
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open("https://academy.muhsinmashkur.com/", "_blank", "noopener,noreferrer")}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    {t('learnMore')}
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <BookOpen className="w-6 h-6 mr-2" />
                                    {t('quranStudyPrograms')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    {t('quranProgramsDesc')}
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open("https://academy.muhsinmashkur.com/", "_blank", "noopener,noreferrer")}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    {t('startLearning')}
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
                            <CardHeader>
                                <CardTitle className="text-emerald-400 flex items-center">
                                    <Globe className="w-6 h-6 mr-2" />
                                    {t('islamicEdtech')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">
                                    {t('islamicEdtechDesc')}
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={scrollToFooter}
                                    className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                                >
                                    {t('collaborate')}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <PreviewSection />
            <section className="py-16 px-4 bg-gray-800/30">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">{t('ourBooks')}</h2>
                <BookShowcase />
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t('whatStudentsSay')}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                                <p className="text-gray-300 mb-4 italic">
                                    "{t('testimonial1')}"
                                </p>
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400">{t('testimonial1Author')}</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                                <p className="text-gray-300 mb-4 italic">
                                    "{t('testimonial2')}"
                                </p>
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400">{t('testimonial2Author')}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t('quranBlogs')}</h2>
                    <div className="space-y-6">
                        {Array.isArray(t('blogTitles')) ? t('blogTitles').map((title, index) => (
                            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">✍️ {title}</h3>
                                        <p className="text-gray-400 text-sm">{t('clickToRead')}</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:bg-emerald-950">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )) : null}
                    </div>
                    <div className="text-center mt-8">
                        <Button
                            variant="outline"
                            onClick={() => window.open("https://academy.muhsinmashkur.com/blog/", "_blank", "noopener,noreferrer")}
                            className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950"
                        >
                            {t('visitBlog')} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <Social />

            {/* Call to Action */}
            <section className="py-12 px-4 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('joinMovement')}</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        {t('movementDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://academy.muhsinmashkur.com/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="border-3 border-emerald-500 hover:cursor-pointer hover:scale-101">
                                <BookOpen className="w-5 h-5 mr-2" />
                                {t('startYourJourney')}
                            </Button>
                        </a>

                        <a href="https://calendly.com/muhsin-du/30min" target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-gray-600 text-gray-300 hover:bg-amber-800 hover:cursor-pointer hover:scale-101"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                {t('contactForCollaboration')}
                            </Button>
                        </a>

                    </div>
                </div>
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('visitorStatistics')}</h2>
                    <VisitorStats />
                </div>
            </section>
        </div>
    );
}