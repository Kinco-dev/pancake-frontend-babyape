import { PancakeTheme, ResetCSS, dark, light, ModalProvider } from '@pancakeswap/uikit'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import Head from 'next/head'
import { Menu } from '../components/Menu'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const StyledThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { resolvedTheme } = useNextTheme()
  return (
    <ThemeProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
      {props.children}
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  html, body, #__next {
    height: 100%;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

function MyApp({ Component, pageProps }: AppProps) {
  // FIXME: server render styled component className conflict
  const isMounted = useIsMounted()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="The AMM specially designed for the meme tokens on BSC! Earn bonus tokens (ETH, BTC,...) by buying alliance tokens on the swap. Come and take advantage of the high returns of the staking pools."
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://allianceswap.finance/images/hero.png" />
        <meta
          name="twitter:description"
          content="The AMM specially designed for the meme tokens on BSC! Earn bonus tokens (ETH, BTC,...) by buying alliance tokens on the swap. Come and take advantage of the high returns of the staking pools."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AllianceSwap - Your favorite exchange on BNB Smart Chain (BSC)" />
        <title>AllianceSwap Bridge</title>
      </Head>
      <NextThemeProvider>
        <StyledThemeProvider>
          <ModalProvider>
            <ResetCSS />
            <GlobalStyle />
            {isMounted && (
              <>
                <Menu />
                <Component {...pageProps} />
              </>
            )}
          </ModalProvider>
        </StyledThemeProvider>
      </NextThemeProvider>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

export default MyApp
