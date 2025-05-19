import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/publications/' }),
    schema: z.object({
        title: z.string(),
        mainTitlePart: z.string(),
        secondaryTitlePart: z.string(),
        authors: z.string(),
        etal: z.boolean(),
        authorLinks: z.string(),
        authorAffiliations: z.string(),
        authorAffiliationsMap: z.string(),
        externalAffiliatedLinks: z.string(),
        localAffiliatedLinks: z.string(),
        conf: z.string(),
        confShort: z.string(),
        date: z.date(),
        website: z.string(),
        draft: z.boolean(),
    }),
});

export const collections = { publications };

