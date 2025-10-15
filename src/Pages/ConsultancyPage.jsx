import React from "react"
import { Badge } from "../Components/Badge"
import { Button } from "../Components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/Card"
import Social from "../Components/Social"
import TypewriterHeading from "../Components/Typewriter"
import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useTranslation";

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

export default function ConsultancyPage() {
  const { t } = useTranslation();
  
  const steps = [
    {
      title: t('consultationType1Title'),
      content: t('consultationType1Content'),
    },
    {
      title: t('consultationType2Title'),
      content: t('consultationType2Content'),
    },
    {
      title: t('consultationType3Title'),
      content: t('consultationType3Content'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <TypewriterHeading />
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">{t('consultancySubtitle')}</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            {t('consultancyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/muhsin-du/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer text-white border-1 border-white hover:border-amber-400"
              >
                {t('bookSession')}
              </Button>
            </a>
            
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border border-white hover:border-amber-400 hover:cursor-pointer"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              {t('checkAvailability')}
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
            <p className="text-gray-200 whitespace-pre-line text-justify leading-relaxed text-sm p-[-6px]">
              {step.content}
            </p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <div className="max-w-5xl mx-auto bg-gray-900/50 rounded-2xl shadow-xl backdrop-blur-md p-10 border border-gray-800">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {t('aboutConsultantTitle')}
          </h2>
          <div className="space-y-6 text-sm md:text-lg text-gray-300 text-justify leading-relaxed">
            <p>
              {t('consultantDescription1')}
            </p>
            <p>
              {t('consultantDescription2')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('servicesOffered')}</h2>
            <p className="text-gray-400 text-lg">{t('comprehensiveSupport')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">
                  {t('personalConsultation')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {t('personalConsultationDesc')}
                </p>
                <div className="flex items-center text-emerald-400 text-sm">
                  <span>{t('personalizedApproach')}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  <Users className="w-6 h-6 mr-2" />
                  {t('groupSeminars')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {t('groupSeminarsDesc')}
                </p>
                <div className="flex items-center text-blue-400 text-sm">
                  <span>{t('interactiveWorkshops')}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-xl">
                  <BookOpen className="w-6 h-6 mr-2" />
                  {t('comprehensivePrograms')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {t('comprehensiveProgramsDesc')}
                </p>
                <div className="flex items-center text-purple-400 text-sm">
                  <span>{t('lifeStageOriented')}</span>
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
              {t('consultNowBtn')}
            </Button>
          </div>
        </div>
      </section>      

      {/* Consultation Options */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('consultationOptions')}</h2>
            <p className="text-gray-400 text-lg">{t('consultationOptionsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Quick Advice Card */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-emerald-800 relative">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">{t('quickConsultation30')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-emerald-400">{t('price990')}</div>
                <div className="text-gray-300">
                  <p className="font-semibold">{t('focusedSession30')}</p>
                  <p className="text-sm text-gray-400 mt-2">{t('quickInsights')}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-emerald-400 text-sm">
                    <span>{t('targetedGuidance')}</span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <span>{t('quickSolutions')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deep Session Card */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">{t('mostPopular')}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">{t('deepSession60')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-blue-400">{t('price1500to2000')}</div>
                <div className="text-gray-300">
                  <p className="font-semibold">{t('fullHourGuidance')}</p>
                  <p className="text-sm text-gray-400 mt-2">{t('deepTransformational')}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-400 text-sm">
                    <span>{t('comprehensiveAnalysis')}</span>
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <span>{t('detailedActionPlan')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Support Plan Card */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-800 relative">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-xl">{t('monthlySupportPlan')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-purple-400">{t('priceFrom7500')}</div>
                <div className="text-gray-300">
                  <p className="font-semibold">{t('fourSessionsPerMonth')}</p>
                  <p className="text-sm text-gray-400 mt-2">{t('forCouplesSeekingChange')}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-purple-400 text-sm">
                    <span>{t('ongoingSupport')}</span>
                  </div>
                  <div className="flex items-center text-purple-400 text-sm">
                    <span>{t('customizedStrategies')}</span>
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
              {t('checkAvailabilityBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* Friday Sessions */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t('fridaySpecialSessions')}
            </h2>
            <p className="text-gray-400 text-lg">
              {t('fridaySubtitle')}
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
                  {t('buildCareerWithFaith')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
                <p className="flex items-center gap-2 text-emerald-300">
                  <Clock className="w-4 h-4" /> {t('afterJummah130')}
                </p>
                <p className="flex items-center gap-2 text-emerald-200">
                  <Users className="w-4 h-4" /> {t('studentsYoungProfessionals')}
                </p>
                <p>
                  {t('careerSessionDesc')}
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
                  {t('soulHealing')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
                <p className="flex items-center gap-2 text-blue-300">
                  <Clock className="w-4 h-4" /> {t('afterJummah130')}
                </p>
                <p className="flex items-center gap-2 text-blue-200">
                  <Users className="w-4 h-4" /> {t('anyoneEmotionalBurdens')}
                </p>
                <p>
                  {t('soulHealingDesc')}
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
                  {t('protectingHome')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2 text-justify">
                <p className="flex items-center gap-2 text-purple-300">
                  <Clock className="w-4 h-4" /> {t('afterJummah130')}
                </p>
                <p className="flex items-center gap-2 text-purple-200">
                  <Users className="w-4 h-4" /> {t('couplesParentsFamilyLeaders')}
                </p>
                <p>
                  {t('protectingHomeDesc')}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('booksResources')}</h2>
            <p className="text-gray-400 text-lg">{t('instantDigitalDownloads')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t('islamicMarriageToolkit')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-400 mb-2">৳450</div>
                <p className="text-gray-300 mb-4">{t('instantPdfDownload')}</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300 w-full"
                >
                  {t('downloadNow')}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-lg">
                  <Users className="w-5 h-5 mr-2" />
                  {t('parentingWisdomModernFamilies')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400 mb-2">৳350</div>
                <p className="text-gray-300 mb-4">{t('instantPdfDownload')}</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-600 text-blue-400 hover:bg-blue-950 hover:text-blue-300 w-full"
                >
                  {t('downloadNow')}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  {t('fortyHadithFamilyLife')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400 mb-2">৳250</div>
                <p className="text-gray-300 mb-4">{t('instantPdfDownload')}</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-purple-600 text-purple-400 hover:bg-purple-950 hover:text-purple-300 w-full"
                >
                  {t('downloadNow')}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('frequentlyAskedQuestions')}</h2>
            <p className="text-gray-400 text-lg">{t('everythingYouNeedToKnow')}</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: t('islamicFamilyConsultingFaq'),
                answer: t('islamicFamilyConsultingAnswer'),
              },
              {
                question: t('faq2Question'),
                answer: t('faq2Answer'),
              },
              {
                question: t('faq3Question'),
                answer: t('faq3Answer'),
              },
              {
                question: t('faq4Question'),
                answer: t('faq4Answer'),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('readyToTransformFamily')}</h2>
          <p className="text-xl text-gray-300 mb-8">{t('takeFirstStepToday')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-white hover:border-amber-400">
              {t('bookYourSession')}
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-white hover:border-amber-400"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t('checkAvailabilityBtn')}
            </Button>
          </div>
        </div>
      </section>

      <Social />
    </div>
  )
}