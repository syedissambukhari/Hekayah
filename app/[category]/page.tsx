"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Grid, List, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"

// ✅ Import centralized data
import { categories } from "@/lib/DESCRIPTION"

export default function CategoryPage(props: { params: Promise<{ category: string }> }) {
  // ✅ unwrap params (Next.js 15+)
  const params = use(props.params)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterBy, setFilterBy] = useState("all")

  // ✅ Get category data dynamically
  const categoryData = categories[params.category as keyof typeof categories] || categories["print-marketing"]

  // ✅ Filtering + sorting
  const filteredProducts = categoryData.products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterBy === "all" || product.category === filterBy),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return Number.parseInt(a.price.match(/\d+/)?.[0] || "0") - Number.parseInt(b.price.match(/\d+/)?.[0] || "0")
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const categoriesList = [...new Set(categoryData.products.map((p) => p.category))]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.title}</h1>
            <p className="text-xl opacity-90">{categoryData.description}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 capitalize">{categoryData.title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters + Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categoriesList.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="reviews">Reviews</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {categoryData.products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <Badge variant="secondary" className="mb-2 text-xs">
                    {product.category}
                  </Badge>

                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>

                  <p className="text-blue-600 font-semibold mb-3">{product.price}</p>

                  <div className="space-y-2">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/product/${params.category}/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Quick Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.slug} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {product.category}
                          </Badge>
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        </div>
                        <p className="text-xl text-blue-600 font-semibold">{product.price}</p>
                      </div>

                      <div className="flex items-center space-x-1 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                          <Link href={`/product/${params.category}/${product.slug}`}>View Details</Link>
                        </Button>
                        <Button variant="outline">Quick Quote</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setFilterBy("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
