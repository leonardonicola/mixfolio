import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {},
) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    ...options,
    baseURL: config.public.apiBaseUrl,
    server: true,
    onResponseError({ response }) {
      switch (response.status) {
        case 401:
          createError({ statusCode: 401, fatal: true })
          break
        case 404:
          createError({ statusCode: 404 })
          break
        case 500:
          createError({
            statusCode: 500,
            fatal: true,
          })
          break
        default:
          createError({ statusCode: response.status })
          break
      }
    },
  }

  return useFetch(url, defaults)
}
