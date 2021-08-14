This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Crie um aplicativo Next.js

```bash
npx create-next-app NOME_DO_PROJETO
```

TypeScript

Como configurar Next.js com TypeScript.

Como usar tipos específicos de Next.js.

Como converter seu aplicativo de blog para TypeScript.

Create tsconfig.json

```bash
touch tsconfig.json
```

Siga as instruções para instalar o TypeScript:

```bash
npm install --save-dev typescript @types/react @types/node
# or
yarn add --dev typescript @types/react @types/node
```

Preencha o arquivo `tsconfig.json` para você. Você pode personalizar este arquivo como desejar. 

O arquivo `next-env.d.ts`, que garante que os tipos Next.js sejam selecionados pelo compilador TypeScript. Você não deve tocar neste arquivo.

Tipos específicos de Next.js

Static Generation and Server-side Rendering

Para os métodos `getStaticProps`, `getStaticPaths` e `getServerSideProps`, você pode usar os tipos `GetStaticProps`, `GetStaticPaths` e `GetServerSideProps` respectivamente, conforme abaixo:

```bash
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```

Rotas de API

A seguir está um exemplo de como usar os tipos integrados para rotas de API:

```bash
import { NextApiRequest, NextApiResponse } from 'next';

export default (
    request: NextApiRequest, 
    response: NextApiResponse) => {
  // ...
}
```

App personalizado

Realize a troca dos formatos dos arquivos de `pages/_app.js` para `pages/_app.tsx` e usar o tipo integrado `AppProps`, assim:


```bash
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
```

Convertendo seu aplicativo

Atualize os seguintes arquivos para TypeScript:

1. `components/date.js`: Atualizar para `date.tsx`
2. `components/layout.js`: Atualizar para `layout.tsx`
3. `lib/posts.js`: Atualizar para `posts.ts`
4. `pages/posts/[id].js`: Atualizar para `[id].tsx`
5. `pages/index.js`: Atualizar para `index.tsx`
6. `pages/_app.js`: Atualizar para `_app.tsx`
7. `pages/api/hello.js`: Atualizar para `hello.ts`

PAra maiores informações para o aplicativo Typescript, segue o link:
https://nextjs.org/docs/basic-features/typescript


chakra

https://chakra-ui.com/docs/getting-started

Instalação


```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
# or
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Adicionar tema personalizado

Se precisar personalizar o tema do chakra padrão para atender aos seus requisitos de design, você pode estender o tema de `@chakra-ui/react`

Chakra UI fornece uma função `extendTheme` que funde profundamente o tema padrão com suas personalizações.

Crie um arquivo chamado `theme.ts` e adicione seu tema de seu projeto:

```bash
import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

export const theme = extendTheme({ colors, fonts })
```

Configurar provedor Chakra

No arquivo `_app.tsx`, passe o endereço do theme para o `ChakraProvider`:

```bash


function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  )
}
```