import { defineConfig } from 'astro/config';

import { invoiceInjectionPlugin } from './src/plugins/invoice-injection-plugin.mjs';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    markdown: {
        remarkPlugins: [invoiceInjectionPlugin]
    }
});
