// Backdrops & Exhibition Products

import { Product } from './types'

export const backdropsProducts: Product[] = [
    {
        slug: "rollup-banners",
        name: "Rollup Banners",
        sectionId: "backdrops",
        price: "Starting from $45",
        rating: 4.8,
        reviews: 198,
        images: ["/products/14 Rollup Baners/rollup_banner_printing_dubai_thumbnail.jpg", "/products/14 Rollup Baners/rollup-banner-dubai-2.jpg"],
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
        images: ["/products/10 backdrops/straight_fabric_backdrop_dubai.jpg", "/products/10 backdrops/round_fabric_backdrop_printing_dubai.jpg"],
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
        images: ["/products/10 backdrops/softcase_straight_popup_banner_printing_dubai.jpg", "/products/10 backdrops/popout_banner_dubai_2.jpg"],
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
]
