# Navigation System Documentation

## Overview
The navigation system has been refactored to be modular and easy to manage. All navigation data is now centralized in a single configuration file.

## File Structure

### Core Files
- `navigation-config.ts` - Central configuration for all navigation data
- `mega-dropdown-nav.tsx` - Reusable component for desktop mega dropdowns
- `mobile-nav-section.tsx` - Reusable component for mobile navigation sections
- `mega-dropdown.tsx` - The mega dropdown display component (unchanged)
- `header.tsx` - Main header component (simplified)

## How to Add/Modify Navigation

### 1. Adding a New Navigation Section

Edit `components/navigation-config.ts`:

```typescript
{
  id: "new-section", // Unique identifier
  label: "New Section", // Display name
  categories: [
    {
      title: "Category Name",
      items: ["Item 1", "Item 2", "Item 3"]
    }
  ],
  featuredImage: {
    src: "/images/featured-image.png",
    alt: "Featured Image Alt",
    title: "Featured Title"
  },
  mostPopular: {
    title: "Most Popular",
    items: [
      { name: "Popular Item 1", image: "/images/thumb1.png" },
      { name: "Popular Item 2", image: "/images/thumb2.png" },
      { name: "Popular Item 3", image: "/images/thumb3.png" }
    ]
  }
}
```

### 2. Modifying Existing Categories

Simply edit the `categories` array in the appropriate section in `navigation-config.ts`:

```typescript
{
  title: "Updated Category Name",
  items: [
    "New Item 1",
    "New Item 2",
    "Updated Item 3"
  ]
}
```

### 3. Adding Items to Categories

Add items to the `items` array:

```typescript
{
  title: "Existing Category",
  items: [
    "Existing Item 1",
    "Existing Item 2",
    "New Item 3" // Add new items here
  ]
}
```

## URL Generation

The system automatically generates URLs using the pattern:
`/product/{section-id}/{item-slug}`

Where:
- `section-id` comes from the navigation section's `id`
- `item-slug` is the item name converted to lowercase with spaces replaced by hyphens

Example:
- Section ID: `print-marketing`
- Item: `Business Cards`
- Generated URL: `/product/print-marketing/business-cards`

## Helper Functions

### `generateProductUrl(sectionId: string, itemName: string): string`
Generates a properly formatted URL for any product item.

### `getNavigationSection(id: string): NavigationSection | undefined`
Retrieves a navigation section by its ID.

## Benefits of This Structure

1. **Centralized Configuration** - All navigation data in one place
2. **Easy Updates** - No need to touch multiple files when adding items
3. **Consistent URLs** - Automatic URL generation ensures consistency
4. **Reusable Components** - Desktop and mobile navigation share the same data
5. **Type Safety** - TypeScript interfaces ensure data consistency
6. **Maintainable** - Clear separation of concerns

## For Your Team

When adding products:
1. Open `components/navigation-config.ts`
2. Find the appropriate section
3. Add items to the relevant category's `items` array
4. The navigation will automatically update on both desktop and mobile

No need to modify any other files - everything is handled automatically!
