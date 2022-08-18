import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && token.address === '0x8f8d01fF0B6Bd5a5C0611EE2667c3C59cf980575') {
    return 'http://localhost:3000/images/tokens/0x8f8d01fF0B6Bd5a5C0611EE2667c3C59cf980575.png' // TODO change
  } else if (token && token.address === '0x6E2bA8115392fA84A80daEDa8bcB8a6172beb009') {
    return 'http://localhost:3000/images/tokens/0x6E2bA8115392fA84A80daEDa8bcB8a6172beb009.png' // TODO change
  } else if (token && token.address === '0xFAE8E64cDDE73550e7d7f0469557a33a417B2868') {
    return 'http://localhost:3000/images/tokens/0xFAE8E64cDDE73550e7d7f0469557a33a417B2868.png' // TODO change
  } else if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }
  return null
}

export default getTokenLogoURL
