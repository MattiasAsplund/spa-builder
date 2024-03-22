import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    // Add this Vite configuration
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8099',
				changeOrigin: true,
				secure: false
			},
		}
	}
});
