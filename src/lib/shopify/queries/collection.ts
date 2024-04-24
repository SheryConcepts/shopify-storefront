import imageFragment from '../fragments/image'
import productFragment from '../fragments/product'
import seoFragment from '../fragments/seo'

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    image
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`

export const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`

const seoFragment_ = /* GraphQL */ `
  fragment seo_ on SEO {
    description
    title
  }
`
const completeCollectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    image {
      url
      altText
      width
      height
    }
    seo {
      description
      title
    }
    updatedAt
    products(first: 250) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`

export const getCompleteCollectionQuery =
  /* GraphQL */
  `
    query getCollection(
      $handle: String!
      $max_price: Float
      $min_price: Float
      $available: Boolean
      $variant_name: String!
      $variant_value: String!
      $sort_key: ProductCollectionSortKeys
      $reverse: Boolean
      $product_type: String
    ) {
      collection(handle: $handle) {
        handle
        title
        description
        image {
          url
          altText
          width
          height
        }
        seo {
          description
          title
        }
        updatedAt
        products(
          first: 250
          filters: {
            available: $available
            price: { max: $max_price, min: $min_price }
            variantOption: { name: $variant_name, value: $variant_value }
            productType: $product_type
          }
          sortKey: $sort_key
          reverse: $reverse
        ) {
          edges {
            node {
              id
              handle
              availableForSale
              title
              description
              descriptionHtml
              options {
                id
                name
                values
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    selectedOptions {
                      name
                      value
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              featuredImage {
                url
                altText
                width
                height
              }
              images(first: 20) {
                edges {
                  node {
                    url
                    altText
                    width
                    height
                  }
                }
              }
              seo {
                description
                title
              }
              tags
              updatedAt
            }
          }
        }
      }
    }
  `

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`
