import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

const services = [
  {
    title: "Print & Marketing",
    description: "Professional printing solutions for all your marketing materials",
    features: ["Business Cards", "Brochures & Flyers", "Catalogs", "Posters", "Banners"],
    image: "/images/print-marketing-hero.png",
    link: "/print-marketing",
  },
  {
    title: "Fashion & Textile",
    description: "Custom apparel and textile solutions for your brand",
    features: ["Custom T-Shirts", "Embroidery", "Screen Printing", "Uniforms", "Accessories"],
    image: "/images/fashion-textile-hero.png",
    link: "/fashion-textile",
  },
  {
    title: "Office & Store Branding",
    description: "Transform your workspace with professional branding solutions",
    features: ["Wall Graphics", "Floor Stickers", "Window Films", "Interior Design", "Wayfinding"],
    image: "/images/office-branding-hero.png",
    link: "/office-store-branding",
  },
  {
    title: "Signages",
    description: "Eye-catching signage solutions for indoor and outdoor use",
    features: ["Outdoor Signs", "Indoor Signs", "Digital Displays", "LED Signs", "Neon Signs"],
    image: "/images/signages-hero.png",
    link: "/signages",
  },
  {
    title: "Flags",
    description: "Custom flags for corporate events and brand promotion",
    features: ["Corporate Flags", "Event Flags", "Custom Designs", "Flag Poles", "Mounting Systems"],
    image: "/images/flags-hero.png",
    link: "/flags",
  },
  {
    title: "Backdrops & Exhibition",
    description: "Complete exhibition and event display solutions",
    features: ["Trade Show Displays", "Pop-up Stands", "Banner Stands", "Exhibition Booths", "Portable Displays"],
    image: "/images/exhibition-hero.png",
    link: "/backdrops-exhibition",
  },
  {
    title: "Corporate Gifts & Bags",
    description: "Memorable promotional items and corporate gifts",
    features: ["Promotional Items", "Gift Sets", "Custom Bags", "Awards & Trophies", "Tech Accessories"],
    image: "/images/corporate-gifts-hero.png",
    link: "/corporate-gifts-bags",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive advertising and promotional solutions tailored to your business needs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={service.link}>
                    Explore {service.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures quality results and timely delivery for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your requirements, timeline, and budget to understand your vision.",
                image: "/images/services-consultation.png",
              },
              {
                step: "02",
                title: "Design & Quote",
                description: "Our team creates designs and provides detailed quotations for your approval.",
                image: "/images/services-design.png",
              },
              {
                step: "03",
                title: "Production",
                description: "Using premium materials and advanced equipment, we bring your project to life.",
                image: "/images/services-production.png",
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Every product undergoes rigorous quality control before leaving our facility.",
                image: "/images/services-quality.png",
              },
              {
                step: "05",
                title: "Delivery",
                description: "We ensure safe and timely delivery to your specified location.",
                image: "/images/services-delivery.png",
              },
              {
                step: "06",
                title: "Support",
                description: "Our team provides ongoing support and maintenance when needed.",
                image: "/images/services-support.png",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Quote
            </Button>
            <Button size="lg" variant="outline">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
