"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, MessageCircle, Lock, Truck, ChevronLeft, ChevronRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function HekayahWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const heroSlides = [
    {
      title: "Premium Advertising Solutions",
      description: "Transform your brand with our comprehensive range of advertising gifts and supplies",
      image: "/images/slider1.jpg",
    },
    {
      title: "Corporate Branding Excellence",
      description: "Professional signage and corporate gifts that make lasting impressions",
      image: "/images/slider2.jpg",
    },
    {
      title: "Exhibition & Event Solutions",
      description: "Complete backdrop and exhibition materials for successful events",
      image: "/images/slider3.jpg",
    },
  ]

  const workspaceProducts = [
    { name: "Floor Graphics", image: "/images/workspace-floor-graphics.png" },
    { name: "Wall Murals", image: "/images/workspace-wall-murals.png" },
    { name: "Window Films", image: "/images/workspace-window-films.png" },
    { name: "Ceiling Graphics", image: "/images/workspace-ceiling-graphics.png" },
  ]

  const tradeShowProducts = [
    { name: "Pop-up Displays", image: "/images/trade-show-popup.png" },
    { name: "Banner Stands", image: "/images/trade-show-banners.png" },
    { name: "Exhibition Booths", image: "/images/trade-show-booth.png" },
    { name: "Display Systems", image: "/images/trade-show-systems.png" },
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      rating: 5,
      text: "Exceptional quality and professional service. Our corporate branding project exceeded expectations.",
      image: "/images/testimonial-ahmed.png",
    },
    {
      name: "Sarah Williams",
      rating: 5,
      text: "The exhibition display they created helped us win three new major clients at the trade show.",
      image: "/images/testimonial-sarah.png",
    },
    {
      name: "Mohammed Hassan",
      rating: 5,
      text: "Fast delivery and excellent customer service. Highly recommend for all advertising needs.",
      image: "/images/testimonial-mohammed.png",
    },
  ]

  const trustedLogos = [
    "/images/company-logo-tech.png",
    "/images/company-logo-finance.png",
    "/images/company-logo-retail.png",
    "/images/company-logo-healthcare.png",
    "/images/company-logo-education.png",
    "/images/company-logo-hospitality.png",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.description}</p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/services">Explore Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center justify-center space-x-3 text-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="font-semibold">Excellent Reviews</div>
                <div className="text-sm text-gray-600">4.9/5 Customer Rating</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center space-x-3 text-center hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold">Chat or Email Us</div>
                <div className="text-sm text-gray-600">24/7 Customer Support</div>
              </div>
            </Link>

            <div className="flex items-center justify-center space-x-3 text-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold">Safe & Secure</div>
                <div className="text-sm text-gray-600">Payment Processing</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-center">
              <div className="bg-orange-100 p-3 rounded-full">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold">Flexible Delivery</div>
                <div className="text-sm text-gray-600">Venue & Office Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Branding Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workspace Branding</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your workspace with our premium branding solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workspaceProducts.map((product) => (
              <Card key={product.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={`/product/workspace-branding/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image src="/images/poster-printing-facility.png" alt="Featured Poster" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="text-white px-8 md:px-12 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium Poster Printing</h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  High-quality large format printing for exhibitions, events, and advertising campaigns
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/print-marketing">Explore Printing Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Shows Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade Show Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make a lasting impression at your next trade show or exhibition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradeShowProducts.map((product) => (
              <Card key={product.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={`/product/backdrops-exhibition/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      View More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/corporate-identity.png" alt="Corporate Branding" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Corporate Branding</h3>
                  <p className="opacity-90">Complete brand identity solutions</p>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/event-branding.png" alt="Event Materials" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="text-white p-4">
                    <h3 className="text-lg font-bold mb-1">Event Materials</h3>
                    <p className="text-sm opacity-90">Professional event branding</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/custom-gift-items.png" alt="Custom Gifts" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="text-white p-4">
                    <h3 className="text-lg font-bold mb-1">Custom Gifts</h3>
                    <p className="text-sm opacity-90">Personalized corporate gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Lifestyle</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/lifestyle-clothing.png"
                      alt="Lifestyle Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Custom Apparel</h4>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/promotional-products.png"
                      alt="Lifestyle Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Promotional Items</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Just for You</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/personal-gift-items.png"
                      alt="Personal Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Personal Gifts</h4>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/custom-accessories-items.png"
                      alt="Personal Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Custom Accessories</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Decor</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/wall-art-designs.png"
                      alt="Decor Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Wall Art</h4>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/images/interior-design-elements.png"
                      alt="Decor Product"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">Interior Design</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Simple steps to bring your vision to life</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { step: "1", title: "Inquiry", description: "Share your requirements" },
              { step: "2", title: "Quotation", description: "Receive detailed pricing" },
              { step: "3", title: "Payment", description: "Secure payment processing" },
              { step: "4", title: "Mock Up", description: "Review and approve design" },
              { step: "5", title: "Production", description: "Professional manufacturing" },
              { step: "6", title: "Delivery", description: "Collection or venue delivery" },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
                {index < 5 && <div className="hidden lg:block w-8 h-0.5 bg-gray-300 mt-8 absolute translate-x-24" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses</h2>
            <p className="text-lg text-gray-600">Join hundreds of satisfied clients</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg"
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Trusted Company ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Call-to-Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-gray-600 mb-8">Get answers to all your printing and advertising questions</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Image
                  src="/hekayah-logo.svg"
                  alt="Hekayah Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted partner for premium advertising gifts and supplies. Creating memorable brand experiences
                since 2010.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300" asChild>
                  <Link href="https://facebook.com" target="_blank">
                    Facebook
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300" asChild>
                  <Link href="https://instagram.com" target="_blank">
                    Instagram
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gray-300" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-300 hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Al Darari Commercial - Industrial Area - Sharjah</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+971 50 537 3817</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>hekayahadv@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to receive updates about our latest products and offers.</p>
              <div className="space-y-3">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Subscribe</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hekayah Advertising Gifts & Supplies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Contact Button (Mobile) */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700" asChild>
          <Link href="/contact">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
