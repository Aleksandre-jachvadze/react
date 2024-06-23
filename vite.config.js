import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Signup-Form-React/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
    modules: {
      scopeBehaviour: 'local',
    },
  },
});
