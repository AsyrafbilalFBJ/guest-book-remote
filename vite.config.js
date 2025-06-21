import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      remotes: {
          host_app: "http://localhost:8001/assets/remoteEntry.js",
      },
      // Modules to expose
      exposes: {
          './Button': './src/components/Button.vue',
          './Login': './src/components/Login.vue',
          './Header': './src/components/Header.vue',
          './Messages': './src/components/Messages.vue',
          './AddMessage': './src/components/AddMessage.vue',
          './AddGuest': './src/components/AddGuest.vue',
          './store': './src/store/index.js',
          './axios': './src/axios/index.js',
      },
      shared: ['vue','vuex','axios']
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
