import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter()
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    vitePreprocess(),
  ]
};

export default config;
