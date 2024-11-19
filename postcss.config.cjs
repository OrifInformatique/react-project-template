//const tailwindcss = require('tailwindcss');
const unoCSS = require('@unocss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		unoCSS(), autoprefixer,
	],
};
