import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},

		fontFamily: {
			sans: ['Noto Sans', 'sans-serif', 'Noto Color Emoji'],
			serif: ['Noto Serif', 'serif', 'Noto Color Emoji'],
			mono: ['Noto Sans Mono', 'monospace', 'Noto Color Emoji']
		}
	},

	plugins: [typography]
} as Config;