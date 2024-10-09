const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const postcss = require('./postcss.config.cjs');


// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});



