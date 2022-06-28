import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA as vitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  devOptions: { enabled: true },
  includeAssets: ['robots.txt', '*.png', '*.svg', '*.webp'],
  manifest: {
    name: `lmmmmmm's Nas`,
    short_name: `lz's Nas`,
    background_color: '#f5f5f5',
    display: 'fullscreen',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
