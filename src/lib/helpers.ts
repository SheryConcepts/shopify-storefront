import { SlideData } from '@/interface'
import { getCollectionProducts, shopifyFetch } from './shopify'
import { Money } from './shopify/types'
import { type Product } from './shopify/types'

export type TableRow = Record<
  string,
  {
    text: string
    attributes: Record<string, string> | undefined
  }
>

function hyphenize(string: string) {
  return string
    .trim()
    .replace(/\s+/g, '-')
    .replace(/^\s+|\s+$/g, '')
}


async function getHomePageCollectionsWithProducts(collectionHandle: string) {
  type ShopifyHomePageCollection = {
    variables: {
      handle: string
    }
    data: any
  }

  const shopifyHomePageCollectionQuery = /*GraphQL*/ `
   query homePageCollection($handle: String!){
    collection(handle: $handle) {
      image {
        altText
        url
      }
      handle
      title
      products(first: 100000) {
        edges {
          node {
            handle
            featuredImage {
              altText
              url
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
            tags
            title
          }
        }
      }
    }
} 
`
  const res = await shopifyFetch<ShopifyHomePageCollection>({
    query: shopifyHomePageCollectionQuery,
    variables: { handle: collectionHandle },
  })
  const { products: productsWithEdges, rest } = res.body.data.collection
  const products = productsWithEdges.edges.map((e: any) => e.node)
  return { ...rest, products }
}

type HomeCollectionProduct = {
  handle: string
  featuredImage: FeaturedImage
  priceRange: {
    maxVariantPrice: Money
    minVariantPrice: Money
  }
  tags: Array<string>
  title: string
}

type FeaturedImage = {
  altText?: string
  url: string
}

export type HomeCollection = {
  handle: string
  title: string
  image: FeaturedImage
  products: Array<HomeCollectionProduct>
}

export type HomeCarouselCollection = {
  products: Product[]
  collectionTitle: string
  collectionHandle: string
}

export async function getHomeCarouselCollectionData(collectionTitle: string) {
  // assuming that we will know what collection to display beforehand.
  // If there is a need to change the collection choice, change 'collectionTitle'
  const collectionHandle = hyphenize(collectionTitle.toLowerCase())
  const products = await getCollectionProducts({
    collection: collectionHandle,
  })
  return { products, collectionTitle, collectionHandle }
}

export type HomePageCollection = {
  handle: string
  image: FeaturedImage
  title: string
  products: { handle: string }[]
  productCount: number
}

export async function getCollections(): Promise<
  HomePageCollection[] | undefined
> {
  try {
    const query = /*Graphql*/ `
        query HomePageCollections {
          collections(first: 250) {
            edges {
              node {
                handle
                image {
                  url
                  altText
                }
                title
                products(first: 250) {
                  nodes {
                    handle
                  }
                }
              }
            }
          }
        }
`
    const res = await shopifyFetch<any>({ query })
    const collections = res.body.data.collections.edges.reduce(
      (acc: HomePageCollection[], edge: any) => {
        const { handle, image, title, products } = edge.node
        let productCount: number = 0
        const productsWithoutNodes = products.nodes.map((i: any) => {
          productCount += 1
          return i
        })
        // To hide a collection from showing when all collections are fetched with this function.
        if (!title.startsWith('Hidden:')) {
          return [
            ...acc,
            {
              handle,
              image,
              title,
              products: productsWithoutNodes,
              productCount,
            },
          ]
        } else {
          return acc
        }
      },
      []
    )
    return collections
  } catch {
    return
  }
}

type Collection = {
  handle: string
  image: FeaturedImage
  title: string
  products: {
    handle: string
  }[]
}
export async function getCollection(): Promise<HomePageCollection | undefined> {
  try {
    const query = /*Graphql*/ `
        query Collection($handle: String!) {
          collection(handle: $handle) {
            edges {
              node {
                handle
                image {
                  url
                  altText
                }
                title
                products(first: 250) {
                  nodes {
                    handle
                  }
                }
              }
            }
          }
        }
`
    const res = await shopifyFetch<any>({ query, cache: 'no-cache' })
    const collections = res.body.data.collections.edges.reduce(
      (acc: HomePageCollection[], edge: any) => {
        const { handle, image, title, products } = edge.node
        let productCount: number = 0
        const productsWithoutNodes = products.nodes.map((i: any) => {
          productCount += 1
          return i
        })
        // To hide a collection from showing when all collections are fetched with this function.
        if (!title.startsWith('Hidden:')) {
          return [
            ...acc,
            {
              handle,
              image,
              title,
              products: productsWithoutNodes,
              productCount,
            },
          ]
        } else {
          return acc
        }
      },
      []
    )
    return collections
  } catch {
    return
  }
}

