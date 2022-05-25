import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import styleImport from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    plugins: [
        reactRefresh(),
        tsconfigPaths(),
    ],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' }
        ]
    },
    server: {
        port: 3333,
        open: true
    },
})
