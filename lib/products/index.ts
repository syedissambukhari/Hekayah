// Products Index - Centralized exports

export { Product } from './types'
export { printMarketingProducts } from './print-marketing'
export { fashionTextileProducts } from './fashion-textile'
export { officeBrandingProducts } from './office-branding'
export { signagesProducts } from './signages'
export { flagsProducts } from './flags'
export { backdropsProducts } from './backdrops'
export { corporateGiftsProducts } from './corporate-gifts'

// Combined products array
export const allProducts = [
    ...printMarketingProducts,
    ...fashionTextileProducts,
    ...officeBrandingProducts,
    ...signagesProducts,
    ...flagsProducts,
    ...backdropsProducts,
    ...corporateGiftsProducts,
]

// Helper functions
export function getProduct(sectionId: string, slug: string) {
    return allProducts.find((p) => p.sectionId === sectionId && p.slug === slug)
}

export function getProductsByCategory(sectionId: string) {
    return allProducts.filter((p) => p.sectionId === sectionId)
}
