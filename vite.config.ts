import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      data: resolve(__dirname, 'src/data'),
    },
  },
});
