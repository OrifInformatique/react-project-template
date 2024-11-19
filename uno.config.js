import {
	defineConfig,
	presetUno,
	presetWind
} from 'unocss';

export default defineConfig({
	content: {
		filesystem: [
			'**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
		],
	},
	presets: [
		presetWind(), // Enable UnoCSS with the Tailwind-like preset
		presetUno(),
	],
	theme: {
		colors: {
			primary: '#005ba9',
			background: '#f4f7fd'
		},

		extend: {
			fontFamily: {
				sans: [
					'system-ui',
					'ui-sans-serif',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'],
			},
		},
	},
	preflights: [
		{
			getCSS: ({ theme }) => `
				body {
					font-family: ${Array.isArray(theme.fontFamily.sans) ? theme.fontFamily.sans.join(', ') : 'system-ui'};
				}
			`,
		},
	],
});
