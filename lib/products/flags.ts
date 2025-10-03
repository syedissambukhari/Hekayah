// Flags Products

import { Product } from './types'

export const flagsProducts: Product[] = [
    {
        slug: "sail-flags",
        name: "Sail Flags",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.8,
        reviews: 112,
        images: ["/products/09 Flags/sail_flags_thumb-dubai.jpg", "/products/09 Flags/4x4_flags_a3_size_dubai_1.jpg"],
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
        images: ["/products/09 Flags/tear-drop-flags-thumb-dubai.jpg", "/products/09 Flags/sail_flags_thumb-dubai.jpg"],
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
    // --- MISSING FLAGS PRODUCTS ---
    {
        slug: "l-shape-flags",
        name: "L Shape Flags",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.8,
        reviews: 134,
        images: ["/products/09 Flags/l_shape_flag_thumb_dubai.jpg", "/products/09 Flags/blade_flag_thumb_dubai.jpg"],
        description: "L-shaped flags for unique positioning and visibility.",
        features: ["L-shaped design", "Unique positioning", "High visibility"],
        specifications: { Shape: "L-shaped", Positioning: "Unique", Visibility: "High" },
        variations: [
            { name: "Standard L Shape", price: "$35", image: "/images/l-shape-standard.png" },
            { name: "Premium L Shape", price: "$55", image: "/images/l-shape-premium.png" }
        ],
        faqs: [
            { question: "What makes L-shaped flags unique?", answer: "L-shaped design allows for unique positioning and increased visibility." },
            { question: "Where are they commonly used?", answer: "Perfect for events, exhibitions, and outdoor advertising." }
        ],
    },
    {
        slug: "blade-flags",
        name: "Blade Flags",
        sectionId: "flags",
        price: "Starting from $45",
        rating: 4.7,
        reviews: 89,
        images: ["/products/09 Flags/blade_flag_thumb_dubai.jpg", "/products/09 Flags/l_shape_flag_thumb_dubai.jpg"],
        description: "Blade flags for eye-catching displays and maximum visibility.",
        features: ["Eye-catching design", "Maximum visibility", "Professional appearance"],
        specifications: { Design: "Blade", Visibility: "Maximum", Appearance: "Professional" },
        variations: [
            { name: "Standard Blade Flag", price: "$45", image: "/images/blade-flag-standard.png" },
            { name: "Premium Blade Flag", price: "$65", image: "/images/blade-flag-premium.png" }
        ],
        faqs: [
            { question: "What is a blade flag?", answer: "A flag with a unique blade-like design for maximum wind exposure." },
            { question: "How visible are they?", answer: "Blade flags are designed for maximum visibility in various conditions." }
        ],
    },
    {
        slug: "telescopic-flags",
        name: "Telescopic Flags",
        sectionId: "flags",
        price: "Starting from $55",
        rating: 4.6,
        reviews: 112,
        images: ["/products/09 Flags/telescopic-flags-thumb-dubai.jpg", "/products/09 Flags/sail_flags_thumb-dubai.jpg"],
        description: "Telescopic flags with adjustable height for versatile use.",
        features: ["Adjustable height", "Telescopic design", "Versatile use"],
        specifications: { Height: "Adjustable", Design: "Telescopic", Use: "Versatile" },
        variations: [
            { name: "Standard Telescopic", price: "$55", image: "/images/telescopic-standard.png" },
            { name: "Premium Telescopic", price: "$85", image: "/images/telescopic-premium.png" }
        ],
        faqs: [
            { question: "How adjustable is the height?", answer: "Telescopic flags can be adjusted to various heights as needed." },
            { question: "Is setup easy?", answer: "Yes, telescopic flags are designed for easy setup and adjustment." }
        ],
    },
    {
        slug: "advertising-flags",
        name: "Advertising Flags",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.5,
        reviews: 234,
        images: ["/products/09 Flags/advertising-flags-thumb-dubai.jpg", "/products/09 Flags/4x4_flags_a3_size_dubai_1.jpg"],
        description: "Advertising flags for promotional campaigns and brand visibility.",
        features: ["Promotional use", "Brand visibility", "Custom designs"],
        specifications: { Use: "Promotional", Visibility: "Brand", Design: "Custom" },
        variations: [
            { name: "Standard Advertising Flag", price: "$25", image: "/images/advertising-flag-standard.png" },
            { name: "Premium Advertising Flag", price: "$40", image: "/images/advertising-flag-premium.png" }
        ],
        faqs: [
            { question: "What can be advertised?", answer: "Products, services, events, and brand awareness campaigns." },
            { question: "Can I get custom designs?", answer: "Yes, we can create custom advertising flags with your designs." }
        ],
    },
    {
        slug: "concrete-base",
        name: "Concrete Bases",
        sectionId: "flags",
        price: "Starting from $45",
        rating: 4.7,
        reviews: 78,
        images: ["/images/concrete-base1.png", "/images/concrete-base2.png"],
        description: "Heavy-duty concrete bases for flag pole stability.",
        features: ["Heavy-duty", "Stable base", "Weather resistant"],
        specifications: { Material: "Concrete", Stability: "High", Weather: "Resistant" },
        variations: [
            { name: "Standard Concrete Base", price: "$45", image: "/images/concrete-base-standard.png" },
            { name: "Premium Concrete Base", price: "$75", image: "/images/concrete-base-premium.png" }
        ],
        faqs: [
            { question: "How heavy is the concrete base?", answer: "Concrete bases are heavy enough to provide excellent stability." },
            { question: "Is it weather resistant?", answer: "Yes, concrete bases are designed to withstand various weather conditions." }
        ],
    },
    {
        slug: "cross-base",
        name: "Cross Bases",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.6,
        reviews: 89,
        images: ["/images/cross-base1.png", "/images/cross-base2.png"],
        description: "Cross-shaped bases for flag pole support and stability.",
        features: ["Cross design", "Stable support", "Easy installation"],
        specifications: { Design: "Cross", Support: "Stable", Installation: "Easy" },
        variations: [
            { name: "Standard Cross Base", price: "$35", image: "/images/cross-base-standard.png" },
            { name: "Premium Cross Base", price: "$55", image: "/images/cross-base-premium.png" }
        ],
        faqs: [
            { question: "What is a cross base?", answer: "A cross-shaped base that provides stable support for flag poles." },
            { question: "How easy is installation?", answer: "Cross bases are designed for easy and quick installation." }
        ],
    },
    {
        slug: "water-base",
        name: "Water Bases",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.4,
        reviews: 67,
        images: ["/images/water-base1.png", "/images/water-base2.png"],
        description: "Water-filled bases for portable flag pole support.",
        features: ["Water-filled", "Portable", "Temporary use"],
        specifications: { Fill: "Water", Portability: "High", Use: "Temporary" },
        variations: [
            { name: "Standard Water Base", price: "$25", image: "/images/water-base-standard.png" },
            { name: "Premium Water Base", price: "$40", image: "/images/water-base-premium.png" }
        ],
        faqs: [
            { question: "How is it filled?", answer: "Water bases are filled with water for stability when needed." },
            { question: "Is it portable?", answer: "Yes, water bases are designed for portability and temporary use." }
        ],
    },
    {
        slug: "table-flags-royal",
        name: "Table Flags - Royal",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.9,
        reviews: 156,
        images: ["/images/table-flags-royal1.png", "/images/table-flags-royal2.png"],
        description: "Premium royal table flags for formal events and ceremonies.",
        features: ["Royal design", "Premium quality", "Formal events"],
        specifications: { Design: "Royal", Quality: "Premium", Events: "Formal" },
        variations: [
            { name: "Standard Royal Flag", price: "$25", image: "/images/royal-flag-standard.png" },
            { name: "Premium Royal Flag", price: "$40", image: "/images/royal-flag-premium.png" }
        ],
        faqs: [
            { question: "What makes it royal?", answer: "Premium materials and elegant design for formal occasions." },
            { question: "Where are they used?", answer: "Formal events, ceremonies, and official occasions." }
        ],
    },
    {
        slug: "conference-flags",
        name: "Conference Flags",
        sectionId: "flags",
        price: "Starting from $30",
        rating: 4.7,
        reviews: 134,
        images: ["/products/09 Flags/conference-flags-thumb-dubai.jpg", "/products/09 Flags/hanging_conference_flags_dubai.jpg"],
        description: "Professional conference flags for meetings and events.",
        features: ["Professional design", "Conference use", "High quality"],
        specifications: { Design: "Professional", Use: "Conference", Quality: "High" },
        variations: [
            { name: "Standard Conference Flag", price: "$30", image: "/images/conference-flag-standard.png" },
            { name: "Premium Conference Flag", price: "$50", image: "/images/conference-flag-premium.png" }
        ],
        faqs: [
            { question: "What makes them suitable for conferences?", answer: "Professional design and high-quality materials for business events." },
            { question: "Can I get custom branding?", answer: "Yes, we can add custom branding and logos to conference flags." }
        ],
    },
    {
        slug: "conference-flags-hanging",
        name: "Conference Flags - Hanging",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.6,
        reviews: 89,
        images: ["/images/conference-flags-hanging1.png", "/images/conference-flags-hanging2.png"],
        description: "Hanging conference flags for overhead displays.",
        features: ["Hanging system", "Overhead display", "Professional appearance"],
        specifications: { System: "Hanging", Display: "Overhead", Appearance: "Professional" },
        variations: [
            { name: "Standard Hanging Conference", price: "$35", image: "/images/hanging-conference-standard.png" },
            { name: "Premium Hanging Conference", price: "$55", image: "/images/hanging-conference-premium.png" }
        ],
        faqs: [
            { question: "How are they hung?", answer: "Professional hanging system for secure overhead display." },
            { question: "What's the visibility like?", answer: "Excellent visibility from all angles in the conference area." }
        ],
    },
    {
        slug: "hoisting-flags",
        name: "Hoisting Flags",
        sectionId: "flags",
        price: "Starting from $40",
        rating: 4.8,
        reviews: 123,
        images: ["/images/hoisting-flags1.png", "/images/hoisting-flags2.png"],
        description: "Traditional hoisting flags for flagpoles and ceremonial use.",
        features: ["Traditional design", "Flagpole use", "Ceremonial"],
        specifications: { Design: "Traditional", Use: "Flagpole", Purpose: "Ceremonial" },
        variations: [
            { name: "Standard Hoisting Flag", price: "$40", image: "/images/hoisting-flag-standard.png" },
            { name: "Premium Hoisting Flag", price: "$65", image: "/images/hoisting-flag-premium.png" }
        ],
        faqs: [
            { question: "What is hoisting?", answer: "Traditional method of raising flags on flagpoles." },
            { question: "Where are they commonly used?", answer: "Government buildings, schools, and ceremonial occasions." }
        ],
    },
    {
        slug: "wall-mounted-flags",
        name: "Wall Mounted Flags",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.5,
        reviews: 167,
        images: ["/images/wall-mounted-flags1.png", "/images/wall-mounted-flags2.png"],
        description: "Wall mounted flags for indoor and outdoor display.",
        features: ["Wall mounting", "Indoor/outdoor use", "Easy installation"],
        specifications: { Mounting: "Wall", Use: "Indoor/Outdoor", Installation: "Easy" },
        variations: [
            { name: "Standard Wall Mounted", price: "$25", image: "/images/wall-mounted-flag-standard.png" },
            { name: "Premium Wall Mounted", price: "$40", image: "/images/wall-mounted-flag-premium.png" }
        ],
        faqs: [
            { question: "Is installation easy?", answer: "Yes, wall mounted flags come with easy installation hardware." },
            { question: "Can they be used outdoors?", answer: "Yes, suitable for both indoor and outdoor wall mounting." }
        ],
    },
    {
        slug: "stadium-flags",
        name: "Stadium Flags",
        sectionId: "flags",
        price: "Starting from $65",
        rating: 4.9,
        reviews: 98,
        images: ["/images/stadium-flags1.png", "/images/stadium-flags2.png"],
        description: "Large stadium flags for sporting events and venues.",
        features: ["Large size", "Stadium use", "High visibility"],
        specifications: { Size: "Large", Use: "Stadium", Visibility: "High" },
        variations: [
            { name: "Standard Stadium Flag", price: "$65", image: "/images/stadium-flag-standard.png" },
            { name: "Premium Stadium Flag", price: "$95", image: "/images/stadium-flag-premium.png" }
        ],
        faqs: [
            { question: "What size are stadium flags?", answer: "Large flags designed for visibility in stadium environments." },
            { question: "Are they weather resistant?", answer: "Yes, designed to withstand outdoor stadium conditions." }
        ],
    },
    {
        slug: "festival-flags",
        name: "Festival Flags",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.7,
        reviews: 145,
        images: ["/images/festival-flags1.png", "/images/festival-flags2.png"],
        description: "Colorful festival flags for celebrations and events.",
        features: ["Colorful design", "Festival use", "Celebration"],
        specifications: { Design: "Colorful", Use: "Festival", Purpose: "Celebration" },
        variations: [
            { name: "Standard Festival Flag", price: "$35", image: "/images/festival-flag-standard.png" },
            { name: "Premium Festival Flag", price: "$55", image: "/images/festival-flag-premium.png" }
        ],
        faqs: [
            { question: "What designs are available?", answer: "Various colorful designs suitable for festivals and celebrations." },
            { question: "Can I get custom festival designs?", answer: "Yes, we can create custom festival flags with your designs." }
        ],
    },
    {
        slug: "pole-flags",
        name: "Pole Flags",
        sectionId: "flags",
        price: "Starting from $20",
        rating: 4.6,
        reviews: 234,
        images: ["/images/pole-flags1.png", "/images/pole-flags2.png"],
        description: "Flags designed for pole mounting and display.",
        features: ["Pole mounting", "Easy display", "Various sizes"],
        specifications: { Mounting: "Pole", Display: "Easy", Size: "Various" },
        variations: [
            { name: "Standard Pole Flag", price: "$20", image: "/images/pole-flag-standard.png" },
            { name: "Premium Pole Flag", price: "$35", image: "/images/pole-flag-premium.png" }
        ],
        faqs: [
            { question: "What pole sizes are compatible?", answer: "Compatible with various pole sizes and mounting systems." },
            { question: "Is installation easy?", answer: "Yes, pole flags are designed for easy installation and display." }
        ],
    },
    {
        slug: "hand-flags",
        name: "Hand Flags",
        sectionId: "flags",
        price: "Starting from $8",
        rating: 4.4,
        reviews: 189,
        images: ["/products/09 Flags/hand-flags-thumb-dubai.jpg", "/products/09 Flags/table-flag-thumb-dubai.jpg"],
        description: "Small hand flags for waving and cheering.",
        features: ["Small size", "Hand-held", "Waving use"],
        specifications: { Size: "Small", Type: "Hand-held", Use: "Waving" },
        variations: [
            { name: "Standard Hand Flag", price: "$8", image: "/images/hand-flag-standard.png" },
            { name: "Premium Hand Flag", price: "$15", image: "/images/hand-flag-premium.png" }
        ],
        faqs: [
            { question: "What are hand flags used for?", answer: "Perfect for cheering, celebrations, and fan events." },
            { question: "What sizes are available?", answer: "Various small sizes suitable for hand waving." }
        ],
    },
    {
        slug: "finish-line",
        name: "Finish Line Flags",
        sectionId: "flags",
        price: "Starting from $45",
        rating: 4.8,
        reviews: 67,
        images: ["/images/finish-line1.png", "/images/finish-line2.png"],
        description: "Finish line flags for sporting events and races.",
        features: ["Finish line use", "Sporting events", "High visibility"],
        specifications: { Use: "Finish line", Events: "Sporting", Visibility: "High" },
        variations: [
            { name: "Standard Finish Line", price: "$45", image: "/images/finish-line-standard.png" },
            { name: "Premium Finish Line", price: "$75", image: "/images/finish-line-premium.png" }
        ],
        faqs: [
            { question: "What sporting events use finish line flags?", answer: "Running races, cycling events, and various competitive sports." },
            { question: "Are they highly visible?", answer: "Yes, designed for maximum visibility at finish lines." }
        ],
    },
    {
        slug: "body-flags",
        name: "Body Flags",
        sectionId: "flags",
        price: "Starting from $25",
        rating: 4.5,
        reviews: 89,
        images: ["/images/body-flags1.png", "/images/body-flags2.png"],
        description: "Body flags for wearing and personal display.",
        features: ["Body wear", "Personal display", "Custom designs"],
        specifications: { Wear: "Body", Display: "Personal", Design: "Custom" },
        variations: [
            { name: "Standard Body Flag", price: "$25", image: "/images/body-flag-standard.png" },
            { name: "Premium Body Flag", price: "$40", image: "/images/body-flag-premium.png" }
        ],
        faqs: [
            { question: "How are body flags worn?", answer: "Designed to be worn on the body for personal display." },
            { question: "Can I get custom designs?", answer: "Yes, we can create custom body flags with your designs." }
        ],
    },
    {
        slug: "fan-scarf",
        name: "Fan Scarves",
        sectionId: "flags",
        price: "Starting from $18",
        rating: 4.6,
        reviews: 156,
        images: ["/images/fan-scarf1.png", "/images/fan-scarf2.png"],
        description: "Fan scarves for team support and cheering.",
        features: ["Fan support", "Team colors", "Cheering use"],
        specifications: { Support: "Fan", Colors: "Team", Use: "Cheering" },
        variations: [
            { name: "Standard Fan Scarf", price: "$18", image: "/images/fan-scarf-standard.png" },
            { name: "Premium Fan Scarf", price: "$30", image: "/images/fan-scarf-premium.png" }
        ],
        faqs: [
            { question: "What team colors are available?", answer: "Various team colors and custom color options available." },
            { question: "Are they suitable for cheering?", answer: "Yes, perfect for fan cheering and team support." }
        ],
    },
    {
        slug: "car-flags",
        name: "Car Flags",
        sectionId: "flags",
        price: "Starting from $15",
        rating: 4.5,
        reviews: 234,
        images: ["/images/car-flags1.png", "/images/car-flags2.png"],
        description: "Car flags for vehicle display and mobile advertising.",
        features: ["Vehicle display", "Mobile advertising", "Easy mounting"],
        specifications: { Display: "Vehicle", Advertising: "Mobile", Mounting: "Easy" },
        variations: [
            { name: "Standard Car Flag", price: "$15", image: "/images/car-flag-standard.png" },
            { name: "Premium Car Flag", price: "$25", image: "/images/car-flag-premium.png" }
        ],
        faqs: [
            { question: "How are car flags mounted?", answer: "Easy mounting system designed for vehicle attachment." },
            { question: "Are they suitable for driving?", answer: "Yes, designed for safe use while driving." }
        ],
    },
    {
        slug: "car-desert-flags",
        name: "Car Desert Flags",
        sectionId: "flags",
        price: "Starting from $35",
        rating: 4.7,
        reviews: 78,
        images: ["/images/car-desert-flags1.png", "/images/car-desert-flags2.png"],
        description: "Desert flags for off-road vehicles and desert racing.",
        features: ["Desert use", "Off-road vehicles", "Racing"],
        specifications: { Use: "Desert", Vehicles: "Off-road", Purpose: "Racing" },
        variations: [
            { name: "Standard Desert Flag", price: "$35", image: "/images/desert-flag-standard.png" },
            { name: "Premium Desert Flag", price: "$55", image: "/images/desert-flag-premium.png" }
        ],
        faqs: [
            { question: "What makes them suitable for desert use?", answer: "Designed to withstand desert conditions and high speeds." },
            { question: "Are they used in racing?", answer: "Yes, commonly used in desert racing and off-road events." }
        ],
    },
    {
        slug: "dashboard-flags",
        name: "Dashboard Flags",
        sectionId: "flags",
        price: "Starting from $8",
        rating: 4.4,
        reviews: 167,
        images: ["/images/dashboard-flags1.png", "/images/dashboard-flags2.png"],
        description: "Small dashboard flags for vehicle interior display.",
        features: ["Dashboard display", "Small size", "Interior use"],
        specifications: { Display: "Dashboard", Size: "Small", Use: "Interior" },
        variations: [
            { name: "Standard Dashboard Flag", price: "$8", image: "/images/dashboard-flag-standard.png" },
            { name: "Premium Dashboard Flag", price: "$15", image: "/images/dashboard-flag-premium.png" }
        ],
        faqs: [
            { question: "How are they mounted on dashboards?", answer: "Easy mounting system for vehicle dashboard attachment." },
            { question: "Are they safe for driving?", answer: "Yes, designed to not obstruct driving visibility." }
        ],
    },
    {
        slug: "pennant-flags",
        name: "Pennant Flags",
        sectionId: "flags",
        price: "Starting from $12",
        rating: 4.6,
        reviews: 134,
        images: ["/images/pennant-flags1.png", "/images/pennant-flags2.png"],
        description: "Traditional pennant flags for decorative display.",
        features: ["Traditional design", "Decorative use", "Triangular shape"],
        specifications: { Design: "Traditional", Use: "Decorative", Shape: "Triangular" },
        variations: [
            { name: "Standard Pennant", price: "$12", image: "/images/pennant-standard.png" },
            { name: "Premium Pennant", price: "$20", image: "/images/pennant-premium.png" }
        ],
        faqs: [
            { question: "What is a pennant flag?", answer: "A triangular flag traditionally used for decorative purposes." },
            { question: "Where are pennant flags used?", answer: "Decorative displays, celebrations, and traditional ceremonies." }
        ],
    },
    {
        slug: "bunting-flags",
        name: "Bunting Flags",
        sectionId: "flags",
        price: "Starting from $20",
        rating: 4.7,
        reviews: 189,
        images: ["/images/bunting-flags1.png", "/images/bunting-flags2.png"],
        description: "Decorative bunting flags for celebrations and events.",
        features: ["Decorative design", "Celebration use", "Connected flags"],
        specifications: { Design: "Decorative", Use: "Celebration", Type: "Connected" },
        variations: [
            { name: "Standard Bunting", price: "$20", image: "/images/bunting-standard.png" },
            { name: "Premium Bunting", price: "$35", image: "/images/bunting-premium.png" }
        ],
        faqs: [
            { question: "What is bunting?", answer: "A string of connected flags used for decorative purposes." },
            { question: "Where is bunting commonly used?", answer: "Celebrations, parties, and festive events." }
        ],
    },
    {
        slug: "toothpick-flags",
        name: "Toothpick Flags",
        sectionId: "flags",
        price: "Starting from $5",
        rating: 4.3,
        reviews: 89,
        images: ["/products/09 Flags/toothpick-flags-thumb-dubai.jpg", "/products/09 Flags/hand-flags-thumb-dubai.jpg"],
        description: "Tiny toothpick flags for food and decorative use.",
        features: ["Tiny size", "Food use", "Decorative"],
        specifications: { Size: "Tiny", Use: "Food", Purpose: "Decorative" },
        variations: [
            { name: "Standard Toothpick Flag", price: "$5", image: "/images/toothpick-flag-standard.png" },
            { name: "Premium Toothpick Flag", price: "$8", image: "/images/toothpick-flag-premium.png" }
        ],
        faqs: [
            { question: "What are toothpick flags used for?", answer: "Decorative use on food, drinks, and small displays." },
            { question: "Are they food safe?", answer: "Yes, made from food-safe materials." }
        ],
    },
]
