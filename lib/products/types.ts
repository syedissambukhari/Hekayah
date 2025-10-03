// Shared Product Types

export interface Product {
    slug: string
    name: string
    sectionId: string
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
