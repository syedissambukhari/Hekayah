"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Hekayah offer?",
        answer:
          "We offer a comprehensive range of advertising and promotional services including print marketing, custom apparel, office branding, signage, flags, exhibition displays, and corporate gifts.",
      },
      {
        question: "How long has Hekayah been in business?",
        answer:
          "Hekayah has been serving businesses with premium advertising solutions since 2010, building a reputation for quality and reliability over more than a decade.",
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer:
          "Yes, we work with everyone from small startups to large corporations, tailoring our solutions to meet your specific needs and budget.",
      },
    ],
  },
  {
    category: "Ordering & Pricing",
    questions: [
      {
        question: "How do I get a quote for my project?",
        answer:
          "You can request a quote by filling out our inquiry form on any product page, calling us directly, or sending us an email with your requirements. We'll respond within 24 hours.",
      },
      {
        question: "What information do I need to provide for a quote?",
        answer:
          "Please provide details about the product/service you need, quantities, dimensions, design requirements, timeline, and any special specifications.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, we offer competitive pricing for bulk orders. The more you order, the better the unit price becomes. Contact us for volume pricing.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, credit cards, checks, and for established clients, we offer net payment terms. All payments are processed securely.",
      },
    ],
  },
  {
    category: "Design & Production",
    questions: [
      {
        question: "Do you provide design services?",
        answer:
          "Yes, our experienced design team can create custom designs for your project. We also accept your own artwork files in various formats.",
      },
      {
        question: "What file formats do you accept?",
        answer:
          "We accept AI, EPS, PDF, PSD, PNG, JPG, and other common design file formats. For best results, we recommend vector files (AI, EPS) for logos and graphics.",
      },
      {
        question: "Can I see a proof before production?",
        answer:
          "We provide digital proofs for all projects and, when requested, physical samples for approval before proceeding with full production.",
      },
      {
        question: "What is your typical turnaround time?",
        answer:
          "Standard turnaround is 3-5 business days for most products. Rush orders can be accommodated with additional fees. Complex projects may require longer lead times.",
      },
    ],
  },
  {
    category: "Materials & Quality",
    questions: [
      {
        question: "What materials do you use?",
        answer:
          "We use only premium materials from trusted suppliers. This includes high-grade vinyls, fabrics, papers, and substrates that ensure durability and professional appearance.",
      },
      {
        question: "Are your products weather-resistant?",
        answer:
          "Yes, our outdoor products are designed to withstand various weather conditions. We use UV-resistant inks and weatherproof materials for outdoor applications.",
      },
      {
        question: "Do you offer warranties on your products?",
        answer:
          "We stand behind our quality with warranties that vary by product type. Indoor graphics typically have 3-5 year warranties, while outdoor products have 2-3 year warranties.",
      },
    ],
  },
  {
    category: "Delivery & Installation",
    questions: [
      {
        question: "Do you offer delivery services?",
        answer:
          "Yes, we offer flexible delivery options including office delivery, venue delivery, and pickup from our facility. Delivery fees vary by location and order size.",
      },
      {
        question: "Do you provide installation services?",
        answer:
          "We offer professional installation services for complex projects like large signage, wall graphics, and exhibition displays. Simple items come with installation instructions.",
      },
      {
        question: "Can you deliver to multiple locations?",
        answer:
          "Yes, we can coordinate deliveries to multiple locations for large organizations. This is particularly useful for chain stores or multi-location events.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={faqIndex} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Button
                          variant="ghost"
                          onClick={() => toggleItem(itemId)}
                          className="w-full p-6 text-left justify-between hover:bg-gray-50"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </Button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">Try searching with different keywords or browse our categories above.</p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help with any questions about our products and
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
