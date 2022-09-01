import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import styled from 'styled-components'
import { Heading, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import AlliesTable from './components/AlliesTable'

const Allies: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Allies')}
            </Heading>
            <Heading scale="md" color="text">
              {t('List of all tokens benefiting from the buy bonus.')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Buy tokens, get rewards.')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <AlliesTable />
      </Page>
    </>
  )
}
export default Allies
