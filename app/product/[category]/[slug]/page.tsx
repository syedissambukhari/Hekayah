"use client"

import { use, useState } from "react"
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

import { getProduct } from "@/lib/PRODUCT"

export default function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug, category } = use(params)
  const product = getProduct(category, slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [showInquiryForm, setShowInquiryForm] = useState(false)

  if (!product) return <div>Product not found</div>

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
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${category}`} className="text-gray-600 hover:text-gray-900 capitalize">
              {category.replace("-", " ")}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href={`/${category}`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category.replace("-", " ")}
          </Link>
        </Button>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
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
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-blue-600" : "border-gray-200"
                    }`}
                >
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.sectionId}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Variations */}
            <div>
              <h3 className="font-semibold mb-3">Available Options:</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variations.map((variation, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedVariation(i)}
                    className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${selectedVariation === i ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <Image src={variation.image} alt={variation.name} width={50} height={50} className="rounded" />
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

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                  <p className="text-gray-600">{product.description}</p>
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
                    {product.faqs.map((faq, i) => (
                      <div key={i}>
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-600 mb-4">{faq.answer}</p>
                        {i < product.faqs.length - 1 && <Separator />}
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
            {relatedProducts.map((related, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={related.image}
                      alt={related.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{related.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{related.price}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      {showInquiryForm && (
        <InquiryForm isOpen={showInquiryForm} onClose={() => setShowInquiryForm(false)} productName={product.name} />
      )}
    </div>
  )
}
