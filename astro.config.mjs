// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    base: 'Paulinska',
    site: 'https://brunonsocha.github.io/Paulinska',
    vite: {
        plugins: [tailwindcss()],
    },
});
