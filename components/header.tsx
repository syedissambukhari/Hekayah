"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, Phone, Mail, ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import MegaDropdown from "@/components/mega-dropdown"
import { useState } from "react"

const printMarketingCategories = [
  {
    title: "Stationery & Corporate Identity",
    items: [
      "Business Cards",
      "Letterheads", 
      "Envelopes",
      "Folders",
      "Notepads",
      "Notebook & Journal",
      "Binding",
      "Thank You Cards",
      "Certificates",
      "Calendars",
      "Hang Tags"
    ]
  },
  {
    title: "Brochures & Flyers",
    items: [
      "Brochures",
      "Flyers", 
      "Booklets & Catalogues"
    ]
  },
  {
    title: "Seals",
    items: [
      "Self Ink Stamps",
      "Wax Seal",
      "Embossing Seal"
    ]
  },
  {
    title: "Voucher Books",
    items: [
      "Invoice Books",
      "Receipt Vouchers"
    ]
  },
  {
    title: "Large Format Printing",
    items: [
      "Banners",
      "Posters",
      "Billboards",
      "Vehicle Wraps",
      "Window Graphics",
      "Wall Murals"
    ]
  },
  {
    title: "CD / DVD",
    items: [
      "CD / DVD Printing",
      "CD / DVD Covers"
    ]
  },
  {
    title: "Stickers",
    items: [
      "Die Cut Stickers",
      "Print & Cut Stickers",
      "Paper Sticker Gloss / Matt",
      "Transparent Stickers",
      "PVC Stickers White",
      "Epoxy Stickers",
      "Windshield Stickers"
    ]
  },
  {
    title: "Specialty Stickers",
    items: [
      "Stencil Stickers",
      "Foil Stickers",
      "Metal Stickers",
      "Embossing Seal Stickers",
      "Hologram Stickers",
      "Kraft Paper Stickers"
    ]
  },
  {
    title: "Crowd Promotion",
    items: [
      "Compliment Slips",
      "Tickets & Coupons",
      "Scratch & Win Coupons",
      "Tent Cards",
      "Car Mat",
      "Table Mat"
    ]
  }
]

const fashionTextileCategories = [
  {
    title: "Fashion",
    items: [
      "Scarf",
      "Sheila",
      "Bandana",
      "Hair Scarf",
      "Bag Scarf",
      "Abaya",
      "Sarong",
      "Beach Shorts",
      "Pocket Handkerchief",
      "Woven Fabric Labels",
      "Scrunchie"
    ]
  },
  {
    title: "Soft Furnishing",
    items: [
      "Decorative Pillows",
      "Floor Cushion",
      "Tiny Cushion",
      "Bolster Pillow",
      "Bean Bags",
      "Blanket",
      "Fabric Wrap"
    ]
  },
  {
    title: "Pouches",
    items: [
      "Velvet Pouches",
      "Tote Pouches",
      "Silk Sensation Pouches",
      "Zipper Pouches"
    ]
  },
  {
    title: "Lifestyle",
    items: [
      "Armband",
      "Sash",
      "Hand Umbrella",
      "Face Masks",
      "Apron"
    ]
  },
  {
    title: "Dining",
    items: [
      "Placemat",
      "Table Napkin",
      "Dinning Table Cloth"
    ]
  },
  {
    title: "HOT Textile Roll",
    items: []
  },
  {
    title: "Fabric Range",
    items: [
      "Haute Couture",
      "Fashion Wear",
      "Décor Fabric"
    ]
  },
  {
    title: "Patterns",
    items: [
      "Floral",
      "Geometric",
      "Landscape"
    ]
  }
]

