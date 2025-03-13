import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/login.html'),
        register: resolve(__dirname, 'src/register.html'),
        forgotpassword: resolve(__dirname, 'src/forgot-password.html'),
        budget: resolve(__dirname, 'src/budget.html'),
        resetemail: resolve(__dirname, 'src/reset-email.html'),
        profile: resolve(__dirname, 'src/profile.html'),
        savedprofile: resolve(__dirname, 'src/savedprofile.html'),
      },
    }
  },
});
