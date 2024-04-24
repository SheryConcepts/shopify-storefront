import { useCallback, useEffect, useState, useTransition } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export function debounced<T extends (...args: any[]) => any>(
  func: T,
  duration: number
): (...args: Parameters<T>) => ReturnType<T> {
  let timeoutId: NodeJS.Timeout
  let result: ReturnType<T>

  return (...args: Parameters<T>) => {
    timeoutId && clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      result = func(...args)
    }, duration)
    return result
  }
}

export function useSetSearchParams(): [
  string,
  (params: {
    [name: string]: (string | number) | Array<string | number>
  }) => void
] {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [params, setParams] = useState(() => {
    return pathname + '?' + searchParams.toString()
  })
  const createQueryString = useCallback(
    (name: string, value: (string | number) | Array<string | number>) => {
      const params = new URLSearchParams(searchParams)
      if (value instanceof Array) {
        params.set(name, value.join(','))
        return params.toString()
      }
      params.set(name, typeof value === 'number' ? value.toString() : value)
      return params.toString()
    },
    [searchParams]
  )

  return [
    params,
    (paramsObject: {
      [name: string]: (string | number) | Array<string | number>
    }) => {
      for (let i in paramsObject) {
        console.log(paramsObject)
        const newParams = createQueryString(i, paramsObject[i])
        const path = pathname + '?' + newParams
        setParams(path)
      }
    },
  ]
}

export function usePushSearchParams(): [
  string,
  (
    params: {
      name: string
      value: (string | number) | Array<string | number>
      op: 'push' | 'pop'
    }[]
  ) => void,
  boolean
] {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [params, setParams] = useState(() => {
    return pathname + '?' + (searchParams.toString() && '')
  })
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const createQueryString = useCallback(
    (
      name: string,
      value: (string | number) | Array<string | number>,
      op: 'push' | 'pop'
    ) => {
      const params = new URLSearchParams(searchParams)
      if (op === 'push') {
        if (value instanceof Array) {
          params.set(
            name,
            value
              .filter((s) => {
                if (typeof s === 'number') return true
                return s.length > 0
              })
              .join(',')
          )
          return params.toString()
        }
        params.set(name, typeof value === 'number' ? value.toString() : value)
        return params.toString()
      } else {
        params.delete(name)
        return params.toString()
      }
    },
    [searchParams]
  )
  // push route i.e transition only after waiting 500 ms, to avoid extra requests to server
  const pushRoute = useCallback(
    debounced((route: string) => {
      startTransition(() => {
        router.push(route)
      })
    }, 500),
    []
  )

  useEffect(() => {
    pushRoute(params)
  }, [params])

  return [
    params,
    (
      paramsArray: {
        name: string
        value: (string | number) | Array<string | number>
        op: 'push' | 'pop'
      }[]
    ) => {
      paramsArray.forEach((p) => {
        if (!p.value) return
        const newParams = createQueryString(p.name, p.value, p.op)
        const path = pathname + '?' + newParams
        setParams(path)
      })
    },
    pending,
  ]
}
