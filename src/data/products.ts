import type { ProductCategory } from '@/types'

export const productCategories: ProductCategory[] = [
  {
    id: 'yellow-series',
    name: 'Yellow Series',
    slug: 'yellow-series',
    color: '#EAB308',
    textColor: '#1F2937',
    icon: 'Sun',
    description:
      'High-performance direct yellow dyes offering bright, uniform shades on cellulosic fibres with excellent wash fastness.',
    products: [
      {
        id: 'dy-6',
        name: 'Direct Yellow 6',
        shade: 'Bright Lemon Yellow',
        applications: ['Cotton', 'Viscose', 'Paper'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dy-12',
        name: 'Direct Yellow 12',
        shade: 'Bright Lemon Yellow',
        applications: ['Cotton', 'Viscose', 'Paper'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dy-44',
        name: 'Direct Yellow 44',
        shade: 'Golden Yellow',
        applications: ['Cotton', 'Blended Fabric'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dy-99',
        name: 'Direct Yellow 99',
        shade: 'Deep Chrome Yellow',
        applications: ['Cotton', 'Viscose', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dy-27',
        name: 'Direct Yellow 27',
        shade: 'Warm Yellow',
        applications: ['Cotton', 'Paper'],
        packaging: '25 kg bags',
        availability: 'On Order',
      },
    ],
  },
  {
    id: 'orange-series',
    name: 'Orange Series',
    slug: 'orange-series',
    color: '#F97316',
    textColor: '#FFFFFF',
    icon: 'Flame',
    description:
      'Vibrant direct orange dyes with good leveling properties, suitable for single and combination dyeing applications.',
    products: [
      {
        id: 'do-39',
        name: 'Direct Orange 39',
        shade: 'Bright Orange',
        applications: ['Cotton', 'Viscose'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'do-26',
        name: 'Direct Orange 26',
        shade: 'Deep Orange',
        applications: ['Cotton', 'Paper', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'do-34',
        name: 'Direct Orange 34',
        shade: 'Amber Orange',
        applications: ['Cotton', 'Blended'],
        packaging: '25 kg bags',
        availability: 'On Order',
      },
    ],
  },
  {
    id: 'green-series',
    name: 'Green Series',
    slug: 'green-series',
    color: '#16A34A',
    textColor: '#FFFFFF',
    icon: 'Leaf',
    description:
      'Stable direct green dyes with high tinctorial strength, used extensively in textile and paper coloring.',
    products: [
      {
        id: 'dg-6',
        name: 'Direct Green 6',
        shade: 'Malachite Green',
        applications: ['Cotton', 'Viscose', 'Paper'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dg-28',
        name: 'Direct Green 28',
        shade: 'Olive Green',
        applications: ['Cotton', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
    ],
  },
  {
    id: 'black-series',
    name: 'Black Series',
    slug: 'black-series',
    color: '#111827',
    textColor: '#FFFFFF',
    icon: 'Circle',
    description:
      'Rich, deep direct black dyes with superior shade depth and excellent reproducibility across batch sizes.',
    products: [
      {
        id: 'db-19',
        name: 'Direct Black 19',
        shade: 'Jet Black',
        applications: ['Cotton', 'Viscose', 'Silk'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'db-22',
        name: 'Direct Black 22',
        shade: 'Blue Black',
        applications: ['Cotton', 'Paper'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'db-38',
        name: 'Direct Black 38',
        shade: 'Deep Black',
        applications: ['Cotton', 'Viscose', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
    ],
  },
  {
    id: 'brown-series',
    name: 'Brown Series',
    slug: 'brown-series',
    color: '#92400E',
    textColor: '#FFFFFF',
    icon: 'Droplets',
    description:
      'Warm, earthy direct brown dyes with excellent light fastness, ideal for cotton and viscose dyeing.',
    products: [
      {
        id: 'dbr-1',
        name: 'Direct Brown 1',
        shade: 'Golden Brown',
        applications: ['Cotton', 'Viscose'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'dbr-101',
        name: 'Direct Brown 101',
        shade: 'Dark Walnut',
        applications: ['Cotton', 'Paper', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
    ],
  },
  {
    id: 'acid-dyes',
    name: 'Acid Dyes',
    slug: 'acid-dyes',
    color: '#7C3AED',
    textColor: '#FFFFFF',
    icon: 'TestTube',
    description:
      'High-performance acid dyes for protein fibres and polyamide, delivering brilliant shades with excellent fastness.',
    products: [
      {
        id: 'ay-36',
        name: 'Acid Yellow 36',
        shade: 'Bright Yellow',
        applications: ['Wool', 'Silk', 'Nylon'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'ar-14',
        name: 'Acid Red 14',
        shade: 'Scarlet Red',
        applications: ['Wool', 'Silk', 'Leather'],
        packaging: '25 kg bags',
        availability: 'In Stock',
      },
      {
        id: 'ab-9',
        name: 'Acid Blue 9',
        shade: 'Bright Blue',
        applications: ['Wool', 'Nylon', 'Paper'],
        packaging: '25 kg bags',
        availability: 'On Order',
      },
    ],
  },
]

// Featured products for homepage
export const featuredProducts = productCategories.flatMap((cat) =>
  cat.products.slice(0, 1).map((p) => ({
    ...p,
    categoryName: cat.name,
    categoryColor: cat.color,
    categoryTextColor: cat.textColor,
    categorySlug: cat.slug,
  }))
)