export async function getFilterVariantsNames() {
  const query = /*GraphQL*/ `
          query GetFilterVariantsNames {
        metaobject(handle: {handle: "filter-variants", type: "filter"}) {
          field(key: "variants") {
            references(first: 100) {
              edges {
                node {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
              }
            }
          }
        }
      }
`
  try {
    const res = await shopifyFetch<any>({ query, cache: 'no-cache' })

    return res.body.data.metaobject.field.references.edges.map(
      (n: any) => n.node.title
    )
  } catch (e) {
    throw new Error('Error while getting shopify filter variants')
  }
}

export async function getHeroSlides() {
  const query = `
  query GetHeroSlides {
  metaobject(handle: {type: "hero_slider", handle: "hero-slider"}) {
    field(key: "slides") {
      references(first: 100) {
        nodes {
          ... on Metaobject {
            fields {
              value
              type
              key
              reference {
                ... on Collection {
                  handle
                }
                ... on MediaImage {
                  image {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

  try {
    const res = await shopifyFetch<any>({ query, cache: 'no-cache' })
    const data = res.body.data.metaobject.field.references.nodes.map(
      (i: any) => {
        let slideObject: SlideData = {
          text: { sub_Header: '', button: '', heading: '', paragraph: '' },
          alt: '',
          src: '',
          href: '',
        }
        i.fields.forEach((field: any) => {
          if (field.key === 'button_text') {
            slideObject.text.button = field.value
          } else if (field.key === 'button_link') {
            slideObject.href = `collections/${field.reference.handle}`
          } else if (field.key === 'heading') {
            slideObject.text.heading = field.value
          } else if (field.key === 'image') {
            slideObject.src = field.reference.image.url
            slideObject.alt = field.reference.image.altText
          } else if (field.key === 'label') {
            slideObject.text.sub_Header = field.value
          } else if (field.key === 'sub_heading') {
            slideObject.text.paragraph = field.value
          }
        })
        return slideObject
      }
    )
    return data
  } catch (e) {
    console.error(e)
  }
}

export type FAQPage = {
  title: string
  description: string
  image: {
    url: string
    altText: string | null
  }
  question_sections: {
    title: string
    questions: { question: string; answer: string }[]
  }[]
}

export async function getFAQs(): Promise<FAQPage | undefined> {
  const query = `
    query MyQuery {
      metaobject(handle: {handle: "faqs-page", type: "faqs"}) {
        fields {
          value
          key
          references(first: 100) {
            nodes {
              ... on Metaobject {
                fields {
                  value
                  key
                  references(first: 100) {
                    nodes {
                      ... on Metaobject {
                        fields {
                          key
                          value
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          reference {
            ... on MediaImage {
              image {
                url
                altText
              }
            }
          }
        }
      }
    }
  `

  try {
    const res = await shopifyFetch<any>({ query, cache: 'no-cache' })
    const data: FAQPage = {
      title: '',
      description: '',
      image: {
        url: '',
        altText: null, // Initialize altText as null
      },
      question_sections: [],
    }

    res.body.data.metaobject.fields.forEach((i: any) => {
      if (i.key === 'title') {
        data.title = i.value
      } else if (i.key === 'description') {
        data.description = i.value
      } else if (i.key === 'image') {
        data.image.url = i.reference.image.url
        data.image.altText = i.reference.image.altText
      } else if (i.key === 'questions_sections') {
        i.references.nodes.forEach((section: any) => {
          const sectionData = {
            title:
              section.fields.find((field: any) => field.key === 'title')
                ?.value || '',
            questions:
              section.fields
                .find((field: any) => field.key === 'questions')
                ?.references.nodes.map((question: any) => ({
                  question:
                    question.fields.find(
                      (field: any) => field.key === 'question'
                    )?.value || '',
                  answer:
                    question.fields.find((field: any) => field.key === 'answer')
                      ?.value || '',
                })) || [],
          }
          data.question_sections.push(sectionData)
        })
      }
    })

    return data
  } catch (e) {
    console.error(e)
  }
}
