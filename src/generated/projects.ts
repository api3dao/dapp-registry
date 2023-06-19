// ===========================================================================
// DO NOT EDIT THIS FILE MANUALLY!
//
// The contents have been added automatically.
// See: scripts/generate-projects.ts for more information
// ===========================================================================

import { Project } from '../types';

export const PROJECTS: Project[] = [
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
          proxyType: 'datafeed Proxy',
          feedName: 'ETH/USD',
          datafeedId: '0x4385954e058fbe6b6a744f32a4f89d67aad099f8fb8b23e7ea8dd366ae88151d',
          proxyAddress: '0x94C10721Bc55E81E40E5Db92060335374F32546b',
        },
        {
          proxyType: 'datafeed Proxy',
          feedName: 'BTC/USD',
          datafeedId: '0xd888b92f9d71afedd0a012622c0d1d5368fc0dc0ff1d30bb16266afcd49c2c17',
          proxyAddress: '0xDF164A1A1f51460953B3839E9e5d7EdceE0EB0D9',
        },
        {
          proxyType: 'datafeed Proxy',
          feedName: 'MATIC/USD',
          datafeedId: '0x7a32de86e03383b758e3c7e00681b6c762e0cef235676a2593e4aef83c1b41b2',
          proxyAddress: '0x9d642fD27Ab7baa66Fba30BCBD67bd31ab5578d5',
        },
        {
          proxyType: 'datafeed Proxy',
          feedName: 'USDC/USD',
          datafeedId: '0x811b12b44adf2e6ad84dc3ec577cc6c0b15e76e400764139330ce3fc58043d26',
          proxyAddress: '0x2a87813e167D8365001C99Ee8C220500767E99f0',
        },
        {
          proxyType: 'datafeed Proxy',
          feedName: 'USDT/USD',
          datafeedId: '0xff96db9f5eaf10f5425e58ceb282308ab8099ef73c01bc3c6a094f84fa0aa53d',
          proxyAddress: '0x92860DD9335BE57c789CB95237Fd67f1c5B21c5a',
        },
        {
          proxyType: 'datafeed Proxy',
          feedName: 'DAI/USD',
          datafeedId: '0x07bd5ed37a946e4c54f1efb26f013245406fbf760ded5db962a9ce054570aa28',
          proxyAddress: '0x12102D07010c86fF8E7Ba6D48894c7B9039Db358',
        },
      ],
    },
    year: 2023,
    images: {
      logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F60594080-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FLyYNl56ITrQ2UqSmR7BQ%252Ficon%252F5hGnJPwDbseRBRVMsz9u%252FGroup%252025981.png%3Falt%3Dmedia%26token%3Decb076c5-0898-48f9-a284-fbb533f65c31',
      cover:
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FMXO3nwBjR8YjOZw3OMrd%2Fimage.png?alt=media&token=3db1e3e6-4d4b-4b92-8247-bd0bb94ba97f',
      banner:
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
    name: 'sample',
    tagline: 'sample tagline',
    description: 'sample description',
    status: 'inactive',
    chains: ['1', '137'],
    categories: ['defi'],
    productType: 'datafeed',
    proxies: {
      '1': [
        { proxyType: 'dapi', feedName: 'ETH/USD', dapiName: 'ETH/USD', proxyAddress: '0x', oev: { enabled: false } },
        { proxyType: 'datafeedId', feedName: 'ETH/USD', datafeedId: '0x', proxyAddress: '0x', oev: { enabled: false } },
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiName: 'ETH/USD',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
      ],
      '137': [
        {
          proxyType: 'dapi',
          feedName: 'BTC/USD',
          dapiName: 'BTC/USD',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0x',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
      ],
    },
    year: 2020,
    images: {
      logo: 'https://-.com/images/logo.png',
      cover: 'https://-.com/images/cover.png',
      banner: 'https://-.com/images/banner.png',
      screenshots: [
        'https://-.com/images/screenshot1.png',
        'https://-.com/images/screenshot2.png',
        'https://-.com/images/screenshot3.png',
      ],
    },
    links: {
      dapp: 'https://app.-.com/',
      website: 'https://-.com/',
      docs: 'https://docs.-.com/',
      explorer: 'https://etherscan.io/',
      socials: [
        { label: 'Reddit', url: 'https://www.reddit.com/r/-/' },
        { label: 'Twitter', url: 'https://twitter.com/-' },
        { label: 'Telegram', url: 'https://t.me/-' },
        { label: 'Youtube', url: 'https://www.youtube.com/channel/' },
        { label: 'Discord', url: 'https://discord.gg/' },
      ],
    },
  },
];
