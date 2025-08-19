// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://vinczematyas.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Inter",
                cssVariable: "--font-inter"
            },
            {
                provider: fontProviders.google(),
                name: "Cascadia Mono",
                cssVariable: "--font-cascadia-mono"
            }
        ]
    },
});

