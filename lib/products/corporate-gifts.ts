// Corporate Gifts & Bags Products

import { Product } from './types'

export const corporateGiftsProducts: Product[] = [
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
