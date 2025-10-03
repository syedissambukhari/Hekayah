// app/product/product.ts

export interface Product {
    slug: string
    name: string
    sectionId: string   // category from navbar (e.g. print-marketing)
    price: string
    rating: number
    reviews: number
    images: string[]
    description: string
    features: string[]
    specifications: Record<string, string>
    variations: { name: string; price: string; image: string }[]
    faqs: { question: string; answer: string }[]
}

export const products: Product[] = [
    // --- PRINT MARKETING ---
    {
        slug: "business-cards",
        name: "Premium Business Cards",
        sectionId: "print-marketing",
        price: "Starting from $25",
        rating: 4.9,
        reviews: 156,
        images: ["/images/business-card1.png", "/images/business-card2.png"],
        description: "Make a lasting impression with high-quality custom business cards.",
        features: ["Matte or glossy finish", "Custom sizes available", "Eco-friendly paper options"],
        specifications: {
            Material: "350gsm card stock",
            Finish: "Matte / Gloss",
            "Printing Sides": "Single or Double",
        },
        variations: [
            { name: "Matte Finish", price: "$25", image: "/images/variation-matte.png" },
            { name: "Gloss Finish", price: "$30", image: "/images/variation-gloss.png" },
        ],
        faqs: [
            { question: "Can I print on both sides?", answer: "Yes, we offer both single and double-sided printing." },
            { question: "What file format should I upload?", answer: "PDF, AI, or high-res PNG/JPG recommended." },
        ],
    },
    {
        slug: "Letterheads",
        name: "Letterheads",
        sectionId: "print-marketing",
        price: "Starting from $25",
        rating: 4.9,
        reviews: 156,
        images: ["/images/business-card1.png", "/images/business-card2.png"],
        description: "Make a lasting impression with high-quality custom business cards.",
        features: ["Matte or glossy finish", "Custom sizes available", "Eco-friendly paper options"],
        specifications: {
            Material: "350gsm card stock",
            Finish: "Matte / Gloss",
            "Printing Sides": "Single or Double",
        },
        variations: [
            { name: "Matte Finish", price: "$25", image: "/images/variation-matte.png" },
            { name: "Gloss Finish", price: "$30", image: "/images/variation-gloss.png" },
        ],
        faqs: [
            { question: "Can I print on both sides?", answer: "Yes, we offer both single and double-sided printing." },
            { question: "What file format should I upload?", answer: "PDF, AI, or high-res PNG/JPG recommended." },
        ],
    },
    {
        slug: "flyers",
        name: "Promotional Flyers",
        sectionId: "print-marketing",
        price: "Starting from $15",
        rating: 4.7,
        reviews: 210,
        images: ["/images/flyer1.png", "/images/flyer2.png"],
        description: "Affordable flyers to promote your events and campaigns.",
        features: ["Multiple sizes", "Glossy/matte paper", "Bulk discounts"],
        specifications: { Sizes: "A4 / A5 / Custom", Print: "Full color", Quantity: "50+" },
        variations: [{ name: "A5 Flyers", price: "$15", image: "/images/flyer-a5.png" }],
        faqs: [{ question: "Do you offer design services?", answer: "Yes, design assistance is available." }],
    },

    // --- FASHION TEXTILE ---
    {
        slug: "custom-tshirts",
        name: "Custom Printed T-Shirts",
        sectionId: "fashion-textile",
        price: "Starting from $12",
        rating: 4.8,
        reviews: 298,
        images: ["/images/tshirt1.png", "/images/tshirt2.png"],
        description: "High-quality cotton t-shirts with vibrant custom prints.",
        features: ["100% cotton", "Screen & digital print", "All sizes available"],
        specifications: { Material: "Cotton", Printing: "Screen/Digital", Sizes: "XS-XXL" },
        variations: [
            { name: "White T-Shirt", price: "$12", image: "/images/tshirt-white.png" },
            { name: "Black T-Shirt", price: "$15", image: "/images/tshirt-black.png" },
        ],
        faqs: [{ question: "Is the print washable?", answer: "Yes, lasts up to 50 washes." }],
    },
    {
        slug: "custom-hoodies",
        name: "Custom Hoodies",
        sectionId: "fashion-textile",
        price: "Starting from $25",
        rating: 4.6,
        reviews: 120,
        images: ["/images/hoodie1.png", "/images/hoodie2.png"],
        description: "Stay stylish and warm with personalized hoodies.",
        features: ["Fleece-lined", "Multiple colors", "Durable stitching"],
        specifications: { Material: "Cotton blend", Sizes: "S-XXL", Printing: "Heat transfer" },
        variations: [{ name: "Grey Hoodie", price: "$25", image: "/images/hoodie-grey.png" }],
        faqs: [{ question: "Do you accept bulk orders?", answer: "Yes, discounts for 20+ pieces." }],
    },

    // --- WORKSPACE BRANDING ---
    {
        slug: "wall-murals",
        name: "Office Wall Murals",
        sectionId: "office-branding",
        price: "Starting from $30/sqft",
        rating: 4.9,
        reviews: 88,
        images: ["/images/mural1.png", "/images/mural2.png"],
        description: "Transform workspaces with creative wall murals.",
        features: ["Custom sizes", "Durable vinyl", "Easy to clean"],
        specifications: { Material: "Vinyl", Finish: "Matte/Gloss", Installation: "Available" },
        variations: [{ name: "Abstract Design", price: "$30/sqft", image: "/images/mural-abstract.png" }],
        faqs: [{ question: "Do you offer installation?", answer: "Yes, on-site installation available." }],
    },

    // --- SIGNAGE & DISPLAYS ---
    {
        slug: "outdoor-banners",
        name: "Outdoor Banners",
        sectionId: "signages",
        price: "Starting from $20",
        rating: 4.5,
        reviews: 190,
        images: ["/images/banner1.png", "/images/banner2.png"],
        description: "Weather-resistant outdoor banners for events & ads.",
        features: ["UV resistant", "Waterproof", "Eyelets included"],
        specifications: { Material: "PVC", Sizes: "Custom", Durability: "6 months outdoor" },
        variations: [{ name: "6x3 ft Banner", price: "$20", image: "/images/banner-standard.png" }],
        faqs: [{ question: "Do you ship rolled?", answer: "Yes, banners are shipped rolled safely." }],
    },

    // --- PACKAGING & LABELS ---
    {
        slug: "custom-stickers",
        name: "Custom Stickers",
        sectionId: "print-marketing",
        price: "Starting from $10",
        rating: 4.7,
        reviews: 75,
        images: ["/images/sticker1.png", "/images/sticker2.png"],
        description: "Durable stickers for product packaging and branding.",
        features: ["Waterproof", "Custom shapes", "Full-color print"],
        specifications: { Material: "Vinyl", Adhesive: "Strong", Finish: "Gloss/Matte" },
        variations: [{ name: "Round Stickers (50pcs)", price: "$10", image: "/images/sticker-round.png" }],
        faqs: [{ question: "Can stickers be outdoor?", answer: "Yes, waterproof vinyl is durable." }],
    },

    // --- DIGITAL SERVICES ---
    {
        slug: "website-design",
        name: "Website Design Service",
        sectionId: "office-branding",
        price: "Starting from $199",
        rating: 4.9,
        reviews: 34,
        images: ["/images/web1.png", "/images/web2.png"],
        description: "Professional website design tailored to your business.",
        features: ["Responsive design", "SEO-friendly", "Modern UI/UX"],
        specifications: { Delivery: "7 days", Revisions: "3 included", Platform: "Next.js / React" },
        variations: [{ name: "Landing Page", price: "$199", image: "/images/web-landing.png" }],
        faqs: [{ question: "Do you provide hosting?", answer: "Yes, hosting available as add-on." }],
    },

    // --- EVENTS & PROMOTIONS ---
    {
        slug: "event-flyers",
        name: "Event Flyers",
        sectionId: "print-marketing",
        price: "Starting from $12",
        rating: 4.8,
        reviews: 102,
        images: ["/images/event-flyer1.png", "/images/event-flyer2.png"],
        description: "Vibrant flyers for promoting events & concerts.",
        features: ["High quality paper", "Bulk printing available"],
        specifications: { Sizes: "A5 / A4", Quantity: "100+", Printing: "CMYK" },
        variations: [{ name: "A5 Event Flyers", price: "$12", image: "/images/event-flyer-a5.png" }],
        faqs: [{ question: "What's the minimum order?", answer: "Minimum 50 copies." }],
    },

    // --- OFFICE BRANDING ---
    {
        slug: "frosted-stickers",
        name: "Frosted Stickers",
        sectionId: "office-branding",
        price: "Starting from $15",
        rating: 4.6,
        reviews: 89,
        images: ["/images/frosted-stickers1.png", "/images/frosted-stickers2.png"],
        description: "Elegant frosted stickers for office branding and privacy.",
        features: ["Privacy protection", "Easy application", "Durable material"],
        specifications: { Material: "Frosted vinyl", Size: "Custom", Adhesive: "Removable" },
        variations: [
            { name: "Standard Frosted", price: "$15", image: "/images/frosted-standard.png" },
            { name: "Reverse Cut", price: "$18", image: "/images/frosted-reverse.png" }
        ],
        faqs: [
            { question: "Can these be removed easily?", answer: "Yes, they are designed for easy removal without residue." },
            { question: "Do they provide privacy?", answer: "Yes, they offer 90% privacy while maintaining light transmission." }
        ],
    },
    {
        slug: "window-graphics",
        name: "Window Graphics",
        sectionId: "office-branding",
        price: "Starting from $25",
        rating: 4.7,
        reviews: 156,
        images: ["/images/window-graphics1.png", "/images/window-graphics2.png"],
        description: "Professional window graphics for branding and decoration.",
        features: ["Weather resistant", "Custom designs", "Professional finish"],
        specifications: { Material: "Vinyl", Printing: "Full color", Installation: "Professional" },
        variations: [
            { name: "Window Lettering", price: "$25", image: "/images/window-lettering.png" },
            { name: "Window Graphics", price: "$35", image: "/images/window-graphics-variation.png" }
        ],
        faqs: [
            { question: "How long do they last?", answer: "Window graphics can last 3-5 years with proper care." },
            { question: "Can they be applied to any window?", answer: "Yes, suitable for most glass surfaces." }
        ],
    },
    {
        slug: "wall-frames",
        name: "Wall Frames",
        sectionId: "office-branding",
        price: "Starting from $35",
        rating: 4.8,
        reviews: 203,
        images: ["/images/wall-frames1.png", "/images/wall-frames2.png"],
        description: "Elegant wall frames for office decoration and branding.",
        features: ["Multiple materials", "Custom sizes", "Professional mounting"],
        specifications: { Material: "Wood/Metal/Acrylic", Sizes: "Custom", Finish: "Various options" },
        variations: [
            { name: "Canvas Frames", price: "$35", image: "/images/canvas-frames.png" },
            { name: "Wooden Frames", price: "$45", image: "/images/wooden-frames.png" },
            { name: "Acrylic Frames", price: "$55", image: "/images/acrylic-frames.png" }
        ],
        faqs: [
            { question: "Do you provide installation?", answer: "Yes, professional installation service available." },
            { question: "What materials are available?", answer: "Wood, metal, acrylic, and canvas options." }
        ],
    },

    // --- SIGNAGES ---
    {
        slug: "3d-signage",
        name: "3D Signage",
        sectionId: "signages",
        price: "Starting from $150",
        rating: 4.9,
        reviews: 67,
        images: ["/images/3d-signage1.png", "/images/3d-signage2.png"],
        description: "Eye-catching 3D signage for maximum visibility and impact.",
        features: ["Dimensional design", "LED lighting options", "Weather resistant"],
        specifications: { Material: "Acrylic/Foam/Metal", Lighting: "LED optional", Size: "Custom" },
        variations: [
            { name: "Unlit 3D Signage", price: "$150", image: "/images/3d-unlit.png" },
            { name: "Backlit 3D Signage", price: "$250", image: "/images/3d-backlit.png" }
        ],
        faqs: [
            { question: "Can 3D signs be illuminated?", answer: "Yes, we offer both lit and unlit options." },
            { question: "What materials are used?", answer: "Acrylic, foam, metal, and composite materials." }
        ],
    },
    {
        slug: "name-plates",
        name: "Name Plates",
        sectionId: "signages",
        price: "Starting from $45",
        rating: 4.7,
        reviews: 134,
        images: ["/images/name-plates1.png", "/images/name-plates2.png"],
        description: "Professional name plates for offices and businesses.",
        features: ["Multiple materials", "Custom engraving", "Professional finish"],
        specifications: { Material: "Metal/Acrylic/Wood", Engraving: "Laser/Router", Size: "Standard/Custom" },
        variations: [
            { name: "Metal Name Plates", price: "$45", image: "/images/metal-name-plate.png" },
            { name: "Acrylic Name Plates", price: "$35", image: "/images/acrylic-name-plate.png" }
        ],
        faqs: [
            { question: "What engraving methods are available?", answer: "Laser engraving and router cutting options." },
            { question: "Can I get custom sizes?", answer: "Yes, we offer both standard and custom sizes." }
        ],
    },
    {
        slug: "light-box-signages",
        name: "Light Box Signages",
        sectionId: "signages",
        price: "Starting from $85",
        rating: 4.6,
        reviews: 78,
        images: ["/images/light-box1.png", "/images/light-box2.png"],
        description: "Illuminated signage solutions for maximum visibility.",
        features: ["LED lighting", "Energy efficient", "Weather resistant"],
        specifications: { Lighting: "LED", Power: "Low voltage", Material: "Aluminum/Steel" },
        variations: [
            { name: "Flex Face Light Box", price: "$85", image: "/images/flex-light-box.png" },
            { name: "Fabric Light Box", price: "$95", image: "/images/fabric-light-box.png" }
        ],
        faqs: [
            { question: "How energy efficient are the lights?", answer: "LED lights are highly energy efficient with long lifespan." },
            { question: "Are they suitable for outdoor use?", answer: "Yes, designed for both indoor and outdoor applications." }
        ],
    },

    // --- FLAGS ---
    {
        slug: "sail-flags",
        name: "Sail Flags",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.8,
        reviews: 112,
        images: ["/images/sail-flags1.png", "/images/sail-flags2.png"],
        description: "Dynamic sail flags for events and promotional activities.",
        features: ["Wind resistant", "High visibility", "Custom designs"],
        specifications: { Material: "Polyester/Nylon", Size: "Various options", Printing: "Digital/Heat transfer" },
        variations: [
            { name: "Small Sail Flag", price: "$35", image: "/images/small-sail-flag.png" },
            { name: "Large Sail Flag", price: "$55", image: "/images/large-sail-flag.png" }
        ],
        faqs: [
            { question: "What materials are used?", answer: "High-quality polyester and nylon materials." },
            { question: "How weather resistant are they?", answer: "Designed for outdoor use with UV protection." }
        ],
    },
    {
        slug: "tear-drop-flags",
        name: "Tear Drop Flags",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.7,
        reviews: 89,
        images: ["/images/tear-drop-flags1.png", "/images/tear-drop-flags2.png"],
        description: "Eye-catching tear drop flags for events and promotions.",
        features: ["Unique shape", "High visibility", "Easy setup"],
        specifications: { Material: "Polyester", Shape: "Tear drop", Pole: "Included" },
        variations: [
            { name: "Standard Tear Drop", price: "$25", image: "/images/standard-tear-drop.png" },
            { name: "Premium Tear Drop", price: "$35", image: "/images/premium-tear-drop.png" }
        ],
        faqs: [
            { question: "Is the pole included?", answer: "Yes, aluminum pole is included with the flag." },
            { question: "How easy is setup?", answer: "Very easy, can be set up in minutes." }
        ],
    },
    {
        slug: "table-flags",
        name: "Table Flags",
        sectionId: "flags",
        price: "Starting from $15",
        rating: 4.9,
        reviews: 167,
        images: ["/images/table-flags1.png", "/images/table-flags2.png"],
        description: "Professional table flags for conferences and events.",
        features: ["Compact design", "Professional appearance", "Easy storage"],
        specifications: { Material: "Polyester", Size: "Table size", Base: "Weighted base" },
        variations: [
            { name: "Standard Table Flag", price: "$15", image: "/images/standard-table-flag.png" },
            { name: "Royal Table Flag", price: "$25", image: "/images/royal-table-flag.png" }
        ],
        faqs: [
            { question: "What size are the flags?", answer: "Standard table size, suitable for conference tables." },
            { question: "Is the base weighted?", answer: "Yes, includes a weighted base for stability." }
        ],
    },

    // --- BACKDROPS & EXHIBITION ---
    {
        slug: "rollup-banners",
        name: "Rollup Banners",
        sectionId: "backdrops",
        price: "Starting from $45",
        rating: 4.8,
        reviews: 198,
        images: ["/images/rollup-banners1.png", "/images/rollup-banners2.png"],
        description: "Portable rollup banners for events and exhibitions.",
        features: ["Portable", "Easy setup", "Professional appearance"],
        specifications: { Material: "Vinyl", Size: "Standard sizes", Case: "Included" },
        variations: [
            { name: "Standard Rollup", price: "$45", image: "/images/standard-rollup.png" },
            { name: "Premium Rollup", price: "$65", image: "/images/premium-rollup.png" }
        ],
        faqs: [
            { question: "Is a carrying case included?", answer: "Yes, a professional carrying case is included." },
            { question: "How easy is setup?", answer: "Very easy, can be set up in under a minute." }
        ],
    },
    {
        slug: "fabric-backdrops",
        name: "Fabric Backdrops",
        sectionId: "backdrops",
        price: "Starting from $65",
        rating: 4.9,
        reviews: 145,
        images: ["/images/fabric-backdrops1.png", "/images/fabric-backdrops2.png"],
        description: "Professional fabric backdrops for events and photography.",
        features: ["Wrinkle resistant", "High quality printing", "Easy to transport"],
        specifications: { Material: "Polyester fabric", Printing: "Dye sublimation", Size: "Custom" },
        variations: [
            { name: "Indoor Fabric Backdrop", price: "$65", image: "/images/indoor-fabric.png" },
            { name: "Outdoor Fabric Backdrop", price: "$85", image: "/images/outdoor-fabric.png" }
        ],
        faqs: [
            { question: "Are they wrinkle resistant?", answer: "Yes, specially treated fabric to minimize wrinkles." },
            { question: "What printing method is used?", answer: "Dye sublimation printing for vibrant, long-lasting colors." }
        ],
    },
    {
        slug: "popup-banners",
        name: "Pop Up Banners",
        sectionId: "backdrops",
        price: "Starting from $55",
        rating: 4.7,
        reviews: 123,
        images: ["/images/popup-banners1.png", "/images/popup-banners2.png"],
        description: "Quick setup pop-up banners for events and promotions.",
        features: ["Quick setup", "Compact storage", "Professional look"],
        specifications: { Material: "Vinyl", Setup: "Under 5 minutes", Storage: "Compact case" },
        variations: [
            { name: "Standard Pop Up", price: "$55", image: "/images/standard-popup.png" },
            { name: "Backlit Pop Up", price: "$85", image: "/images/backlit-popup.png" }
        ],
        faqs: [
            { question: "How quick is setup?", answer: "Can be set up in under 5 minutes." },
            { question: "Is it backlit?", answer: "We offer both standard and backlit options." }
        ],
    },

    // --- CORPORATE GIFTS & BAGS ---
    {
        slug: "corporate-pens",
        name: "Corporate Pens",
        sectionId: "corporate-gifts",
        price: "Starting from $5",
        rating: 4.8,
        reviews: 234,
        images: ["/images/corporate-pens1.png", "/images/corporate-pens2.png"],
        description: "Premium corporate pens for branding and gifting.",
        features: ["Custom imprinting", "Premium quality", "Bulk discounts"],
        specifications: { Material: "Metal/Plastic", Imprinting: "Laser engraving", Quantity: "Bulk available" },
        variations: [
            { name: "Basic Corporate Pen", price: "$5", image: "/images/basic-pen.png" },
            { name: "Premium Corporate Pen", price: "$15", image: "/images/premium-pen.png" }
        ],
        faqs: [
            { question: "What imprinting methods are available?", answer: "Laser engraving and heat transfer options." },
            { question: "Do you offer bulk discounts?", answer: "Yes, significant discounts for orders over 100 pieces." }
        ],
    },
    {
        slug: "promotional-mugs",
        name: "Promotional Mugs",
        sectionId: "corporate-gifts",
        price: "Starting from $8",
        rating: 4.7,
        reviews: 187,
        images: ["/images/promotional-mugs1.png", "/images/promotional-mugs2.png"],
        description: "Custom promotional mugs for corporate gifting.",
        features: ["Custom printing", "Dishwasher safe", "Multiple colors"],
        specifications: { Material: "Ceramic", Printing: "Full color", Safety: "Dishwasher safe" },
        variations: [
            { name: "White Promotional Mug", price: "$8", image: "/images/white-mug.png" },
            { name: "Color Promotional Mug", price: "$12", image: "/images/color-mug.png" }
        ],
        faqs: [
            { question: "Are they dishwasher safe?", answer: "Yes, all mugs are dishwasher and microwave safe." },
            { question: "What printing methods are used?", answer: "Full color digital printing for vibrant designs." }
        ],
    },
    {
        slug: "tote-bags",
        name: "Tote Bags",
        sectionId: "corporate-gifts",
        price: "Starting from $12",
        rating: 4.9,
        reviews: 156,
        images: ["/images/tote-bags1.png", "/images/tote-bags2.png"],
        description: "Eco-friendly tote bags for promotional activities.",
        features: ["Eco-friendly", "Durable", "Custom printing"],
        specifications: { Material: "Cotton/Canvas", Printing: "Screen/Digital", Sizes: "Various" },
        variations: [
            { name: "Cotton Tote Bag", price: "$12", image: "/images/cotton-tote.png" },
            { name: "Canvas Tote Bag", price: "$18", image: "/images/canvas-tote.png" }
        ],
        faqs: [
            { question: "What materials are available?", answer: "Cotton, canvas, and jute materials available." },
            { question: "Are they eco-friendly?", answer: "Yes, we offer eco-friendly options including organic cotton." }
        ],
    },
]

// --- helpers ---
export function getProduct(sectionId: string, slug: string) {
    return products.find((p) => p.sectionId === sectionId && p.slug === slug)
}

export function getProductsByCategory(sectionId: string) {
    return products.filter((p) => p.sectionId === sectionId)
}