const officeBrandingCategories = [
  {
    title: "Frosted Sticker",
    items: [
      "Reverse Cut Frosted Sticker",
      "Standard Cut Frosted Sticker",
      "Printed Frosted Sticker",
      "Blank Frosted Sticker"
    ]
  },
  {
    title: "Window Branding",
    items: [
      "Window Vinyl Lettering",
      "Window Graphics",
      "One Way Vision Sticker",
      "Window Films"
    ]
  },
  {
    title: "Wall Branding",
    items: [
      "Wall Vinyl Lettering",
      "Wall Sticker",
      "Wall Decal"
    ]
  },
  {
    title: "Wall Décor",
    items: [
      "Bedroom Wallpaper",
      "Living Room Wallpaper"
    ]
  },
  {
    title: "Wall Frames",
    items: [
      "Canvas Frames",
      "Wooden Frames",
      "Acrylic Frames",
      "Metal Art"
    ]
  },
  {
    title: "POS Display Stands",
    items: [
      "Floor Display Gondola",
      "3D Display Stand",
      "Counter Top Stand"
    ]
  },
  {
    title: "Posters",
    items: [
      "Large Posters",
      "Wall Mounted Posters",
      "Hanging Posters"
    ]
  },
  {
    title: "Magnetic Sheet",
    items: [
      "Car Magnets",
      "Fridge Magnets",
      "Magnetic Wall",
      "Domed Magnet"
    ]
  },
  {
    title: "Vehicle Graphics",
    items: [
      "Car Branding",
      "Boat/ Yacht Branding"
    ]
  },
  {
    title: "Repositionable Cling",
    items: [
      "Clear Static Cling",
      "Shape Cut Out Cling"
    ]
  },
  {
    title: "Floor Sticker",
    items: [
      "Floor Direction Sticker",
      "Footprint Floor Sticker"
    ]
  },
  {
    title: "Workplace",
    items: [
      "Ceremonial Ribbon",
      "Counter Partition"
    ]
  }
]

const signagesCategories = [
  {
    title: "Sign Board / Signage",
    items: [
      "3D Signage (Unlit)",
      "Backlit Signage",
      "Outlit 3D Signage",
      "Flex Face Signage",
      "Frontlit Signage",
      "Push Through Signage",
      "Neon Signage"
    ]
  },
  {
    title: "Name Plate",
    items: [
      "Metal Name Plates",
      "Acrylic Name Plates",
      "Wooden Name Plates",
      "Table Top Signage"
    ]
  },
  {
    title: "Light Box Signages",
    items: [
      "Flex Face Signs (Light Box)",
      "Fabric Light Box",
      "Acrylic Signage Board",
      "Poster Light Box"
    ]
  },
  {
    title: "Self Standing Letters",
    items: [
      "Metal Letters",
      "Wooden Letters",
      "Acrylic Letters",
      "Forex / Foam Letters"
    ]
  },
  {
    title: "Direction / Wayfinding Signage",
    items: [
      "Wall Mounted Signage",
      "Hanging Signage",
      "Self Standing Signage",
      "Directory Signage"
    ]
  },
  {
    title: "Labels",
    items: [
      "Traffolyte / PVC / Acrylic Labels",
      "Metal Labels",
      "Wooden Labels",
      "Acrylic Labels"
    ]
  },
  {
    title: "Safety Signage",
    items: [
      "Self-Standing Sign",
      "Floor Sign / Signage"
    ]
  }
]

const flagsCategories = [
  {
    title: "Event & Branding Flags",
    items: [
      "Sail Flags",
      "Tear Drop Flags",
      "L Shape Flags",
      "Blade Flags",
      "Telescopic Flags",
      "Advertising Flags"
    ]
  },
  {
    title: "Flag Base",
    items: [
      "Concrete Base",
      "Cross Base",
      "Water Base"
    ]
  },
  {
    title: "Office Flags",
    items: [
      "Table Flags",
      "Table Flags - Royal",
      "Conference Flags",
      "Conference Flags - Hanging"
    ]
  },
  {
    title: "Outdoor Flags",
    items: [
      "Hoisting Flags",
      "Wall Mounted Flags",
      "Stadium Flags",
      "Festival Flags"
    ]
  },
  {
    title: "Event Gear",
    items: [
      "Pole Flags",
      "Hand Flags",
      "Finish Line",
      "Body Flags",
      "Fan Scarf"
    ]
  },
  {
    title: "Decorative Flags",
    items: [
      "Car Flags",
      "Car Desert Flags",
      "Dashboard Flags",
      "Pennant Flags",
      "Bunting Flags",
      "Toothpick Flags"
    ]
  }
]

