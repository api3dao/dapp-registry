import { z } from 'zod';

// TODO: Fetch this from @api3/chains
const chainsSchema = z.enum(["1", "137", "56", "250", "1101"]);

const statusSchema = z.enum(['active', 'inactive', 'deprecated']);

const productTypeSchema = z.enum(['datafeed', 'qrng']);

const categorySchema = z.enum(['defi', 'dex', 'nft', 'gaming', 'dao', 'oracle', 'wallet', 'infrastructure', 'other']);

const dapiProxySchema = z.object({
    proxyType: z.enum(['dAPI Proxy']),
    feedName: z.string(),
    dapiName: z.string(),
    proxyAddress: z.string(),
});

const datafeedProxySchema = z.object({
    proxyType: z.enum(['datafeed Proxy']),
    feedName: z.string(),
    datafeedId: z.string(),
    proxyAddress: z.string(),
});

const oevDapiProxySchema = z.object({
    proxyType: z.enum(['OEV dAPI Proxy']),
    feedName: z.string(),
    dapiName: z.string(),
    proxyAddress: z.string(),
    oevBeneficiary: z.string(),
});

const oevDatafeedProxySchema = z.object({
    proxyType: z.enum(['OEV datafeed Proxy']),
    feedName: z.string(),
    datafeedId: z.string(),
    proxyAddress: z.string(),
    oevBeneficiary: z.string(),
});

export const projectSchema = z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: statusSchema,
    chains: z.array(chainsSchema),
    categories: z.array(categorySchema),
    productType: productTypeSchema,
    proxies: z.record(chainsSchema, z.array(z.union([dapiProxySchema, datafeedProxySchema, oevDapiProxySchema, oevDatafeedProxySchema]))),
    year: z.number(),
    images: z.object({
        logo: z.string().url(),
        cover: z.string().url(),
        banner: z.string().url(),
        screenshots: z.array(z.string().url()).optional(),
    }),
    links: z.object({
        dapp: z.string().url().optional(),
        website: z.string().url(),
        docs: z.string().url().optional(),
        explorer: z.string().url().optional(),
        socials: z.array(z.object({
            label: z.string(),
            url: z.string().url(),
        })).optional(),
    }),
});
  
export type Project = z.infer<typeof projectSchema>;