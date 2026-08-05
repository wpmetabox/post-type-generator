import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig( ( { mode } ) => ( {
	base: mode === 'development' ? '/' : '/post-type-generator/',
	plugins: [ react() ],
	build: {
		outDir: 'build',
		sourcemap: false,
		emptyOutDir: true,
	},
	server: {
		open: false,
	},
} ) );
