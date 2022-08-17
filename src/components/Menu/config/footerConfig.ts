import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://t.me/BabyApecoinTGOfficial',
        isHighlighted: true,
      },
      {
        label: t('Community'),
        href: 'https://t.me/BabyApecoinTGOfficial',
      },
      {
        label: t('Litepaper'),
        href: 'https://www.babyapecoinofficial.net/wp-content/uploads/2022/06/whiteboard2.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/BabyApecoinTGOfficial',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/BabyApeOfficial/baby_ape_token',
      },

      {
        label: t('Audits'),
        href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/April/Baby%20ape.pdf',
      },
    ],
  },
]
