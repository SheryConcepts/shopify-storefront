export type SortFilterItem = {
  title: string
  slug: string | null
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE' | 'TITLE'
  reverse: boolean
}

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false,
}

// 'Best selling',
//         'Alphabetically, A-Z',
//         'Alphabetically, Z-A',
//         'Price, low to high',
//         'Price, high to low',
//         'Date, old to new',
//         'Date, new to old',
export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Best selling',
    slug: 'trending-desc',
    sortKey: 'BEST_SELLING',
    reverse: false,
  }, // asc
  {
    title: 'Alphabetically, A-Z',
    slug: 'alpha-asc',
    sortKey: 'TITLE',
    reverse: false,
  }, // asc
  {
    title: 'Alphabetically, Z-A',
    slug: 'alpha-desc',
    sortKey: 'TITLE',
    reverse: true,
  }, // desc
  {
    title: 'Date, old to new',
    slug: 'latest-desc',
    sortKey: 'CREATED_AT',
    reverse: true,
  }, //desc
  {
    title: 'Date, new to old',
    slug: 'latest-asc',
    sortKey: 'CREATED_AT',
    reverse: false,
  }, // asc
  {
    title: 'Price, high to low',
    slug: 'price-asc',
    sortKey: 'PRICE',
    reverse: false,
  }, // asc
  {
    title: 'Price, low to high',
    slug: 'price-desc',
    sortKey: 'PRICE',
    reverse: true,
  }, //desc
]

export const TAGS = {
  collections: 'collections',
  products: 'products',
}

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden'
export const DEFAULT_OPTION = 'Default Title'
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-04/graphql.json'
