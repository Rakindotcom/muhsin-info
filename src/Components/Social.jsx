import { useState, useEffect } from "react"
import { FaYoutube, FaLinkedin, FaFacebook, FaTelegram, FaExternalLinkAlt } from "react-icons/fa"

export default function Social() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const socialPlatforms = [
        { name: "YouTube", icon: FaYoutube, color: "bg-red-500", textColor: "text-red-500", link: "#" },
        { name: "LinkedIn", icon: FaLinkedin, color: "bg-blue-600", textColor: "text-blue-600", link: "#" },
        { name: "Facebook", icon: FaFacebook, color: "bg-blue-500", textColor: "text-blue-500", link: "#" },
        { name: "Telegram", icon: FaTelegram, color: "bg-sky-500", textColor: "text-sky-500", link: "#" },
    ]

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl text-center">
                {/* Header */}
                <div className={`mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                        Welcome to Our Islamic Knowledge Seeking Family
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                        Join a supportive community of dedicated learners seeking Islamic knowledge, where studying, sharing wisdom,
                        and spiritual growth come together. Begin your journey of learning with us.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">
                    {socialPlatforms.map((platform, index) => {
                        const IconComponent = platform.icon
                        return (
                            <div
                                key={platform.name}
                                className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <a href={platform.link} className="group block text-center" aria-label={`Visit our ${platform.name} page`}>
                                    <div className="relative mb-3">
                                        <div
                                            className={`
                                                w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                                                mx-auto rounded-full ${platform.color}
                                                flex items-center justify-center
                                                transform transition-all duration-300 ease-out
                                                group-hover:scale-110 shadow-md group-hover:shadow-lg
                                            `}
                                        >
                                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                                        <FaExternalLinkAlt className={`w-3 h-3 sm:w-4 sm:h-4 ${platform.textColor}`} />
                                        <span className={`text-sm sm:text-base lg:text-lg font-semibold ${platform.textColor} group-hover:scale-105 transition-transform`}>
                                            {platform.name}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
