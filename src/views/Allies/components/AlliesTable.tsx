import Link from 'next/link'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { useRef } from 'react'
import AllyRow from './AllyRow'
import { Token } from '../../../../packages/swap-sdk/src/entities'

interface Ally {
  mainToken: Token
  rewardToken1: Token
  rewardToken2: Token
  rewardPercent1: number
  rewardPercent2: number
}

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  scroll-margin-top: 64px;

  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`
const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`

const AlliesTable: React.FC<React.PropsWithChildren> = () => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)

  const allies: Ally[] = [
    {
      mainToken: new Token(56, '0x8f8d01fF0B6Bd5a5C0611EE2667c3C59cf980575', 18, 'BABYAPE', 'BabyApe'),
      rewardToken1: new Token(56, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTC', 'Bitcoin'),
      rewardToken2: new Token(56, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'Ethereum'),
      rewardPercent1: 2,
      rewardPercent2: 3,
    },
    {
      mainToken: new Token(56, '0x6E2bA8115392fA84A80daEDa8bcB8a6172beb009', 9, 'SGC2', 'SafeGame Cash v2'),
      rewardToken1: new Token(56, '0x8f8d01fF0B6Bd5a5C0611EE2667c3C59cf980575', 18, 'BABYAPE', 'BabyApe'),
      rewardToken2: new Token(56, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'Ethereum'),
      rewardPercent1: 4,
      rewardPercent2: 4,
    },
  ]

  return (
    <StyledTableBorder>
      <StyledTable id="allies-table" role="table" ref={tableWrapperEl}>
        {allies.map((ally) => (
          <AllyRow
            mainToken={ally.mainToken}
            rewardToken1={ally.rewardToken1}
            rewardToken2={ally.rewardToken2}
            rewardPercent1={ally.rewardPercent1}
            rewardPercent2={ally.rewardPercent2}
            key={ally.mainToken.address}
          />
        ))}
      </StyledTable>
    </StyledTableBorder>
  )
}

export default AlliesTable
