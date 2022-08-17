import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, GithubIcon, DiscordIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/babyapeoff",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/BabyApecoinTGOfficial",
      },
      {
        label: "Français",
        href: "https://t.me/BabyApeFr",
      },
      {
        label: "中文",
        href: "https://t.me/babyapechinaa",
      },
      {
        label: "Türkiye",
        href: "https://t.me/babyapeturkiye",
      },
      {
        label: "Nigeria",
        href: "https://t.me/babyapenigeria",
      },
      {
        label: "India",
        href: "https://t.me/babyapeindiaa",
      },
      {
        label: "Arabic",
        href: "https://t.me/babyapearabic",
      },
      {
        label: "Brazil",
        href: "https://t.me/babyapebrrazil",
      },
      {
        label: "Announcements",
        href: "https://t.me/babyapeannouncements",
      },
      {
        label: "Army",
        href: "https://t.me/babyapearmyy",
      },
      {
        label: "CyberVerse",
        href: "https://t.me/ChronicleofCyberVerse",
      },
    ],
  },
  /*   {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/pancakeswap",
  }, */
  /*   {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/pancakeswap_official",
  }, */
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/BabyApeOfficial/baby_ape_token",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/invite/P9YSpr7NMG",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
