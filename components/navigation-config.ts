// Navigation configuration for easy management
export interface NavigationCategory {
  title: string
  items: string[]
}

export interface NavigationSection {
  id: string
  label: string
  categories: NavigationCategory[]
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

// Navigation sections configuration
export const navigationSections: NavigationSection[] = [
  {
    id: "print-marketing",
    label: "Print & Marketing",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/business-cards-featured.png",
      alt: "Business Cards",
      title: "Business Cards"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "Booklets", image: "/images/booklets-thumb.png" },
        { name: "Wax Seal", image: "/images/wax-seal-thumb.png" },
        { name: "Sticker", image: "/images/sticker-thumb.png" }
      ]
    }
  },
  {
    id: "fashion-textile",
    label: "Fashion & Textile",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/bandana-featured.png",
      alt: "Bandana",
      title: "Bandana"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "Scarf", image: "/images/scarf-thumb.png" },
        { name: "Decorative Pillows", image: "/images/pillows-thumb.png" },
        { name: "Sash", image: "/images/sash-thumb.png" }
      ]
    }
  },
  {
    id: "office-branding",
    label: "Office & Store Branding",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/frosted-sticker-featured.png",
      alt: "Reverse Cut Frosted Sticker",
      title: "Reverse Cut Frosted Sticker"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "Frosted Sticker", image: "/images/frosted-sticker-thumb.png" },
        { name: "POS Display", image: "/images/pos-display-thumb.png" },
        { name: "Canvas Frames", image: "/images/canvas-frames-thumb.png" }
      ]
    }
  },
  {
    id: "signages",
    label: "Signages",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/3d-signage-featured.png",
      alt: "Unlit 3D Signage",
      title: "Unlit 3D Signage"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "3D Signage", image: "/images/3d-signage-thumb.png" },
        { name: "Self Standing Letters", image: "/images/self-standing-letters-thumb.png" },
        { name: "Name Plate", image: "/images/name-plate-thumb.png" }
      ]
    }
  },
  {
    id: "flags",
    label: "Flags",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/sail-flag-featured.png",
      alt: "Sail Flag",
      title: "Sail Flag"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "L Shape Flags", image: "/images/l-shape-flags-thumb.png" },
        { name: "Pole Flag", image: "/images/pole-flag-thumb.png" },
        { name: "Royal Flags", image: "/images/royal-flags-thumb.png" }
      ]
    }
  },
  {
    id: "backdrops",
    label: "Backdrops & Exhibition",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/rollup-banner-featured.png",
      alt: "Rollup Banners",
      title: "Rollup Banners"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "Fabric Backdrop", image: "/images/fabric-backdrop-thumb.png" },
        { name: "Cutout Standee", image: "/images/cutout-standee-thumb.png" },
        { name: "Table", image: "/images/table-thumb.png" }
      ]
    }
  },
  {
    id: "corporate-gifts",
    label: "Corporate Gifts & Bags",
    categories: [
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
    ],
    featuredImage: {
      src: "/images/corporate-gifts-featured.png",
      alt: "Corporate Gift Sets",
      title: "Corporate Gift Sets"
    },
    mostPopular: {
      title: "Most Popular",
      items: [
        { name: "Tote Bags", image: "/images/tote-bags-thumb.png" },
        { name: "Mugs", image: "/images/mugs-thumb.png" },
        { name: "Pens", image: "/images/pens-thumb.png" }
      ]
    }
  }
]

// Helper function to generate product URLs
export const generateProductUrl = (sectionId: string, itemName: string): string => {
  const slug = itemName.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "")
  return `/product/${sectionId}/${slug}`
}

// Helper function to get navigation section by ID
export const getNavigationSection = (id: string): NavigationSection | undefined => {
  return navigationSections.find(section => section.id === id)
}