const backdropsCategories = [
  {
    title: "Standees",
    items: [
      "Rollup Banners",
      "X Banners",
      "Backlit Snapfold Standee",
      "Classic Backlit Standee",
      "Totem Display Stand",
      "Banners - PVC & Fabric"
    ]
  },
  {
    title: "Display Stands",
    items: [
      "Fence Banners",
      "Lama Stand",
      "Popout Banner / Spring A Board",
      "Toblerone Frame",
      "Cutout Standee"
    ]
  },
  {
    title: "Backdrops",
    items: [
      "Pop Ups",
      "Fabric Pop Ups",
      "Fabric Backdrop - Indoor",
      "Fabric Backdrop - Outdoor",
      "Wooden Backdrop",
      "Step & Repeat Backdrop"
    ]
  },
  {
    title: "Specialty Backdrops",
    items: [
      "Curved Backdrop",
      "Backlit Backdrop",
      "LED Screen",
      "Balloon Decorators",
      "Magazine Photo Booth"
    ]
  },
  {
    title: "Exhibition & Events",
    items: [
      "Promotion Table",
      "Exhibition Counters",
      "Tent / Gazebo",
      "Outdoor Umbrella",
      "Table Cover & Table Cloth"
    ]
  },
  {
    title: "Shell Scheme Booths",
    items: [
      "Panel / Seamless Branding",
      "Island Backlit Shell Scheme",
      "Modular Backlit Booths"
    ]
  },
  {
    title: "Event Props",
    items: [
      "Marquee Board",
      "Social Media Frame",
      "Hashtag",
      "Giant Cheques",
      "Party Props"
    ]
  },
  {
    title: "Party Essentials",
    items: [
      "Face Masks",
      "Party Hats"
    ]
  },
  {
    title: "Foam Board",
    items: []
  }
]

const corporateGiftsCategories = [
  {
    title: "Office Essentials",
    items: [
      "Pens",
      "PU Notebooks",
      "PU Organizer",
      "Corporate Gift Sets",
      "Mouse Pad"
    ]
  },
  {
    title: "Drinkware",
    items: [
      "Mugs",
      "Bottles",
      "Tumblers",
      "Coaster",
      "Coffee Stencil"
    ]
  },
  {
    title: "Apparel",
    items: [
      "T-Shirt",
      "Jersey",
      "Caps",
      "Neck Tie",
      "Safety Vest",
      "Embroidery Patches",
      "Silicone Labels"
    ]
  },
  {
    title: "Event Disposables",
    items: [
      "Napkin",
      "Paper Cup",
      "Water Bottle Label"
    ]
  },
  {
    title: "Awards & Recognition",
    items: [
      "Trophy Awards",
      "Plaques",
      "Medals",
      "Certificates",
      "Recognition Badges"
    ]
  },
  {
    title: "Trade Shows & Events",
    items: [
      "Wristband",
      "Lanyards",
      "ID Cards & Badge Reel",
      "Name Badges",
      "Lapel Pins",
      "Keychain",
      "Silicone Fridge Magnet"
    ]
  },
  {
    title: "Tech Products",
    items: [
      "USB",
      "Power Banks",
      "Bluetooth Speakers",
      "Charging Cables"
    ]
  },
  {
    title: "Shopping/Promotional Bags",
    items: [
      "Paper Bag",
      "Kraft Bag",
      "Jute Bag",
      "Tote Bag",
      "Canvas Bag",
      "Drawstring Bag",
      "Cotton String Bag"
    ]
  }
]

