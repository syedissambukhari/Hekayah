# Products Module Structure

This directory contains a modular structure for managing product data across different categories.

## File Structure

```
lib/products/
├── index.ts                 # Centralized exports
├── types.ts                 # Shared TypeScript interfaces
├── print-marketing.ts       # Print & Marketing products
├── fashion-textile.ts       # Fashion & Textile products
├── office-branding.ts       # Office & Store Branding products
├── signages.ts              # Signages products
├── flags.ts                 # Flags products
├── backdrops.ts             # Backdrops & Exhibition products
├── corporate-gifts.ts       # Corporate Gifts & Bags products
└── README.md               # This documentation
```

## Benefits of Modular Structure

1. **Maintainability**: Each category is in its own file, making it easier to manage
2. **Scalability**: Easy to add new categories or products without affecting others
3. **Performance**: Only load what you need
4. **Collaboration**: Multiple developers can work on different categories simultaneously
5. **Organization**: Clear separation of concerns

## Usage

### Import all products
```typescript
import { allProducts, getProduct, getProductsByCategory } from '@/lib/products'
```

### Import specific category
```typescript
import { printMarketingProducts } from '@/lib/products'
```

### Import individual product
```typescript
import { getProduct } from '@/lib/products'

const product = getProduct('print-marketing', 'business-cards')
```

## Adding New Products

1. Open the relevant category file (e.g., `print-marketing.ts`)
2. Add the new product to the array
3. Follow the existing `Product` interface structure
4. The product will automatically be available through all import methods

## Adding New Categories

1. Create a new file (e.g., `new-category.ts`)
2. Import the `Product` type and create the products array
3. Add the category to `index.ts` exports
4. Update the main `PRODUCT.ts` file to include the new category

This structure makes the codebase much more manageable as it grows!
