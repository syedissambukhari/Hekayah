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
        sectionId: "workspace-branding",
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
        sectionId: "signage-displays",
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
        sectionId: "packaging-labels",
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
        sectionId: "digital-services",
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
        sectionId: "events-promotions",
        price: "Starting from $12",
        rating: 4.8,
        reviews: 102,
        images: ["/images/event-flyer1.png", "/images/event-flyer2.png"],
        description: "Vibrant flyers for promoting events & concerts.",
        features: ["High quality paper", "Bulk printing available"],
        specifications: { Sizes: "A5 / A4", Quantity: "100+", Printing: "CMYK" },
        variations: [{ name: "A5 Event Flyers", price: "$12", image: "/images/event-flyer-a5.png" }],
        faqs: [{ question: "What’s the minimum order?", answer: "Minimum 50 copies." }],
    },
]

// --- helpers ---
export function getProduct(sectionId: string, slug: string) {
    return products.find((p) => p.sectionId === sectionId && p.slug === slug)
}

export function getProductsByCategory(sectionId: string) {
    return products.filter((p) => p.sectionId === sectionId)
}
