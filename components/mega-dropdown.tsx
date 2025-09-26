"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface DropdownCategory {
  title: string
  items: string[]
}

interface MegaDropdownProps {
  categories: DropdownCategory[]
  featuredImage?: {
    src: string
    alt: string
    title: string
  }
  mostPopular?: {
    title: string
    items: Array<{
      name: string
      image: string
    }>
  }
}

export default function MegaDropdown({ 
  categories, 
  featuredImage, 
  mostPopular 
}: MegaDropdownProps) {
  return (
    <div className="fixed left-0 w-full bg-white z-10" style={{ top: '140px' }}>
      <div className="container mx-auto px-2 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* Main Categories - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Column 1 */}
              <div className="space-y-1">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[0]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[0]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-1">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[1]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[1]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[2]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[2]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[3]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[3]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-1">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[4]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[4]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[5]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[5]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0 flex items-center">
                    {categories[6]?.title}
                    <ChevronRight className="w-4 h-4 ml-1 text-gray-500" />
                  </h3>
                  <ul className="-space-y-1">
                    {categories[6]?.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/product/print-marketing/${item.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")}`}
                          className="text-xs text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Content - Takes up 1 column */}
          <div className="lg:col-span-1 space-y-0.5">
            {/* Featured Image */}
            {featuredImage && (
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-16">
                    <Image
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-center w-full">
                      <h4 className="font-bold text-xl text-white">{featuredImage.title}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Most Popular */}
            {mostPopular && (
              <div>
                <h3 className="text-xs font-semibold text-gray-900 mb-0">
                  {mostPopular.title}
                </h3>
                <div className="space-y-0">
                  {mostPopular.items.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-1">
                        <div className="flex items-center space-x-1">
                          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
