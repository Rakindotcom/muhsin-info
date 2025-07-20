import React from "react"
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

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-4xl pt-10 md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Islamic Family Consultancy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">Nurturing Homes & Relationships</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Guiding families toward harmony and understanding through authentic Islamic principles combined with modern
            counselling approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Users className="w-5 h-5 mr-2" />
              Upcoming Programs
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
            >
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About the Consultant</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  With over <span className="text-emerald-400 font-semibold">15 years of experience</span> in Islamic
                  family counselling, I combine traditional wisdom with modern approaches.
                </p>
                <p className="leading-relaxed">
                  My qualifications include certification in Islamic Psychology and Family Therapy from Al-Azhar
                  University.
                </p>
                <p className="leading-relaxed">
                  Successfully guided <span className="text-emerald-400 font-semibold">1,200+ families</span> since
                  2021, with a <span className="text-emerald-400 font-semibold">95% satisfaction rate</span>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-xl p-6 border border-gray-800">
                <Award className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">15+ Years</h3>
                <p className="text-gray-300 text-sm">Experience in Islamic counselling</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-gray-800">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold text-blue-400 mb-2">1,200+</h3>
                <p className="text-gray-300 text-sm">Families guided successfully</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-gray-800">
                <Star className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl font-semibold text-purple-400 mb-2">95%</h3>
                <p className="text-gray-300 text-sm">Client satisfaction rate</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Certified</h3>
                <p className="text-gray-300 text-sm">Al-Azhar University</p>
              </div>
            </div>
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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-emerald-800 relative">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">
                  
                  Standard Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-emerald-400">500 BDT</div>
                <div className="text-gray-300">
                  <p className="font-semibold">30-minute focused session</p>
                  <p className="text-sm text-gray-400 mt-2">Perfect for specific questions or follow-ups.</p>
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

            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-800 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center text-xl">
                  
                  Extended Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-blue-400">1200 BDT</div>
                <div className="text-gray-300">
                  <p className="font-semibold">Full hour of in-depth guidance</p>
                  <p className="text-sm text-gray-400 mt-2">Recommended for complex issues or initial consultations.</p>
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

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-800 relative">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center text-xl">
                  
                  Free Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-purple-400">FREE</div>
                <div className="text-gray-300">
                  <p className="font-semibold">10-minute discovery call</p>
                  <p className="text-sm text-gray-400 mt-2">Ask questions and determine if we're the right fit.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-purple-400 text-sm">
                    
                    <span>No commitment</span>
                  </div>
                  <div className="flex items-center text-purple-400 text-sm">
                    
                    <span>Perfect introduction</span>
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

      {/* Upcoming Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Upcoming Seminars & Programmes</h2>
            <p className="text-gray-400 text-lg">Join our transformative workshops and courses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-emerald-800 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-emerald-600 text-white">12 July</Badge>
                  
                </div>
                <CardTitle className="text-emerald-400 text-lg">Healthy Marriages in Modern Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Three-hour interactive workshop with practical exercises.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-600 text-white">28 July</Badge>
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <CardTitle className="text-blue-400 text-lg">Positive Parenting in Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Effective discipline strategies based on prophetic teachings.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-600 text-white">10 August</Badge>
                  <Heart className="w-5 h-5 text-purple-400" />
                </div>
                <CardTitle className="text-purple-400 text-lg">Pre-Marriage Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Four weekly sessions covering all aspects of Islamic marriage.</p>
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
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
                    
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              
              Book Your Session
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
