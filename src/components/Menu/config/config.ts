import { MenuItemsType, SwapIcon, SwapFillIcon, EarnFillIcon, EarnIcon, MoreIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Swap'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        supportChainIds: [ChainId.BSC],
        showItemsOnMobile: false,
        items: [],
      },
      {
        label: t('Liquidity'),
        icon: MoreIcon,
        fillIcon: MoreIcon,
        href: '/liquidity',
        supportChainIds: [ChainId.BSC],
        showItemsOnMobile: false,
        items: [],
      },
      {
        label: t('Pools'),
        href: '/pools',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        image: '/images/decorations/pe2.png',
        showItemsOnMobile: false,
        items: [],
      },
      {
        label: t('Allies'),
        href: '/allies',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        showItemsOnMobile: false,
        items: [],
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
