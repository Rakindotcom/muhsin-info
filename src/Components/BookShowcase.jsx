import React from "react"
import { BookOpen } from "lucide-react"
import { Button } from "./Button"
import { ExternalLink } from "lucide-react"

export function BookShowcase() {
  const bookDetails = {
    title: "কুরআন বোঝার হাতেখড়ি",
    author: "Hafiz Mawlana Muhammad Muhsin Mashkur",
    publisher: "Ilham (ILHAM)",
    subject: "Discussions on the Qur'an",
    pages: "335",
    cover: "Hardcover",
    edition: "1st Edition, 2025",
    isbn: "978-984-98316-0-0",
    language: "Bengali",
    detailsUrl: "https://academy.muhsinmashkur.com/book/",
  }

  return (
    <div className="max-w-6xl mx-auto px-2 py-6">
      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Side - Book Image */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="/book1.png"
                alt="কুরআন বোঝার হাতেখড়ি book cover"
                className="relative z-10 w-72 h-96 object-cover rounded-lg shadow-2xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Side - Book Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 leading-tight bangla">
                {bookDetails.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Author:</span>
                  <span className="text-gray-200 font-semibold">{bookDetails.author}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Publisher:</span>
                  <span className="text-gray-200">{bookDetails.publisher}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Subject:</span>
                  <span className="text-gray-200">{bookDetails.subject}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Pages:</span>
                  <span className="text-gray-200">{bookDetails.pages}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Cover:</span>
                  <span className="text-gray-200">{bookDetails.cover}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Edition:</span>
                  <span className="text-gray-200">{bookDetails.edition}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">ISBN:</span>
                  <span className="text-gray-200 font-mono text-sm">{bookDetails.isbn}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-gray-400 font-medium min-w-[100px]">Language:</span>
                  <span className="text-gray-200">{bookDetails.language}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(bookDetails.detailsUrl, "_blank")}
              >
                Check Details
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
