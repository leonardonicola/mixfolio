
# Mixfolio

Resolução do desafio técnico da Faster!


## Stacks utilizadas

- Nuxt
- Typescript
- Tailwind
- Zod 
- Vee-Validate
- Cypress

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env assim como declarado no .env.example:


`NUXT_PUBLIC_API_BASE`

Ela servirá como base para a endpoint da API.


## Rodando localmente

Clone o projeto

```bash
git clone https://github.com/leonardonicola/mixfolio
```

Entre no diretório do projeto

```bash
cd mixfolio
```

Instale as dependências

```bash
pnpm install
```

Rode em ambiente de desenvolvimento
```bash
pnpm dev
```


## Rodando os testes

Para rodar os testes com Cypress, há duas opções:

Abrindo a GUI do Cypress e rodando os testes manualmente

```bash
pnpm test:open
```

Rodando todos os testes no terminal automaticamente

```bash
pnpm test
```

## Autores

- [@leonardonicola](https://www.github.com/leonardonicola)

