import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [solidPlugin(), VitePWA()],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
})
