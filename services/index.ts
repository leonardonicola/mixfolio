import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    ...options,
    baseURL: config.public.apiBaseUrl,
    server: true,
    onRequestError({ error }) {
      console.error('Erro:', error)
    },
    onResponseError({ error, response }) {
      console.error('Erro na resposta do servidor:', response.status)

      switch (response.status) {
        case 401:
          console.error('Acesso não autorizado!')
          break
        case 404:
          console.error('Recurso não encontrado')
          break
        // Exibir uma mensagem de erro genérica para outros tipos de erro
        default:
          console.error(`Erro: ${error?.message}`)
          break
      }
    },
  }

  return useFetch(url, defaults)
}
