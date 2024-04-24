import { ReadonlyURLSearchParams } from 'next/navigation'

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`

export function convertTimestring(timestring: string): string {
  // Parse the timestring into a Date object
  const date = new Date(timestring)

  // Format the Date object into a string like JULY 14, 2021
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return formattedDate
}

export function convertStringToPascalCase(str: string): string {
  // Convert the string to lowercase.
  const lowercaseStr = str.toLowerCase()
  // Split the string into words.
  const words = lowercaseStr.split(/\W+/)
  // Capitalize the first letter of each word.
  const [word1, ...rest] = words
  const pascalCaseWords = rest.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  )
  pascalCaseWords.unshift(word1)
  // Join the words back together.
  const pascalCaseStr = pascalCaseWords.join('')
  // Return the PascalCase string.
  return pascalCaseStr
}

export function hyphenize(string: string) {
  return string
    .trim()
    .replace(/\s+/g, '-')
    .replace(/^\s+|\s+$/g, '')
    .toLowerCase()
}

export function convertPascalCaseToTitleCase(input: string): string {
  // Use a regular expression to insert a space before uppercase letters
  const convertedString = input.replace(/([A-Z])/g, ' $1')

  // Capitalize the first letter and remove leading spaces
  return (
    convertedString.charAt(0).toUpperCase() + convertedString.slice(1).trim()
  )
}

export function mapToLogicalExpression(strings: string[]): string {
  if (strings.length === 0) {
    return ''
  } else if (strings.length === 1) {
    return strings[0]
  } else {
    const joinedStrings = strings.join(' OR ')
    return `(${joinedStrings})`
  }
}

export function paramsToQueryObject(searchParams: {
  [key: string]: string | undefined
}): {
  query?: string | undefined
  reverse?: boolean | undefined
  sortKey?: string | undefined
} {
  // h1 = 'helper 1', just used for short names
  console.log(searchParams)
  function h1(v: string) {
    return v.split(',')
  }

  let query = ''
  let sortKey: string | undefined
  let reverse: boolean | undefined

  for (let param in searchParams) {
    const value = searchParams[param]
    if (param === 'query') {
      query += `${value} `
    } else if (param === 'priceRange') {
      if (!value) continue
      const priceRange = h1(value)
      query += `variants.price:>=${priceRange[0]} variants.price:<=${priceRange[1]} `
    } else if (param === 'color') {
      if (!value) continue
      const colors = h1(value).map((i) => `variants.color:${i}`)
      query += mapToLogicalExpression(colors) + ' '
    } else if (param === 'availability') {
      if (!value) continue
      const temp = h1(value)
      if (temp.length === 2) continue
      temp.forEach((s, i) => {
        if (s === 'inStock') {
          query += `available_for_sale:true `
        } else {
          query += `-available_for_sale:true `
        }
      })
    } else if (param === 'productType') {
      if (!value) continue
      query += `product_type:'${convertPascalCaseToTitleCase(value)}' `
    } else if (param === 'sortBy') {
      if (!value) continue
      if (value === 'bestSelling') {
        sortKey = 'BEST_SELLING'
      } else if (value === 'alphabeticallyAZ') {
        sortKey = 'TITLE'
      } else if (value === 'alphabeticallyZA') {
        sortKey = 'TITLE'
        reverse = true
      } else if (value === 'priceLowToHigh') {
        sortKey = 'PRICE'
      } else if (value === 'priceHighToLow') {
        sortKey = 'PRICE'
        reverse = true
      } else if (value === 'dateOldToNew') {
        sortKey = 'CREATED_AT'
      } else if (value === 'dateNewToOld') {
        sortKey = 'CREATED_AT'
        reverse = true
      }
    }
  }

  console.log({
    query,
    sortKey,
    reverse,
  })

  return {
    query,
    sortKey,
    reverse,
  }
}
