// Signages Products

import { Product } from './types'

export const signagesProducts: Product[] = [
    {
        slug: "3d-signage",
        name: "3D Signage",
        sectionId: "signages",
        price: "Starting from $150",
        rating: 4.9,
        reviews: 67,
        images: ["/products/15 Posters/3d_signage_unlit_dubai_01.jpg", "/products/15 Posters/3d_signage_unlit_dubai_02.jpg"],
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
        images: ["/products/19 ID Card & Name Bedge/name_plate_printing_dubai_01.jpg", "/products/19 ID Card & Name Bedge/name_plate_printing_dubai_02.jpg"],
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
    // --- MISSING SIGNAGES PRODUCTS ---
    {
        slug: "3d-signage-unlit",
        name: "3D Signage (Unlit)",
        sectionId: "signages",
        price: "Starting from $150",
        rating: 4.8,
        reviews: 98,
        images: ["/products/15 Posters/3d_signage_unlit_dubai_01.jpg", "/products/15 Posters/3d_signage_unlit_dubai_02.jpg"],
        description: "Eye-catching 3D signage without internal lighting for cost-effective visibility.",
        features: ["3D dimensional design", "Cost-effective", "Weather resistant"],
        specifications: { Lighting: "Unlit", Design: "3D", Material: "Acrylic/Foam/Metal" },
        variations: [
            { name: "Acrylic 3D Unlit", price: "$150", image: "/images/acrylic-3d-unlit.png" },
            { name: "Metal 3D Unlit", price: "$200", image: "/images/metal-3d-unlit.png" }
        ],
        faqs: [
            { question: "What materials are used?", answer: "Acrylic, foam, metal, and various composite materials." },
            { question: "Is it suitable for outdoor use?", answer: "Yes, weather-resistant materials suitable for outdoor installation." }
        ],
    },
    {
        slug: "backlit-signage",
        name: "Backlit Signage",
        sectionId: "signages",
        price: "Starting from $200",
        rating: 4.9,
        reviews: 134,
        images: ["/products/10 backdrops/backlit_aluminum_profile_dubai.jpg", "/products/10 backdrops/backlit_fabric_popup_dubai.jpg"],
        description: "Premium backlit signage with LED lighting for maximum visibility.",
        features: ["LED backlighting", "High visibility", "Professional appearance"],
        specifications: { Lighting: "LED backlight", Visibility: "High", Material: "Premium" },
        variations: [
            { name: "Standard Backlit", price: "$200", image: "/images/backlit-standard.png" },
            { name: "Premium Backlit", price: "$350", image: "/images/backlit-premium.png" }
        ],
        faqs: [
            { question: "What type of LED lighting is used?", answer: "High-quality LED strips for even, energy-efficient illumination." },
            { question: "How long do the LEDs last?", answer: "LEDs typically last 50,000+ hours with minimal maintenance." }
        ],
    },
    {
        slug: "outlit-3d-signage",
        name: "Outlit 3D Signage",
        sectionId: "signages",
        price: "Starting from $250",
        rating: 4.7,
        reviews: 78,
        images: ["/images/outlit-3d-signage1.png", "/images/outlit-3d-signage2.png"],
        description: "3D signage with external lighting for dramatic visibility effects.",
        features: ["External lighting", "3D design", "Dramatic effects"],
        specifications: { Lighting: "External", Design: "3D", Effect: "Dramatic" },
        variations: [
            { name: "Standard Outlit 3D", price: "$250", image: "/images/outlit-3d-standard.png" },
            { name: "Premium Outlit 3D", price: "$400", image: "/images/outlit-3d-premium.png" }
        ],
        faqs: [
            { question: "How is the external lighting installed?", answer: "Professional installation with weather-resistant lighting fixtures." },
            { question: "What lighting options are available?", answer: "Various LED spotlights and floodlights for different effects." }
        ],
    },
    {
        slug: "flex-face-signage",
        name: "Flex Face Signage",
        sectionId: "signages",
        price: "Starting from $120",
        rating: 4.6,
        reviews: 156,
        images: ["/images/flex-face-signage1.png", "/images/flex-face-signage2.png"],
        description: "Flexible face signage for durable and cost-effective displays.",
        features: ["Flexible material", "Durable", "Cost-effective"],
        specifications: { Material: "Flexible vinyl", Durability: "High", Cost: "Effective" },
        variations: [
            { name: "Standard Flex Face", price: "$120", image: "/images/flex-face-standard.png" },
            { name: "Premium Flex Face", price: "$180", image: "/images/flex-face-premium.png" }
        ],
        faqs: [
            { question: "What is flex face material?", answer: "High-quality flexible vinyl that's durable and weather resistant." },
            { question: "How long does it last?", answer: "Flex face signage typically lasts 3-5 years with proper maintenance." }
        ],
    },
    {
        slug: "frontlit-signage",
        name: "Frontlit Signage",
        sectionId: "signages",
        price: "Starting from $180",
        rating: 4.5,
        reviews: 89,
        images: ["/images/frontlit-signage1.png", "/images/frontlit-signage2.png"],
        description: "Frontlit signage with LED lighting for clear visibility.",
        features: ["Front lighting", "Clear visibility", "LED technology"],
        specifications: { Lighting: "Front LED", Visibility: "Clear", Technology: "LED" },
        variations: [
            { name: "Standard Frontlit", price: "$180", image: "/images/frontlit-standard.png" },
            { name: "Premium Frontlit", price: "$280", image: "/images/frontlit-premium.png" }
        ],
        faqs: [
            { question: "How does front lighting work?", answer: "LED lights positioned at the front for direct illumination." },
            { question: "Is it energy efficient?", answer: "Yes, LED front lighting is highly energy efficient." }
        ],
    },
    {
        slug: "push-through-signage",
        name: "Push Through Signage",
        sectionId: "signages",
        price: "Starting from $300",
        rating: 4.8,
        reviews: 67,
        images: ["/images/push-through-signage1.png", "/images/push-through-signage2.png"],
        description: "Premium push through signage with dimensional letter effects.",
        features: ["Dimensional letters", "Premium materials", "Professional finish"],
        specifications: { Design: "Push through", Material: "Premium", Finish: "Professional" },
        variations: [
            { name: "Standard Push Through", price: "$300", image: "/images/push-through-standard.png" },
            { name: "Premium Push Through", price: "$500", image: "/images/push-through-premium.png" }
        ],
        faqs: [
            { question: "What is push through design?", answer: "Letters pushed through the face material for dimensional effect." },
            { question: "What materials are used?", answer: "Premium aluminum, acrylic, and various high-quality materials." }
        ],
    },
    {
        slug: "neon-signage",
        name: "Neon Signage",
        sectionId: "signages",
        price: "Starting from $400",
        rating: 4.9,
        reviews: 123,
        images: ["/images/neon-signage1.png", "/images/neon-signage2.png"],
        description: "Classic neon signage for vintage appeal and high visibility.",
        features: ["Neon lighting", "Vintage appeal", "High visibility"],
        specifications: { Lighting: "Neon", Appeal: "Vintage", Visibility: "High" },
        variations: [
            { name: "Classic Neon", price: "$400", image: "/images/classic-neon.png" },
            { name: "LED Neon", price: "$350", image: "/images/led-neon.png" }
        ],
        faqs: [
            { question: "Do you offer LED neon alternatives?", answer: "Yes, we offer both traditional neon and LED neon options." },
            { question: "How long does neon last?", answer: "Traditional neon lasts 10-15 years, LED neon lasts 20+ years." }
        ],
    },
    {
        slug: "metal-name-plates",
        name: "Metal Name Plates",
        sectionId: "signages",
        price: "Starting from $45",
        rating: 4.7,
        reviews: 189,
        images: ["/images/metal-name-plates1.png", "/images/metal-name-plates2.png"],
        description: "Professional metal name plates for offices and businesses.",
        features: ["Metal construction", "Professional finish", "Custom engraving"],
        specifications: { Material: "Metal", Finish: "Professional", Engraving: "Custom" },
        variations: [
            { name: "Aluminum Name Plate", price: "$45", image: "/images/aluminum-name-plate.png" },
            { name: "Stainless Steel Name Plate", price: "$65", image: "/images/stainless-name-plate.png" }
        ],
        faqs: [
            { question: "What metals are available?", answer: "Aluminum, stainless steel, brass, and various metal alloys." },
            { question: "What engraving methods are used?", answer: "Laser engraving and CNC machining for precision." }
        ],
    },
    {
        slug: "acrylic-name-plates",
        name: "Acrylic Name Plates",
        sectionId: "signages",
        price: "Starting from $35",
        rating: 4.6,
        reviews: 234,
        images: ["/images/acrylic-name-plates1.png", "/images/acrylic-name-plates2.png"],
        description: "Modern acrylic name plates with clean, professional appearance.",
        features: ["Modern design", "Acrylic material", "Clean appearance"],
        specifications: { Material: "Acrylic", Design: "Modern", Appearance: "Clean" },
        variations: [
            { name: "Standard Acrylic", price: "$35", image: "/images/acrylic-standard.png" },
            { name: "Premium Acrylic", price: "$55", image: "/images/acrylic-premium.png" }
        ],
        faqs: [
            { question: "What thickness options are available?", answer: "Various thicknesses from 3mm to 12mm available." },
            { question: "Can I get custom colors?", answer: "Yes, acrylic name plates available in various colors." }
        ],
    },
    {
        slug: "wooden-name-plates",
        name: "Wooden Name Plates",
        sectionId: "signages",
        price: "Starting from $40",
        rating: 4.5,
        reviews: 145,
        images: ["/images/wooden-name-plates1.png", "/images/wooden-name-plates2.png"],
        description: "Natural wooden name plates for warm, traditional appearance.",
        features: ["Natural wood", "Traditional appearance", "Warm finish"],
        specifications: { Material: "Natural wood", Appearance: "Traditional", Finish: "Warm" },
        variations: [
            { name: "Oak Name Plate", price: "$40", image: "/images/oak-name-plate.png" },
            { name: "Mahogany Name Plate", price: "$60", image: "/images/mahogany-name-plate.png" }
        ],
        faqs: [
            { question: "What wood types are available?", answer: "Oak, mahogany, cherry, and various premium wood types." },
            { question: "Is the wood treated for durability?", answer: "Yes, all wood is properly treated and finished for longevity." }
        ],
    },
    {
        slug: "table-top-signage",
        name: "Table Top Signage",
        sectionId: "signages",
        price: "Starting from $25",
        rating: 4.4,
        reviews: 167,
        images: ["/images/table-top-signage1.png", "/images/table-top-signage2.png"],
        description: "Compact table top signage for desks and reception areas.",
        features: ["Compact design", "Table mounting", "Professional appearance"],
        specifications: { Design: "Compact", Mounting: "Table top", Appearance: "Professional" },
        variations: [
            { name: "Basic Table Top", price: "$25", image: "/images/table-top-basic.png" },
            { name: "Premium Table Top", price: "$45", image: "/images/table-top-premium.png" }
        ],
        faqs: [
            { question: "What sizes are available?", answer: "Various compact sizes suitable for table tops." },
            { question: "Is it easy to clean?", answer: "Yes, designed for easy cleaning and maintenance." }
        ],
    },
    {
        slug: "flex-face-signs-light-box",
        name: "Flex Face Signs (Light Box)",
        sectionId: "signages",
        price: "Starting from $150",
        rating: 4.7,
        reviews: 98,
        images: ["/images/flex-face-signs-light-box1.png", "/images/flex-face-signs-light-box2.png"],
        description: "Flex face signs with integrated light box for illuminated displays.",
        features: ["Flex face material", "Integrated lighting", "Professional finish"],
        specifications: { Material: "Flex face", Lighting: "Integrated", Finish: "Professional" },
        variations: [
            { name: "Standard Flex Light Box", price: "$150", image: "/images/flex-light-box-standard.png" },
            { name: "Premium Flex Light Box", price: "$220", image: "/images/flex-light-box-premium.png" }
        ],
        faqs: [
            { question: "What lighting is integrated?", answer: "High-quality LED lighting for even illumination." },
            { question: "How energy efficient is it?", answer: "LED lighting provides excellent energy efficiency." }
        ],
    },
    {
        slug: "fabric-light-box",
        name: "Fabric Light Box",
        sectionId: "signages",
        price: "Starting from $180",
        rating: 4.8,
        reviews: 76,
        images: ["/images/fabric-light-box1.png", "/images/fabric-light-box2.png"],
        description: "Premium fabric light box for high-end illuminated displays.",
        features: ["Fabric material", "Premium quality", "Professional lighting"],
        specifications: { Material: "Premium fabric", Quality: "High-end", Lighting: "Professional" },
        variations: [
            { name: "Standard Fabric Light Box", price: "$180", image: "/images/fabric-light-box-standard.png" },
            { name: "Premium Fabric Light Box", price: "$280", image: "/images/fabric-light-box-premium.png" }
        ],
        faqs: [
            { question: "What type of fabric is used?", answer: "High-quality fabric specifically designed for light box applications." },
            { question: "Is it suitable for outdoor use?", answer: "Yes, weather-resistant fabric suitable for outdoor installation." }
        ],
    },
    {
        slug: "acrylic-signage-board",
        name: "Acrylic Signage Board",
        sectionId: "signages",
        price: "Starting from $65",
        rating: 4.6,
        reviews: 134,
        images: ["/images/acrylic-signage-board1.png", "/images/acrylic-signage-board2.png"],
        description: "Modern acrylic signage boards for professional displays.",
        features: ["Acrylic construction", "Modern design", "Professional finish"],
        specifications: { Material: "Acrylic", Design: "Modern", Finish: "Professional" },
        variations: [
            { name: "Standard Acrylic Board", price: "$65", image: "/images/acrylic-board-standard.png" },
            { name: "Premium Acrylic Board", price: "$95", image: "/images/acrylic-board-premium.png" }
        ],
        faqs: [
            { question: "What thickness options are available?", answer: "Various thicknesses from 3mm to 15mm available." },
            { question: "Can I get custom colors?", answer: "Yes, acrylic boards available in various colors and finishes." }
        ],
    },
    {
        slug: "poster-light-box",
        name: "Poster Light Box",
        sectionId: "signages",
        price: "Starting from $120",
        rating: 4.5,
        reviews: 89,
        images: ["/images/poster-light-box1.png", "/images/poster-light-box2.png"],
        description: "Poster light boxes for illuminated poster displays.",
        features: ["Poster display", "LED lighting", "Easy poster changes"],
        specifications: { Display: "Poster", Lighting: "LED", Changes: "Easy" },
        variations: [
            { name: "Standard Poster Light Box", price: "$120", image: "/images/poster-light-box-standard.png" },
            { name: "Premium Poster Light Box", price: "$180", image: "/images/poster-light-box-premium.png" }
        ],
        faqs: [
            { question: "How easy are poster changes?", answer: "Very easy, posters can be changed in minutes." },
            { question: "What poster sizes are supported?", answer: "Various standard poster sizes supported." }
        ],
    },
    {
        slug: "metal-letters",
        name: "Metal Letters",
        sectionId: "signages",
        price: "Starting from $25",
        rating: 4.7,
        reviews: 156,
        images: ["/images/metal-letters1.png", "/images/metal-letters2.png"],
        description: "Professional metal letters for dimensional signage.",
        features: ["Metal construction", "Dimensional design", "Professional finish"],
        specifications: { Material: "Metal", Design: "Dimensional", Finish: "Professional" },
        variations: [
            { name: "Aluminum Letters", price: "$25", image: "/images/aluminum-letters.png" },
            { name: "Stainless Steel Letters", price: "$35", image: "/images/stainless-letters.png" }
        ],
        faqs: [
            { question: "What metals are available?", answer: "Aluminum, stainless steel, brass, and various alloys." },
            { question: "What sizes are available?", answer: "Various letter heights from 3 inches to 5 feet." }
        ],
    },
    {
        slug: "wooden-letters",
        name: "Wooden Letters",
        sectionId: "signages",
        price: "Starting from $20",
        rating: 4.6,
        reviews: 134,
        images: ["/images/wooden-letters1.png", "/images/wooden-letters2.png"],
        description: "Natural wooden letters for warm, traditional signage.",
        features: ["Natural wood", "Traditional appearance", "Warm finish"],
        specifications: { Material: "Natural wood", Appearance: "Traditional", Finish: "Warm" },
        variations: [
            { name: "Oak Letters", price: "$20", image: "/images/oak-letters.png" },
            { name: "Mahogany Letters", price: "$30", image: "/images/mahogany-letters.png" }
        ],
        faqs: [
            { question: "What wood types are available?", answer: "Oak, mahogany, cherry, and various premium woods." },
            { question: "Is the wood treated?", answer: "Yes, properly treated and finished for durability." }
        ],
    },
    {
        slug: "acrylic-letters",
        name: "Acrylic Letters",
        sectionId: "signages",
        price: "Starting from $18",
        rating: 4.5,
        reviews: 189,
        images: ["/images/acrylic-letters1.png", "/images/acrylic-letters2.png"],
        description: "Modern acrylic letters for contemporary signage.",
        features: ["Acrylic material", "Modern design", "Various colors"],
        specifications: { Material: "Acrylic", Design: "Modern", Colors: "Various" },
        variations: [
            { name: "Standard Acrylic Letters", price: "$18", image: "/images/acrylic-letters-standard.png" },
            { name: "Premium Acrylic Letters", price: "$28", image: "/images/acrylic-letters-premium.png" }
        ],
        faqs: [
            { question: "What colors are available?", answer: "Various colors including clear, white, and custom colors." },
            { question: "What thickness options are available?", answer: "Various thicknesses from 3mm to 12mm." }
        ],
    },
    {
        slug: "forex-foam-letters",
        name: "Forex / Foam Letters",
        sectionId: "signages",
        price: "Starting from $15",
        rating: 4.4,
        reviews: 167,
        images: ["/images/forex-foam-letters1.png", "/images/forex-foam-letters2.png"],
        description: "Lightweight foam letters for cost-effective dimensional signage.",
        features: ["Lightweight", "Cost-effective", "Easy installation"],
        specifications: { Weight: "Light", Cost: "Effective", Installation: "Easy" },
        variations: [
            { name: "Standard Foam Letters", price: "$15", image: "/images/foam-letters-standard.png" },
            { name: "Premium Foam Letters", price: "$25", image: "/images/foam-letters-premium.png" }
        ],
        faqs: [
            { question: "What is forex/foam material?", answer: "High-density foam material that's lightweight and durable." },
            { question: "How are they installed?", answer: "Easy installation with various mounting options available." }
        ],
    },
    {
        slug: "wall-mounted-signage",
        name: "Wall Mounted Signage",
        sectionId: "signages",
        price: "Starting from $45",
        rating: 4.6,
        reviews: 234,
        images: ["/images/wall-mounted-signage1.png", "/images/wall-mounted-signage2.png"],
        description: "Professional wall mounted signage for indoor and outdoor use.",
        features: ["Wall mounting", "Professional finish", "Weather resistant"],
        specifications: { Mounting: "Wall", Finish: "Professional", Weather: "Resistant" },
        variations: [
            { name: "Standard Wall Mounted", price: "$45", image: "/images/wall-mounted-standard.png" },
            { name: "Premium Wall Mounted", price: "$75", image: "/images/wall-mounted-premium.png" }
        ],
        faqs: [
            { question: "What mounting hardware is included?", answer: "Professional mounting hardware included for secure installation." },
            { question: "Is it suitable for outdoor use?", answer: "Yes, weather-resistant materials suitable for outdoor installation." }
        ],
    },
    {
        slug: "hanging-signage",
        name: "Hanging Signage",
        sectionId: "signages",
        price: "Starting from $35",
        rating: 4.5,
        reviews: 145,
        images: ["/images/hanging-signage1.png", "/images/hanging-signage2.png"],
        description: "Hanging signage for ceiling and overhead displays.",
        features: ["Hanging system", "Overhead visibility", "Custom designs"],
        specifications: { System: "Hanging", Visibility: "Overhead", Design: "Custom" },
        variations: [
            { name: "Standard Hanging", price: "$35", image: "/images/hanging-standard.png" },
            { name: "Premium Hanging", price: "$55", image: "/images/hanging-premium.png" }
        ],
        faqs: [
            { question: "How is it hung?", answer: "Professional hanging system with chains or cables." },
            { question: "What's the weight limit?", answer: "Designed to support various weights safely." }
        ],
    },
    {
        slug: "self-standing-signage",
        name: "Self Standing Signage",
        sectionId: "signages",
        price: "Starting from $85",
        rating: 4.7,
        reviews: 189,
        images: ["/images/self-standing-signage1.png", "/images/self-standing-signage2.png"],
        description: "Self-standing signage for floor displays and wayfinding.",
        features: ["Self-standing", "Floor display", "Portable"],
        specifications: { Type: "Self-standing", Display: "Floor", Portability: "Yes" },
        variations: [
            { name: "Standard Self Standing", price: "$85", image: "/images/self-standing-standard.png" },
            { name: "Premium Self Standing", price: "$125", image: "/images/self-standing-premium.png" }
        ],
        faqs: [
            { question: "Is it portable?", answer: "Yes, self-standing signage is designed for portability." },
            { question: "What's the base design?", answer: "Stable base design for secure floor placement." }
        ],
    },
    {
        slug: "directory-signage",
        name: "Directory Signage",
        sectionId: "signages",
        price: "Starting from $95",
        rating: 4.8,
        reviews: 98,
        images: ["/images/directory-signage1.png", "/images/directory-signage2.png"],
        description: "Professional directory signage for wayfinding and information.",
        features: ["Directory display", "Wayfinding", "Information display"],
        specifications: { Display: "Directory", Purpose: "Wayfinding", Information: "Display" },
        variations: [
            { name: "Standard Directory", price: "$95", image: "/images/directory-standard.png" },
            { name: "Premium Directory", price: "$145", image: "/images/directory-premium.png" }
        ],
        faqs: [
            { question: "What information can be displayed?", answer: "Various information including names, directions, and floor plans." },
            { question: "Can it be updated?", answer: "Yes, directory signage can be easily updated with new information." }
        ],
    },
    {
        slug: "traffolyte-pvc-acrylic-labels",
        name: "Traffolyte / PVC / Acrylic Labels",
        sectionId: "signages",
        price: "Starting from $12",
        rating: 4.5,
        reviews: 234,
        images: ["/images/traffolyte-pvc-acrylic-labels1.png", "/images/traffolyte-pvc-acrylic-labels2.png"],
        description: "Professional labels in various materials for identification.",
        features: ["Various materials", "Professional finish", "Custom designs"],
        specifications: { Materials: "Traffolyte/PVC/Acrylic", Finish: "Professional", Design: "Custom" },
        variations: [
            { name: "Traffolyte Labels", price: "$12", image: "/images/traffolyte-labels.png" },
            { name: "PVC Labels", price: "$8", image: "/images/pvc-labels.png" }
        ],
        faqs: [
            { question: "What is traffolyte?", answer: "High-quality laminated plastic material for durable labels." },
            { question: "What applications are suitable?", answer: "Industrial, commercial, and various identification applications." }
        ],
    },
    {
        slug: "metal-labels",
        name: "Metal Labels",
        sectionId: "signages",
        price: "Starting from $15",
        rating: 4.6,
        reviews: 167,
        images: ["/images/metal-labels1.png", "/images/metal-labels2.png"],
        description: "Durable metal labels for industrial and commercial use.",
        features: ["Metal construction", "Durable", "Industrial grade"],
        specifications: { Material: "Metal", Durability: "High", Grade: "Industrial" },
        variations: [
            { name: "Aluminum Labels", price: "$15", image: "/images/aluminum-labels.png" },
            { name: "Stainless Steel Labels", price: "$25", image: "/images/stainless-labels.png" }
        ],
        faqs: [
            { question: "What metals are available?", answer: "Aluminum, stainless steel, brass, and various alloys." },
            { question: "Are they weather resistant?", answer: "Yes, metal labels are highly weather resistant." }
        ],
    },
    {
        slug: "wooden-labels",
        name: "Wooden Labels",
        sectionId: "signages",
        price: "Starting from $18",
        rating: 4.4,
        reviews: 89,
        images: ["/images/wooden-labels1.png", "/images/wooden-labels2.png"],
        description: "Natural wooden labels for traditional and rustic applications.",
        features: ["Natural wood", "Traditional appearance", "Rustic finish"],
        specifications: { Material: "Natural wood", Appearance: "Traditional", Finish: "Rustic" },
        variations: [
            { name: "Oak Labels", price: "$18", image: "/images/oak-labels.png" },
            { name: "Pine Labels", price: "$12", image: "/images/pine-labels.png" }
        ],
        faqs: [
            { question: "What wood types are available?", answer: "Oak, pine, cherry, and various natural wood types." },
            { question: "Is the wood treated?", answer: "Yes, properly treated and finished for durability." }
        ],
    },
    {
        slug: "acrylic-labels",
        name: "Acrylic Labels",
        sectionId: "signages",
        price: "Starting from $10",
        rating: 4.5,
        reviews: 189,
        images: ["/images/acrylic-labels1.png", "/images/acrylic-labels2.png"],
        description: "Modern acrylic labels for contemporary applications.",
        features: ["Acrylic material", "Modern design", "Various colors"],
        specifications: { Material: "Acrylic", Design: "Modern", Colors: "Various" },
        variations: [
            { name: "Standard Acrylic Labels", price: "$10", image: "/images/acrylic-labels-standard.png" },
            { name: "Premium Acrylic Labels", price: "$18", image: "/images/acrylic-labels-premium.png" }
        ],
        faqs: [
            { question: "What colors are available?", answer: "Various colors including clear, white, and custom colors." },
            { question: "What thickness options are available?", answer: "Various thicknesses from 1mm to 6mm." }
        ],
    },
    {
        slug: "self-standing-sign",
        name: "Self-Standing Sign",
        sectionId: "signages",
        price: "Starting from $65",
        rating: 4.6,
        reviews: 145,
        images: ["/images/self-standing-sign1.png", "/images/self-standing-sign2.png"],
        description: "Self-standing safety signs for floor placement.",
        features: ["Self-standing", "Safety information", "Floor placement"],
        specifications: { Type: "Self-standing", Purpose: "Safety", Placement: "Floor" },
        variations: [
            { name: "Basic Self Standing Sign", price: "$65", image: "/images/self-standing-basic.png" },
            { name: "Premium Self Standing Sign", price: "$95", image: "/images/self-standing-premium.png" }
        ],
        faqs: [
            { question: "What safety information can be displayed?", answer: "Various safety messages, warnings, and information." },
            { question: "Is it stable on the floor?", answer: "Yes, designed with stable base for secure floor placement." }
        ],
    },
    {
        slug: "floor-sign-signage",
        name: "Floor Sign / Signage",
        sectionId: "signages",
        price: "Starting from $35",
        rating: 4.5,
        reviews: 123,
        images: ["/images/floor-sign-signage1.png", "/images/floor-sign-signage2.png"],
        description: "Floor signs and signage for ground-level displays.",
        features: ["Floor placement", "High visibility", "Durable materials"],
        specifications: { Placement: "Floor", Visibility: "High", Material: "Durable" },
        variations: [
            { name: "Standard Floor Sign", price: "$35", image: "/images/floor-sign-standard.png" },
            { name: "Premium Floor Sign", price: "$55", image: "/images/floor-sign-premium.png" }
        ],
        faqs: [
            { question: "Are they suitable for high traffic areas?", answer: "Yes, designed to withstand high foot traffic." },
            { question: "How long do they last?", answer: "Floor signs can last 1-3 years depending on traffic and maintenance." }
        ],
    },
]
