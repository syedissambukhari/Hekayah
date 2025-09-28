"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { navigationSections } from "./navigation-config"
import MegaDropdownNav from "./mega-dropdown-nav"
import MobileNavSection from "./mobile-nav-section"

// Empty array for backward compatibility - all navigation now comes from navigation-config.ts
const navigationItems: Array<{ label: string, items: string[] }> = []

export default function Header() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleSection = (label: string) => {
    setOpenSections((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/LOGO.svg" alt="Hekayah Logo" width={250} height={250} className="h-20- w-15" />
        </Link>

        <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md ml-140">
          <div className="relative flex-1">
            <Input
              placeholder="Search..."
              className="pr-4 bg-white border-gray-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
            />
          </div>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2 h-10"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            {/* <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@hekayah.com</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t relative z-50 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="px-4 py-3 text-sm font-medium">
                      Home
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/">Homepage</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/about">About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services">Our Services</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Dynamic Navigation Sections */}
                {navigationSections.map((section) => (
                  <MegaDropdownNav
                    key={section.id}
                    section={section}
                    activeDropdown={activeDropdown}
                    onDropdownClick={handleDropdownClick}
                  />
                ))}

                {navigationItems.map((item) => (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="px-4 py-3 text-sm font-medium">
                        {item.label}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem} asChild>
                          <Link
                            href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {subItem}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80 p-0 bg-white">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <SheetHeader className="px-6 py-4 border-b bg-gray-50">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-lg font-semibold text-gray-900">Menu</SheetTitle>
                      <Image src="/hekayah-logo.png" alt="Hekayah Logo" width={80} height={30} className="h-8 w-auto" />
                    </div>
                  </SheetHeader>

                  {/* Search Bar */}
                  <div className="px-6 py-4 border-b bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Input
                        placeholder="Search..."
                        className="flex-1 bg-white border-gray-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                      />
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2 h-10"
                      >
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Navigation Content */}
                  <div className="flex-1 overflow-y-auto">
                    <nav className="px-2 py-4 space-y-1">
                      {/* Home Section */}
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                          <span>Home</span>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-2">
                          <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                            <Link
                              href="/"
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            >
                              Homepage
                            </Link>
                            <Link
                              href="/about"
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            >
                              About Us
                            </Link>
                            <Link
                              href="/services"
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            >
                              Our Services
                            </Link>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Dynamic Mobile Navigation Sections */}
                      {navigationSections.map((section) => (
                        <MobileNavSection
                          key={section.id}
                          section={section}
                          openSections={openSections}
                          onToggleSection={toggleSection}
                        />
                      ))}
                    </nav>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 border-t bg-gray-50">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>+971 50 537 3817</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>info@hekayah.com</span>
                      </div>
                      <div className="pt-2">
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
