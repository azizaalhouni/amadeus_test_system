// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
//     plugins: [sveltekit()],
// });
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    csp: {
      mode: 'hash',
      directives: { 'script-src': ['self'] }
    }
  },

  preprocess: [
    preprocess({
    })
  ]
};

export default config;

// import adapter from '@sveltejs/adapter-auto';
// import sveltePreprocess from 'svelte-preprocess';

// export default {
//   preprocess: sveltePreprocess(),
//   kit: {
//     adapter: adapter(),
//     alias: {
//       $components: 'src/lib/components'
//     }
//   }
// };
