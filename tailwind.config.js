// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
			extend: {
				fontFamily: {
					sans: [
						'Roboto'
					],
				},
				typography: (theme) => ({
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
							h4:{
								marginTop:0
							},
							img:{
								margin:0
							},
							a: {
								color: theme('colors.gray.700'),
								textDecoration: 'none',
								fontWeight:300,
								'&:hover': {
									color: `${theme('colors.blue.500')} !important`,
								},
								'&[aria-current]':{
									fontWeight:'700 !important',
								}
							},
							'article':{
								'a':{
									color: theme('colors.blue.500'),
								}

							}
						},
					},
				}),
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
		},
  plugins: [
		require('@tailwindcss/typography'),
	],
};
