// Main Product File - Imports from modular category files

import { Product } from './products/types'
import { printMarketingProducts } from './products/print-marketing'
import { fashionTextileProducts } from './products/fashion-textile'
import { officeBrandingProducts } from './products/office-branding'
import { signagesProducts } from './products/signages'
import { flagsProducts } from './products/flags'
import { backdropsProducts } from './products/backdrops'
import { corporateGiftsProducts } from './products/corporate-gifts'

// Combined products array from all categories
export const products: Product[] = [
    ...printMarketingProducts,
    ...fashionTextileProducts,
    ...officeBrandingProducts,
    ...signagesProducts,
    ...flagsProducts,
    ...backdropsProducts,
    ...corporateGiftsProducts,
]

// Export individual category arrays for direct access
export { printMarketingProducts } from './products/print-marketing'
export { fashionTextileProducts } from './products/fashion-textile'
export { officeBrandingProducts } from './products/office-branding'
export { signagesProducts } from './products/signages'
export { flagsProducts } from './products/flags'
export { backdropsProducts } from './products/backdrops'
export { corporateGiftsProducts } from './products/corporate-gifts'

// Re-export types for convenience
export type { Product } from './products/types'

// Helper functions
export function getProduct(sectionId: string, slug: string) {
    return products.find((p) => p.sectionId === sectionId && p.slug === slug)
}

export function getProductsByCategory(sectionId: string) {
    return products.filter((p) => p.sectionId === sectionId)
}