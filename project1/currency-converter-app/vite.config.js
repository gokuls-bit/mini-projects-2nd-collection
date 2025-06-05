import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Setting the target to 'es2020' ensures that modern JavaScript features
    // like 'import.meta' are correctly supported by the build process.
    // This should resolve the "empty-import-meta" warning.
    target: 'es2020',
  },
});

