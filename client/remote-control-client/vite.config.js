import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({ 
    // registerType: 'a',
    devOptions:{
      enabled:false
    },
    manifest: {
      name: 'IOT ESP32 Remote Control',
      short_name: 'Remote Control IOT',
      description: 'ESP32 IOT',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/src/assets/remote-control_512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/src/assets/remote-control_192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }





 })]
})
