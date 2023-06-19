import { z } from 'zod';
import { CHAINS } from '@api3/chains';

const chains = CHAINS.map((chain) => chain.id) as [string, ...string[]]; //refer to https://github.com/colinhacks/zod/issues/2376#issuecomment-1526316070
const chainsSchema = z.enum(chains);

const statusSchema = z.enum(['active','beta', 'inactive', 'deprecated']);

const categorySchema = z.enum(['defi', 'dex', 'nft', 'gaming', 'dao', 'oracle', 'wallet', 'infrastructure', 'other']);

const oevEnabledSchema = z.object({
    enabled: z.literal(true),
    beneficiary: z.string(),
});

const oevDisabledSchema = z.object({
    enabled: z.literal(false),
});

const proxySchema = z.object({
    feedName: z.string(),
    proxyAddress: z.string(),
    oev: z.discriminatedUnion(
        'enabled', [
            oevEnabledSchema,
            oevDisabledSchema,
        ]
    )
});

const dapiSchema = z.intersection(
    z.object({proxyType: z.literal('dapi'),dapiName: z.string()}),
    proxySchema
);

const datafeedSchema = z.intersection(
    z.object({proxyType: z.literal('datafeedId'),datafeedId: z.string()}),
    proxySchema
);

const commonProxySchema = z.object({
    productType: z.literal('datafeed'),
    proxies: z.record(chainsSchema, z.array(z.union([dapiSchema, datafeedSchema])))
});

const qrngSchema = z.object({
    productType: z.literal('qrng'),
});

const productSchema = z.discriminatedUnion(
    'productType', [
        commonProxySchema,
        qrngSchema,
    ]
);

export const baseProjectSchema = z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: statusSchema,
    chains: z.array(chainsSchema),
    categories: z.array(categorySchema),
    year: z.number(),
    images: z.object({
        logo: z.string().url(),
        cover: z.string().url(),
        banner: z.string().url(),
        screenshots: z.array(z.string().url()),
    }),
    links: z.object({
        dapp: z.string().url().optional(),
        website: z.string().url().optional(),
        docs: z.string().url().optional(),
        explorer: z.string().url().optional(),
        socials: z.array(z.object({
            label: z.string(),
            url: z.string().url(),
        })).optional(),
    }),
});

export const projectSchema = z.intersection(baseProjectSchema, productSchema);
  
export type Project = z.infer<typeof projectSchema>;