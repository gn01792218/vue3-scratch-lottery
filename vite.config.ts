import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue'],
      dts:'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue'],
      dirs:['src/commonComponents'],  //要從哪個資料夾底下自動import元件，預設是components
      include: [/\.vue$/,/\.vue\?vue/],
      dts:"src/auto-components.d.ts",
    })
  ],
  base: './',
  define:{
    'process.env':{}
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  }
})
