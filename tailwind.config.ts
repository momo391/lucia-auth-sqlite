import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Overpass Variable"]
			}
		}
	},

	plugins: []
} as Config;
