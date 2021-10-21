// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
		},
		typography:(theme) => ({
			DEFAULT: {
				css: {
					color: theme('colors.gray.700'),
					code: {
						background:theme('colors.gray.200'),
						padding:theme('spacing.1'),
						borderRadius:'2px',
						color:theme('colors.gray.700'),
						'&::before':{
							content:'""!important'
						},
						'&::after':{
							content:'""!important'
						}
					},
					a: {
						color: theme('colors.gray.700'),
						textDecoration: 'none',
						fontWeight:300,
						'&:hover': {
							color: theme('colors.blue.500'),
						},
						'&[aria-current]':{
							fontWeight:700,
						}
					},
					'article a':{
						color: theme('colors.blue.500'),
					}
				},
			},
		})
	},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/typography'),
	],
};
