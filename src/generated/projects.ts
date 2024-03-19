// ===========================================================================
// DO NOT EDIT THIS FILE MANUALLY!
//
// The contents have been added automatically.
// See: scripts/generate-projects.ts for more information
// ===========================================================================

import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    name: '0xCardinal',
    tagline: 'An innovative token-based betting platform built on the BSC.',
    description:
      '0xcardinal is a pioneering, community-driven decentralized betting platform developed based on blockchain technology and operationalized on the Binance Smart Chain. 0xcardinal puts its community at the center of its operations, valuing transparency, fairness, and empowerment. By doing so, 0xcardinal enables its users to not only participate but also influence the platform’s evolution.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699245650628_12.jpeg',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699245650630_BANNER.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699245650733_0603.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699245650794_0602.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699245650909_0601.png',
      ],
    },
    categories: ['gaming', 'defi', 'dao'],
    productType: 'qrng',
    chains: ['56'],
    year: 2023,
    links: {
      dapp: 'https://0xcardinal.io/',
      docs: 'https://docs.0xcardinal.io/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/0xCardinal_io' },
        { label: 'discord', url: 'https://discord.com/invite/6b6JFrNzsT' },
      ],
    },
  },
  {
    name: 'ChainLocker',
    tagline: 'Data-contingent Smart Contract Escrow',
    description:
      'ChainLocker seeks to optimize intermediary-free conditional digital asset escrow. Users customize and deploy their own “ChainLockers”: non-custodial escrow smart contracts with immutable parameters, including the option to make execution contingent on external data. Each ChainLocker is a unique address, ensuring funds of different counterparties are not commingled and that execution is dictated strictly via code./n/nChainLockers can lock native gas tokens or ERC20-compliant tokens, with other immutable feature options including refundability, expiration, identified counterparty or open offer, and oracle-fed data contingency. Users may also print a US dollar-denominated Receipt for certain locked assets. ',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1702567223494_ChainLocker%20Logo.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1702567223819_Wave%201.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1702567223933_CreatePageScreenshot.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1702567223946_DirectoryPageScreenshot.png',
      ],
    },
    categories: ['defi', 'infrastructure', 'other'],
    productType: 'datafeed',
    chains: ['42161', '1', '10', '1101', '137'],
    proxies: {
      '137': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x009E9B1eec955E9Fe7FE64f80aE868e661cb4729',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://chainlocker.org/',
      dapp: 'https://chainlocker.org/',
      docs: 'https://chainlocker.org/#/documentation',
      explorer: 'https://chainlocker.org/#/directory',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/chainlockerllc' },
        { label: 'github', url: 'https://github.com/ChainLockerLLC' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Damned Pirates Society',
    tagline: 'The Damned Pirate Society combines an on-chain light-strategy game.',
    description:
      'Voyaging (On-chain strategy game)/n/nThe game where you go on voyages, find treasure and grow your fleets with the profits of your plunder. Pirates, Flagships, Support Ships & Artefacts all combine to help you generate Doubloons, the in-game currency. These NFTs and live on-chain, allowing you to trade them./n/nPixel-based sprite Metaverse/n/nThe gameplay will have semi-idle style games and will also incorporate real-time elements in the future for those looking for a more traditional game experience. Sprite-based gameplay is inspired by 90s games such as Final Fantasy VI, Pokemon and of course the Curse of Monkey Island.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699271321271_dps.jpeg',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699271321272_DPSbanner.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699271321278_Screenshot%202023-11-06%20at%2011.39.58.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1699271321302_Screenshot%202023-11-06%20at%2011.47.51.png',
      ],
    },
    categories: ['gaming', 'nft'],
    productType: 'qrng',
    chains: ['42170', '1284'],
    year: 2022,
    links: {
      dapp: 'https://damnedpiratessociety.io/',
      website: 'https://www.damnedpiratessociety.io/',
      docs: 'https://damnedpiratessociety.gitbook.io/the-damned-pirates-society/introduction',
      explorer: 'https://damnedpiratessociety.gitbook.io/the-damned-pirates-society/introduction/contracts',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/TheDPSproject' },
        { label: 'discord', url: 'https://discord.gg/thedamnedpiratessociety' },
      ],
    },
  },
  {
    name: 'Estfor Kingdom',
    tagline: 'A medieval fantasy web3 MMORPG. Fully on-chain, idle browser game.',
    description:
      'Estfor Kingdom is a medieval fantasy web3 MMORPG. Fully on-chain, idle browser game with clans, quests, skills and monsters with a $BRUSH in-game economy utilising ERC1155 NFTs for all in-game items./n/nClan wars uses API3 to randomly assign warriors to battle each other with individual skills in epic 20 v 20 fights over territories and clan vaults.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254261985_ek_logo.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254262006_Logo_on_background%201.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254262054_ss1.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254262100_ss2.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254262126_ss3.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1707254262148_ss4.png',
      ],
    },
    categories: ['nft', 'gaming', 'oracle'],
    productType: 'qrng',
    chains: ['250'],
    links: {
      website: 'https://estfor.com/',
      dapp: 'https://estfor.com/',
      docs: 'https://wiki.estfor.com/index.php/Main_Page',
      explorer: 'https://ftmscan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/EstforKingdom' },
        { label: 'discord', url: 'https://discord.com/invite/paintswap' },
        { label: 'reddit', url: 'https://www.reddit.com/r/estfor/' },
        { label: 'github', url: 'https://github.com/PaintSwap/estfor-contracts' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Granary Finance',
    tagline: 'Decentralized Lending Protocol',
    description:
      'Granary Finance is a decentralized non-custodial liquidity market protocol where users can participate as depositors or borrowers on a variety of network deployments. Granary strives to be "the People\'s Platform" by focusing on security, having low fees, and being one of the easiest to use lending protocols in DeFi.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698780224350_TheGranary_Logo_Yellow_mark%20%281%29.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698780224351_TheGranary_Logo_Yellow.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698780224351_g2.PNG',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698780224367_g1.PNG',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['42161', '8453', '56', '250', '1', '1088', '10', '43114', '59144'],
    proxies: {
      '59144': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x26690F9f17FdC26D419371315bc17950a0FC90eD',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDC/USD',
          dapiNameHash: '0x228ffa116d7cb33d822dc4f1ba986ee7ecfa6b6b570aab9663f30f560df7f880',
          proxyAddress: '0x8DF7d919Fe9e866259BB4D135922c5Bd96AF6A27',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDT/USD',
          dapiNameHash: '0x48ddbf100a94d2af942f3f3b525fe385c1ac3c8020c9d90aecd487f72adcaf3d',
          proxyAddress: '0xF63Fa6EA00678F435Ae3e845541EBb2Db0a1e8fF',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'DAI/USD',
          dapiNameHash: '0x9eaf6889d5df94e769098eb3119c7ad9a8f301b58296c06cb75b2859c6f35557',
          proxyAddress: '0x6538D9c4b12b5E5E209917D29C097465Ba8EFA02',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'WBTC/USD',
          dapiNameHash: '0x788a83d3185172684a06bc2d96ea3e98728e0e87b759e866757989dcfe63b4f4',
          proxyAddress: '0x28Cac6604A8f2471E19c8863E8AfB163aB60186a',
          oev: { enabled: false },
        },
      ],
    },
    year: 2022,
    links: {
      dapp: 'https://granary.finance/markets',
      website: 'https://granary.finance/markets',
      docs: 'https://docs.granary.finance/granary-v1.0/introduction',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/GranaryFinance' },
        { label: 'discord', url: 'https://discord.gg/sEtRC63s' },
      ],
    },
  },
  {
    name: 'Grimoire Finance',
    tagline: 'Grimoire Finance : Best way to trade',
    description:
      'Grimoire Finance is a Decentralized Trading (spot & futures)Exchange and Yield Farming Protocol. As a trading platform, with a drive of being invested in developing a strong foundation with our Grimoire token (GRIM) and trading protocols for users across web3 globe',
    status: 'inactive',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698846196024_Grimore%20logo%202.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698846196027_Grimore%20logo.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698846196047_Screenshot%202023-10-26%20123406.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698846196053_Screenshot%202023-10-26%20124435.png',
      ],
    },
    categories: ['defi', 'dao'],
    productType: 'datafeed',
    chains: ['42161'],
    proxies: {
      '42161': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x26690F9f17FdC26D419371315bc17950a0FC90eD',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'EUR/USD',
          dapiNameHash: '0xb98b48d49cffec4edeb24e899dd1c681d2b45de1141378c72d726f70491ffbae',
          proxyAddress: '0xA37F6f5a04b7D5eB8DF71799e09D683f8CeC22F3',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'BTC/USD',
          dapiNameHash: '0x4291cd9e354c309a63b4a41d0de370e9494d5d59a306af07636abaf68159e043',
          proxyAddress: '0xe5Cf15fED24942E656dBF75165aF1851C89F21B5',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'GBP/USD',
          dapiNameHash: '0x2cbb31d2202b04731dced650dbdf405924914d81e40ccbb9c5f7156d510ce6a5',
          proxyAddress: '0x2760445db099427F9A394fb1365e1Aa08Ed1f84d',
          oev: { enabled: false },
        },
      ],
    },
    year: 2023,
    links: {
      dapp: 'https://grimoire.finance',
      website: 'https://tensormarkets.finance/',
      docs: 'https://docs.grimoire.finance',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/GrimoireFinance' },
        { label: 'discord', url: 'https://discord.gg/uVjcVZ7Dss' },
        { label: 'github', url: 'https://github.com/Grimoire-Finance' },
        { label: 'telegram', url: 'https://t.me/GrimoireFinance' },
      ],
    },
  },
  {
    name: 'Kinetix Finance',
    tagline: 'State-of-the-Art DeFi Hub on Kava EVM. Your best trade, every trade',
    description:
      'What is Kinetix Finance? /n/nKinetix is building a native DeFi Hub for the Kava community. The Kinetix DeFi Hub encompasses a suite of sophisticated DeFi legos in the Web3 landscape to provide Kava with a one-stop platform for all things DeFi. Kinetix’s cohesive network of DeFi protocols includes a perpetual exchange (PEX), a decentralized exchange (DEX), and a market for sophisticated derivative instruments. Users on Kinetix are able to take on 50x leverage with perpetual contracts, execute swaps in spot markets, provide liquidity, stake as well as farm, and more./n/nThe Kinetix platform will unite all the major building blocks of DeFi, by including a range of financial instruments such as:/n➯ Lending markets/n➯ Staking and farming pools/n➯ Options/n➯ Synthetic assets/n➯ Concentrated liquidity/n➯ Leverage aggregation/n➯ Yield optimizers/n➯ Fiat on/off ramp solutions/nAnd much more./n/nAll of these features will be available on a single platform, making Kinetix the go-to place where the Kava ecosystem unites.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698349805931_KFI_Token%201%20%282%29.png',
      cover:
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698349805932_Kinetix%20Twitter%20Banner%20%281%29.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698349805943_Bildschirmfoto%202023-10-26%20um%2021.45.00.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1698349805953_Bildschirmfoto%202023-10-26%20um%2021.46.24.png',
      ],
    },
    categories: ['defi', 'dex'],
    productType: 'datafeed',
    chains: ['2222'],
    proxies: {
      '2222': [
        {
          proxyType: 'dapi',
          feedName: 'ATOM/USD',
          dapiNameHash: '0x23cdae0d2e01579a9dac06f1666639946391be8c10213d419428853b7de67f31',
          proxyAddress: '0x0582Fd0AfD3a40d53859b948E5c9854c3E03B5E2',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDT/USD',
          dapiNameHash: '0x48ddbf100a94d2af942f3f3b525fe385c1ac3c8020c9d90aecd487f72adcaf3d',
          proxyAddress: '0xF63Fa6EA00678F435Ae3e845541EBb2Db0a1e8fF',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x26690F9f17FdC26D419371315bc17950a0FC90eD',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'KAVA/USD',
          dapiNameHash: '0xe8a1adc2c39e0913b30761ffc9d563d42c3ec7829c2584fa024d23660e8adcb6',
          proxyAddress: '0xCDd2231400dfC719205b90FC2D69106d376F9656',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'BTC/USD',
          dapiNameHash: '0x4291cd9e354c309a63b4a41d0de370e9494d5d59a306af07636abaf68159e043',
          proxyAddress: '0xe5Cf15fED24942E656dBF75165aF1851C89F21B5',
          oev: { enabled: false },
        },
      ],
    },
    year: 2023,
    links: {
      dapp: 'https://kinetix.finance/',
      website: 'https://kinetix.finance/',
      docs: 'https://docs.kinetix.finance/',
      explorer: 'https://kavascan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/KinetixFi' },
        { label: 'discord', url: 'https://discord.com/invite/kinetixfi' },
        { label: 'github', url: 'https://github.com/kinetixfi/' },
        { label: 'telegram', url: 'https://t.me/KinetixFi' },
      ],
    },
  },
  {
    name: 'MYSO Finance',
    tagline: 'We specialize in custom DeFi loan solutions and covered call lending',
    description:
      'MYSO Finance is a decentralized peer-to-peer lending protocol that allows users to borrow and lend with any ERC20 token. /n/nBorrowers have access to fixed, transparent terms with no risk of price-based liquidations. On the other side, lenders can create loan offers at scale and customize loan terms to their personal specifications. /n/nMYSO specializes in tailor-made DeFi loan solutions along with covered call lending, which provides alternative yield enhancement opportunities to earn upfront cash with full flexibility in setting loan duration and upside cap. ',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704422016906_avatar_01.jpg',
      cover:
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704422016907_PHOTO-2023-07-23-02-42-58%20Cropped.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704422017425_Screenshot%202024-01-04%20163955.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704422017471_Screenshot%202024-01-04%20164033.png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['1', '42161', '5000'],
    proxies: {
      '5000': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x009E9B1eec955E9Fe7FE64f80aE868e661cb4729',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'MNT/USD',
          dapiNameHash: '0xa9aac29787fcbd94a60c432bcb0323ec8100ca21cade393b6a0acc3e7368b7e5',
          proxyAddress: '0x33d6e2AF008Eefa4c50a4167D245C77C9FEe00f0',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'WBTC/USD',
          dapiNameHash: '0x788a83d3185172684a06bc2d96ea3e98728e0e87b759e866757989dcfe63b4f4',
          proxyAddress: '0x0f1CB652F56b497C7ed6bdf61C09724D1682cB3D',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDC/USD',
          dapiNameHash: '0x228ffa116d7cb33d822dc4f1ba986ee7ecfa6b6b570aab9663f30f560df7f880',
          proxyAddress: '0x9F8663dD5A0F30a41B774de46128849FE2364C17',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDT/USD',
          dapiNameHash: '0x48ddbf100a94d2af942f3f3b525fe385c1ac3c8020c9d90aecd487f72adcaf3d',
          proxyAddress: '0x3Adac52054a03A1a9F0DC4FFbcfBBD38eA99EF7E',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'mETH/ETH Exchange Rate',
          dapiNameHash: '0xc4a2854b0815f87a4b90e3bbfd85b129a583a8d214cc34608b958d6ba0f96545',
          proxyAddress: '0xF55faBDf4C4F19D48d12A94209c735ca5AC43c78',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://myso.finance/',
      dapp: 'https://app.myso.finance/',
      docs: 'https://myso-finance.gitbook.io/myso-v2-docs',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/MYSOFinance' },
        { label: 'discord', url: 'https://discord.gg/hBQCZ52bvq' },
        { label: 'github', url: 'https://github.com/mysofinance' },
        { label: 'telegram', url: 'https://t.me/MysoFinance' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Lendle',
    tagline: '#1 Decentralized, non-custodial lending and borrowing market on Mantle',
    description:
      'At Lendle, we firmly believe that lending and borrowing protocols are the backbone of a well-functioning DeFi ecosystem. These protocols empower users to make the most of their cryptocurrencies, allowing them to engage in complex financial strategies and acting as a catalyst that promotes further participation within DeFi./nIn line with this vision, we are committed to bringing a new wave of innovation to the lending and borrowing landscape. Our goal is to develop a new generation of DeFi features, building on the foundation laid by giants like Aave and Geist./nWe believe that by providing users with a wider range of options for lending and borrowing, we can help to further incentivize the growth of DeFi, building a more resilient and sustainable financial system that benefits everyone.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704450901672_lendle-logomark.png',
      cover:
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704450901672_medium%20lendle%20%281%29%20%281%29.jpg',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704450901680_screenshot%20new%20lendle%201.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1704450901695_screenshot%20new%20lendle%202.png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['5000'],
    proxies: {
      '5000': [
        {
          proxyType: 'dapi',
          feedName: 'mETH/ETH Exchange Rate',
          dapiNameHash: '0xc4a2854b0815f87a4b90e3bbfd85b129a583a8d214cc34608b958d6ba0f96545',
          proxyAddress: '0xF55faBDf4C4F19D48d12A94209c735ca5AC43c78',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://lendle.xyz/',
      dapp: 'https://app.lendle.xyz/',
      docs: 'https://docs.lendle.xyz/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/lendlexyz' },
        { label: 'discord', url: 'https://discord.gg/WwewFTW6H2' },
      ],
    },
    year: 2023,
  },
  {
    name: 'MantisSwap',
    tagline: 'Next Generation Stableswap',
    description:
      'Mantissa Finance is a new decentralised finance (DeFi) primitive on the Polygon blockchain that aims to redefine the trading experience for pegged assets./nMantissa introduces MantisSwap, a single-sided AMM for trading pegged assets that is designed to maximise capital efficiency and minimise principal losses for liquidity providers. Through its innovative design, MantisSwap will push the boundaries of traditional AMMs with greater capital efficiency, lower trading fees, principal protection for liquidity providers and a super intuitive UI to fuel DeFi growth and adoption./n/nMantisSwap will allow seamless trades of different stablecoins and pegged assets while offering lower slippage, cheaper gas and safer trades. With the majority of liquidity within a DeFi ecosystem flowing through its native DEX, we believe our ecosystem-centric DEX will become the liquidity hub on Polygon and the premier destination for trading pegged assets./n/nMantisSwap have partnered with API3 to get the latest price feeds for all the tokens in our protocol. These prices will always be consulted before a swap occurs to predict depeg risks.',
    status: 'inactive',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201166_logo.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201167_banner.jpg',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201195_screenshot1.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201247_screenshot2.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201259_screenshot3.png',
      ],
    },
    categories: ['defi', 'dex'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'dapi',
          feedName: 'USDC/USD',
          dapiNameHash: '0x228ffa116d7cb33d822dc4f1ba986ee7ecfa6b6b570aab9663f30f560df7f880',
          proxyAddress: '0x8DF7d919Fe9e866259BB4D135922c5Bd96AF6A27',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDT/USD',
          dapiNameHash: '0x48ddbf100a94d2af942f3f3b525fe385c1ac3c8020c9d90aecd487f72adcaf3d',
          proxyAddress: '0xF63Fa6EA00678F435Ae3e845541EBb2Db0a1e8fF',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'DAI/USD',
          dapiNameHash: '0x9eaf6889d5df94e769098eb3119c7ad9a8f301b58296c06cb75b2859c6f35557',
          proxyAddress: '0x6538D9c4b12b5E5E209917D29C097465Ba8EFA02',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://mantissa.finance/',
      dapp: 'https://app.mantissa.finance/',
      docs: 'https://docs.mantissa.finance/',
      explorer: 'https://zkevm.polygonscan.com/address/0x12d41b6DF938C739F00c392575e3FD9292d98215',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/MantisSwap' },
        { label: 'discord', url: 'https://t.co/duyLdUi3fj' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Mean Finance',
    tagline: 'Providing you the best tools to invest, diversify and grow',
    description:
      'Mean Finance aims to be the go-to platform for decentralized investment tools, fostering responsible and diversified exposure to the emerging crypto asset thesis. We prioritize diversification and prudence in our approach, simplifying users investment journey into the future of finance.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700045302_PFP%20%283%29.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700045302_Portada%20con%20logo.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047068_photo_2023-08-10_16-20-11.jpg',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047075_f7cfa71f71e3b6adecbf1f1104759e4d.jpg',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047152_06883394a3a5b56c55965d778db2e02c.jpg',
      ],
    },
    categories: ['defi', 'dex', 'infrastructure'],
    productType: 'datafeed',
    chains: ['42161', '10', '137', '56', '1', '100'],
    proxies: {
      '137': [
        {
          proxyType: 'dapi',
          feedName: 'LDO/USD',
          dapiNameHash: '0x4495bcb7091356505efac7d5326d6565b528bc2a3ec4ecb6543ff13ee2334dc4',
          proxyAddress: '0x774F0C833ceaacA9b472771FfBE3ada4d6805709',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'STG/USD',
          dapiNameHash: '0xfacb6a0dc0f94e3844f1559bc9215b88ffb2e91503135ae9eb26497e93041be7',
          proxyAddress: '0x7972cFBa470eF69062A3C58d9BfAfe68c09Fb4F0',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://mean.finance',
      dapp: 'https://mean.finance',
      docs: 'https://docs.mean.finance',
      explorer: 'https://etherscan.io/address/0xA5AdC5484f9997fBF7D405b9AA62A7d88883C345',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/mean_fi' },
        { label: 'discord', url: 'https://discord.mean.finance' },
        { label: 'github', url: 'https://github.com/mean-finance' },
      ],
    },
    year: 2021,
  },
  {
    name: 'Quickswap-Perps',
    tagline: 'cutting-edge decentralized Perpetual Exchange on Polygon zkEVM',
    description:
      "QuickPerps is QuickSwap's decentralized Perpetual Exchange built on Polygon zkEVM, leveraging Polygon's newest and promising infrastructure to provide unparalleled security, powerful scalability, and much more.",
    status: 'active',
    chains: ['1101'],
    categories: ['defi', 'dex'],
    productType: 'datafeed',
    proxies: {
      '1101': [
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x4385954e058fbe6b6a744f32a4f89d67aad099f8fb8b23e7ea8dd366ae88151d',
          proxyAddress: '0x94C10721Bc55E81E40E5Db92060335374F32546b',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0xd888b92f9d71afedd0a012622c0d1d5368fc0dc0ff1d30bb16266afcd49c2c17',
          proxyAddress: '0xDF164A1A1f51460953B3839E9e5d7EdceE0EB0D9',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'MATIC/USD',
          datafeedId: '0x7a32de86e03383b758e3c7e00681b6c762e0cef235676a2593e4aef83c1b41b2',
          proxyAddress: '0x9d642fD27Ab7baa66Fba30BCBD67bd31ab5578d5',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDC/USD',
          datafeedId: '0x811b12b44adf2e6ad84dc3ec577cc6c0b15e76e400764139330ce3fc58043d26',
          proxyAddress: '0x2a87813e167D8365001C99Ee8C220500767E99f0',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDT/USD',
          datafeedId: '0xff96db9f5eaf10f5425e58ceb282308ab8099ef73c01bc3c6a094f84fa0aa53d',
          proxyAddress: '0x92860DD9335BE57c789CB95237Fd67f1c5B21c5a',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'DAI/USD',
          datafeedId: '0x07bd5ed37a946e4c54f1efb26f013245406fbf760ded5db962a9ce054570aa28',
          proxyAddress: '0x12102D07010c86fF8E7Ba6D48894c7B9039Db358',
          oev: { enabled: false },
        },
      ],
    },
    year: 2023,
    images: {
      logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F60594080-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FLyYNl56ITrQ2UqSmR7BQ%252Ficon%252F5hGnJPwDbseRBRVMsz9u%252FGroup%252025981.png%3Falt%3Dmedia%26token%3Decb076c5-0898-48f9-a284-fbb533f65c31',
      cover:
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FMXO3nwBjR8YjOZw3OMrd%2Fimage.png?alt=media&token=3db1e3e6-4d4b-4b92-8247-bd0bb94ba97f',
      screenshots: [
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FbZrkyTv9pwJMd2E9n0Hg%2FGroup%201321314307.png?alt=media&token=8d578c4d-36cc-4895-bdbf-4e2de91e9fa4',
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FhCg6BqBlbk7SsuwWWqeW%2FGroup%201321314307%20(2).png?alt=media&token=77d64f78-4c87-4284-a0ee-88cf83d06653',
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FQOOpYdnw0JssURphHH8V%2Fimage.png?alt=media&token=c009b7a3-5efa-4b75-a7a5-00a85e672b51',
      ],
    },
    links: {
      dapp: 'https://perps.quickswap.exchange/',
      website: 'https://perps.quickswap.exchange/',
      docs: 'https://perps-docs.quickswap.exchange/',
      explorer: 'https://zkevm.polygonscan.com/address/0x99B31498B0a1Dae01fc3433e3Cb60F095340935C',
      socials: [
        { label: 'Reddit', url: 'https://www.reddit.com/r/QuickSwap/' },
        { label: 'Twitter', url: 'https://twitter.com/QuickswapDEX' },
        { label: 'Telegram', url: 'https://t.me/QuickSwapDEX' },
        { label: 'Youtube', url: 'https://www.youtube.com/channel/UCrPlF-DBwD-UzLFDzJ4Z5Fw' },
        { label: 'Discord', url: 'https://discord.com/invite/dSMd7AFH36' },
      ],
    },
  },
  {
    name: 'Shrike Perps',
    tagline: 'Maximize your gains with 50x leverage on Shrike!',
    description:
      'Trade for maximum gains on zkEVM with Shrike! $3,000 up for grabs in our contests, so make sure you get on the leaderboard! Or provide liquidity with SHLP and win like the house always does through real ETH rewards from trading fees!',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/shrike.7fd3441e.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416706_dovish-branded-cover.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416714_shrikesc2.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416743_shrikeSC.png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x4385954e058fbe6b6a744f32a4f89d67aad099f8fb8b23e7ea8dd366ae88151d',
          proxyAddress: '0x42e7638365215B18E969c7c71cAfd98fc035f3dc',
          oev: { enabled: true, beneficiary: '0xa5964a9CF2f8ADDF72b3e9Dd417b4E950Cd34e99' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0xd888b92f9d71afedd0a012622c0d1d5368fc0dc0ff1d30bb16266afcd49c2c17',
          proxyAddress: '0xDF164A1A1f51460953B3839E9e5d7EdceE0EB0D9',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'MATIC/USD',
          datafeedId: '0x7a32de86e03383b758e3c7e00681b6c762e0cef235676a2593e4aef83c1b41b2',
          proxyAddress: '0x9d642fD27Ab7baa66Fba30BCBD67bd31ab5578d5',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDC/USD',
          datafeedId: '0x811b12b44adf2e6ad84dc3ec577cc6c0b15e76e400764139330ce3fc58043d26',
          proxyAddress: '0x2a87813e167D8365001C99Ee8C220500767E99f0',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://shrike.dovish.finance/',
      dapp: 'https://shrike.dovish.finance/',
      docs: 'https://dovish.gitbook.io/shrike/',
      explorer: 'https://zkevm.polygonscan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/DovishFi' },
        { label: 'discord', url: 'https://discord.com/invite/Up2SMcfthg' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Tropykus Finance',
    tagline: 'Earn interest and open fair credit lines for latinamericans.',
    description:
      'Tropykus enables users and companies to leverage their savings using ETH and USDC, generating passive interest. Additionally, it provides the opportunity to open credit lines for members or employees in an easy and secure way through an intuitive interface that guides both savvy users and beginners alike.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607644_Logo%20Tropykus%20cuadrado.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607644_Banner%20API3.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607660_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.21.21%20a.m..png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607887_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.28.11%20a.m..png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035608060_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.29.53%20a.m..png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x26690F9f17FdC26D419371315bc17950a0FC90eD',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'WBTC/USD',
          dapiNameHash: '0x788a83d3185172684a06bc2d96ea3e98728e0e87b759e866757989dcfe63b4f4',
          proxyAddress: '0x28Cac6604A8f2471E19c8863E8AfB163aB60186a',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://tropykus.com/',
      dapp: 'https://zk.app.tropykus.com/',
      docs: 'https://github.com/Tropykus/protocol-rsk',
      explorer: 'https://zkevm.polygonscan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/tropykus' },
        { label: 'telegram', url: 'https://t.me/tropykus' },
      ],
    },
    year: 2023,
  },
];
