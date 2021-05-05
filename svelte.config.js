/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

import vercel from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: vercel()
	}
};