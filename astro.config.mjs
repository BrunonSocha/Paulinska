// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const REPO_NAME = 'Paulinska'

// https://astro.build/config
export default defineConfig({
    base: '/{$REPO_NAME}/',
    site: 'https://brunonsocha.github.io/${REPO_NAME}',
    vite: {
        plugins: [tailwindcss()],
    },
});
