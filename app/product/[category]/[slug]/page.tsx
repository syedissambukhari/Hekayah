"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Share2, Heart, Truck, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import InquiryForm from "@/components/inquiry-form"
import Header from "@/components/header"

// Mock product data - in real app, this would come from API/database
const getProductData = (slug: string) => {
  const products = {
    "floor-graphics": {
      name: "Premium Floor Graphics",
      category: "Workspace Branding",
      price: "Starting from $25/sqft",
      rating: 4.8,
      reviews: 127,
      images: [
        "/images/product-floor-graphics-1.png",
        "/images/product-floor-graphics-2.png",
        "/images/product-floor-graphics-3.png",
        "/images/product-floor-graphics-4.png",
      ],
      description:
        "Transform your workspace with high-quality, durable floor graphics that withstand heavy foot traffic while maintaining vibrant colors and sharp details.",
      features: [
        "Anti-slip surface coating",
        "UV-resistant inks",
        "Easy installation",
        "Custom shapes and sizes",
        "Removable adhesive",
      ],
      specifications: {
        Material: "Premium vinyl with lamination",
        Thickness: "3.2mm",
        Finish: "Matte anti-slip",
        Durability: "5+ years indoor use",
        Installation: "Self-adhesive",
        "Minimum Order": "10 sqft",
      },
      variations: [
        { name: "Standard Vinyl", price: "$25/sqft", image: "/images/variation-standard.png" },
        { name: "Premium Anti-Slip", price: "$35/sqft", image: "/images/variation-premium.png" },
        { name: "Textured Finish", price: "$40/sqft", image: "/images/variation-textured.png" },
      ],
      faqs: [
        {
          question: "How long do floor graphics last?",
          answer:
            "Our premium floor graphics are designed to last 5+ years with normal foot traffic when properly maintained.",
        },
        {
          question: "Are they safe to walk on?",
          answer: "Yes, all our floor graphics come with anti-slip coating that meets safety standards.",
        },
        {
          question: "Can they be removed without damage?",
          answer: "Yes, our graphics use removable adhesive that won't damage your floors when professionally removed.",
        },
      ],
    },
  }

  return products[slug as keyof typeof products] || products["floor-graphics"]
}

export default function ProductDetailPage({ params }: { params: { category: string; slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [showInquiryForm, setShowInquiryForm] = useState(false)

  const product = getProductData(params.slug)

  const relatedProducts = [
    { name: "Wall Murals", image: "/images/workspace-wall-murals.png", price: "$30/sqft" },
    { name: "Window Films", image: "/images/workspace-window-films.png", price: "$20/sqft" },
    { name: "Ceiling Graphics", image: "/images/workspace-ceiling-graphics.png", price: "$28/sqft" },
    { name: "Custom Signs", image: "/images/outdoor-signs.png", price: "$45/each" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${params.category}`} className="text-gray-600 hover:text-gray-900 capitalize">
              {params.category.replace("-", " ")}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href={`/${params.category}`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {params.category.replace("-", " ")}
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Variations */}
            <div>
              <h3 className="font-semibold mb-3">Available Options:</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variations.map((variation, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedVariation(index)}
                    className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedVariation === index
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={variation.image || "/placeholder.svg"}
                      alt={variation.name}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{variation.name}</div>
                      <div className="text-sm text-gray-600">{variation.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-xs font-medium">Free Delivery</div>
                <div className="text-xs text-gray-600">On orders over $500</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <div className="text-xs font-medium">Quality Guarantee</div>
                <div className="text-xs text-gray-600">5+ year durability</div>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-xs font-medium">Fast Turnaround</div>
                <div className="text-xs text-gray-600">3-5 business days</div>
              </div>
            </div>

            {/* Order Button */}
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setShowInquiryForm(true)}>
              Request Quote & Order Now
            </Button>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Our premium floor graphics are the perfect solution for businesses looking to enhance their
                      workspace branding while maintaining safety and durability. Each graphic is custom-designed to
                      your specifications and manufactured using state-of-the-art printing technology.
                    </p>
                    <p className="mb-4">
                      Whether you're looking to create wayfinding solutions, promotional displays, or decorative
                      elements, our floor graphics deliver exceptional results that withstand heavy foot traffic and
                      maintain their vibrant appearance for years.
                    </p>
                    <p>
                      All graphics come with professional installation guidelines and can be installed by your team or
                      our certified installation professionals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {product.faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-600 mb-4">{faq.answer}</p>
                        {index < product.faqs.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{relatedProduct.price}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <InquiryForm isOpen={showInquiryForm} onClose={() => setShowInquiryForm(false)} productName={product.name} />
      )}
    </div>
  )
}