const navigationItems: Array<{label: string, items: string[]}> = []

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
            <Input placeholder="Search products..." className="pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black-800" />
          </div>
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

                {/* Print & Marketing with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("print-marketing")}
                  >
                    <span>Print & Marketing</span>
                    {activeDropdown === "print-marketing" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "print-marketing" && (
                    <MegaDropdown 
                      categories={printMarketingCategories}
                      featuredImage={{
                        src: "/images/business-cards-featured.png",
                        alt: "Business Cards",
                        title: "Business Cards"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "Booklets", image: "/images/booklets-thumb.png" },
                          { name: "Wax Seal", image: "/images/wax-seal-thumb.png" },
                          { name: "Sticker", image: "/images/sticker-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* Fashion & Textile with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("fashion-textile")}
                  >
                    <span>Fashion & Textile</span>
                    {activeDropdown === "fashion-textile" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "fashion-textile" && (
                    <MegaDropdown 
                      categories={fashionTextileCategories}
                      featuredImage={{
                        src: "/images/bandana-featured.png",
                        alt: "Bandana",
                        title: "Bandana"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "Scarf", image: "/images/scarf-thumb.png" },
                          { name: "Decorative Pillows", image: "/images/pillows-thumb.png" },
                          { name: "Sash", image: "/images/sash-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* Office & Store Branding with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("office-branding")}
                  >
                    <span>Office & Store Branding</span>
                    {activeDropdown === "office-branding" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "office-branding" && (
                    <MegaDropdown 
                      categories={officeBrandingCategories}
                      featuredImage={{
                        src: "/images/frosted-sticker-featured.png",
                        alt: "Reverse Cut Frosted Sticker",
                        title: "Reverse Cut Frosted Sticker"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "Frosted Sticker", image: "/images/frosted-sticker-thumb.png" },
                          { name: "POS Display", image: "/images/pos-display-thumb.png" },
                          { name: "Canvas Frames", image: "/images/canvas-frames-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* All Signages with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("signages")}
                  >
                    <span>Signages</span>
                    {activeDropdown === "signages" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "signages" && (
                    <MegaDropdown 
                      categories={signagesCategories}
                      featuredImage={{
                        src: "/images/3d-signage-featured.png",
                        alt: "Unlit 3D Signage",
                        title: "Unlit 3D Signage"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "3D Signage", image: "/images/3d-signage-thumb.png" },
                          { name: "Self Standing Letters", image: "/images/self-standing-letters-thumb.png" },
                          { name: "Name Plate", image: "/images/name-plate-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* All Flags with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("flags")}
                  >
                    <span>Flags</span>
                    {activeDropdown === "flags" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "flags" && (
                    <MegaDropdown 
                      categories={flagsCategories}
                      featuredImage={{
                        src: "/images/sail-flag-featured.png",
                        alt: "Sail Flag",
                        title: "Sail Flag"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "L Shape Flags", image: "/images/l-shape-flags-thumb.png" },
                          { name: "Pole Flag", image: "/images/pole-flag-thumb.png" },
                          { name: "Royal Flags", image: "/images/royal-flags-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* All Standees and Backdrops with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("backdrops")}
                  >
                    <span>Backdrops & Exhibition</span>
                    {activeDropdown === "backdrops" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "backdrops" && (
                    <MegaDropdown 
                      categories={backdropsCategories}
                      featuredImage={{
                        src: "/images/rollup-banner-featured.png",
                        alt: "Rollup Banners",
                        title: "Rollup Banners"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "Fabric Backdrop", image: "/images/fabric-backdrop-thumb.png" },
                          { name: "Cutout Standee", image: "/images/cutout-standee-thumb.png" },
                          { name: "Table", image: "/images/table-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

                {/* Corporate Gifts & Bags with Mega Dropdown */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
                    onClick={() => handleDropdownClick("corporate-gifts")}
                  >
                    <span>Corporate Gifts & Bags</span>
                    {activeDropdown === "corporate-gifts" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                  {activeDropdown === "corporate-gifts" && (
                    <MegaDropdown 
                      categories={corporateGiftsCategories}
                      featuredImage={{
                        src: "/images/corporate-gifts-featured.png",
                        alt: "Corporate Gift Sets",
                        title: "Corporate Gift Sets"
                      }}
                      mostPopular={{
                        title: "Most Popular",
                        items: [
                          { name: "Tote Bags", image: "/images/tote-bags-thumb.png" },
                          { name: "Mugs", image: "/images/mugs-thumb.png" },
                          { name: "Pens", image: "/images/pens-thumb.png" }
                        ]
                      }}
                    />
                  )}
                </div>

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
                    <div className="relative">
                      <Input
                        placeholder="Search products..."
                        className="pr-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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

                      {/* Navigation Items */}
                      {navigationItems.map((item) => (
                        <Collapsible key={item.label}>
                          <CollapsibleTrigger
                            onClick={() => toggleSection(item.label)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-gray-500 transition-transform ${openSections.includes(item.label) ? "rotate-180" : ""
                                }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-4 pb-2">
                            <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </nav>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 border-t bg-gray-50">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>+1 234 567 8900</span>
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
