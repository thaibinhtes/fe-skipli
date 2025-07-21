// import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// ----------------------------------------------------------------------

const PORT = 3039;

export default defineConfig({
  plugins: [
    react(),
    // checker({
    //   typescript: true,
    //   eslint: {
    //     useFlatConfig: true,
    //     lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx,scss}"',
    //     dev: { logLevel: ['error'] },
    //   },
    //   overlay: {
    //     position: 'tl',
    //     initialIsOpen: false,
    //   },
    // }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/styles/_color.scss" as *;
        `
      }
    }
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
});
