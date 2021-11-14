// vite.config.json
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';
import env from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [env(), reactRefresh(), macrosPlugin()],
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
});
