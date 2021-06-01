import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        createVuePlugin(),
        Components({
            dirs: [],
            resolvers: [
                VuetifyResolver(),
            ],
        }),
    ],
    build: {
        sourcemap: true,
    },
});
