const { tailwindcssPlugin } = require('@pantheon-systems/wordpress-kit');


/** @type {import('@pantheon-systems/wordpress-kit').TailwindcssConfig} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), tailwindcssPlugin],
};
