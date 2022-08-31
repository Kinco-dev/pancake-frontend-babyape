import Link from 'next/link'
import { memo } from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { useMatchBreakpointsContext, Text, Flex } from '@pancakeswap/uikit'
import BaseCell, { CellContent } from 'views/Pools/components/PoolsTable/Cells/BaseCell'
import { TokenImage } from 'components/TokenImage'
import { Token } from '../../../../packages/swap-sdk/src/entities'

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`
const StyledRow = styled.div`
  background-color: transparent;
  display: flex;
`

const AllyRow: React.FC<
  React.PropsWithChildren<{
    mainToken: Token
    rewardToken1: Token
    rewardToken2: Token
    rewardPercent1: number
    rewardPercent2: number
  }>
> = ({ mainToken, rewardToken1, rewardToken2, rewardPercent1, rewardPercent2 }) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isDesktop, isMobile } = useMatchBreakpointsContext()
  const isLargerScreen = isLg || isXl || isXxl

  const { t } = useTranslation()

  return (
    <StyledRow role="row">
      <StyledCell role="cell">
        <TokenImage token={mainToken} mr="8px" width={40} height={40} />
        <CellContent>
          <Text fontSize="12px" bold color="secondary" textTransform="uppercase">
            {t('Buy')}
          </Text>
          <Text bold={!isMobile} small={isMobile}>
            <Link href={`swap?outputCurrency=${mainToken.address}&chainId=56`}>{mainToken.name}</Link>
          </Text>
          <Text fontSize="12px" color="textSubtle">
            Get {rewardPercent1 + rewardPercent2}% rewards
          </Text>
        </CellContent>
      </StyledCell>
      {isDesktop && (
        <StyledCell role="cell">
          <CellContent>
            <Text fontSize="12px" color="textSubtle" textAlign="left">
              {t('Symbol')}
            </Text>
            <Flex>
              <Text bold fontSize="16px" textAlign="left">
                <Link href={`swap?outputCurrency=${mainToken.address}&chainId=56`}>{mainToken.symbol}</Link>
              </Text>
            </Flex>
          </CellContent>
        </StyledCell>
      )}
      {isLargerScreen && (
        <StyledCell role="cell">
          <CellContent>
            <Text fontSize="12px" color="textSubtle" textAlign="left">
              {t('Total rewards')}
            </Text>
            <Flex>
              <Text bold fontSize="16px" textAlign="left">
                {rewardPercent1 + rewardPercent2}%
              </Text>
            </Flex>
          </CellContent>
        </StyledCell>
      )}
      <StyledCell role="cell">
        <TokenImage token={rewardToken1} mr="8px" width={36} height={36} />
        <CellContent>
          <Text fontSize="12px" bold color="secondary" textTransform="uppercase">
            {t('Token reward 1')}
          </Text>
          <Text bold={!isMobile} small={isMobile}>
            {rewardToken1.symbol} ({rewardPercent1}%)
          </Text>
        </CellContent>
      </StyledCell>
      {rewardToken2 ? (
        <StyledCell role="cell">
          <TokenImage token={rewardToken2} mr="8px" width={36} height={36} />
          <CellContent>
            <Text fontSize="12px" bold color="secondary" textTransform="uppercase">
              {t('Token reward 2')}
            </Text>
            <Text bold={!isMobile} small={isMobile}>
              {rewardToken2.symbol} ({rewardPercent2}%)
            </Text>
          </CellContent>
        </StyledCell>
      ) : (
        <StyledCell role="cell">
          <CellContent>
            <Text bold fontSize="12px" color="secondary" textTransform="uppercase">
              {t('Token reward 2')}
            </Text>
            <Text small={isMobile}>/</Text>
          </CellContent>
        </StyledCell>
      )}
    </StyledRow>
  )
}

export default memo(AllyRow)
