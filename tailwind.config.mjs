/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1200px'
  	},
  	extend: {
  		colors: {
  			bodyBg: 'var(--bodyBg)',
  			bodyBg1: 'var(--bodyBg1)',
  			whiteColor: 'var(--whiteColor)',
  			whitegrey: 'var(--whitegrey)',
  			whitegrey1: 'var(--whitegrey1)',
  			whitegrey2: 'var(--whitegrey2)',
  			whitegrey3: 'var(--whitegrey3)',
  			headingColor: 'var(--headingColor)',
  			contentColor: 'var(--contentColor)',
  			contentColor2: 'var(--contentColor2)',
  			primaryColor: 'var(--primaryColor)',
  			secondaryColor: 'var(--secondaryColor)',
  			secondaryColor2: 'var(--secondaryColor2)',
  			secondaryColor3: 'var(--secondaryColor3)',
  			blackColor: 'var(--blackColor)',
  			blackColor2: 'var(--blackColor2)',
  			lightGrey: 'var(--lightGrey)',
  			lightGrey2: 'var(--lightGrey2)',
  			lightGrey3: 'var(--lightGrey3)',
  			lightGrey4: 'var(--lightGrey4)',
  			lightGrey5: 'var(--lightGrey5)',
  			lightGrey6: 'var(--lightGrey6)',
  			lightGrey7: 'var(--lightGrey7)',
  			lightGrey8: 'var(--lightGrey8)',
  			lightGrey9: 'var(--lightGrey9)',
  			lightGrey11: 'var(--lightGrey11)',
  			lightGrey12: 'var(--lightGrey12)',
  			greenColor: 'var(--greenColor)',
  			greenColor2: 'var(--greenColor2)',
  			greenColor3: 'var(--greenColor3)',
  			orange: 'var(--orange)',
  			borderColor: 'var(--borderColor)',
  			borderColor1: 'var(--borderColor1)',
  			borderColor2: 'var(--borderColor2)',
  			borderColor3: 'var(--borderColor3)',
  			borderColor4: 'var(--borderColor4)',
  			darkdeep1: 'var(--darkdeep1)',
  			darkdeep2: 'var(--darkdeep2)',
  			darkdeep3: 'var(--darkdeep3)',
  			darkdeep4: 'var(--darkdeep4)',
  			darkdeep5: 'var(--darkdeep5)',
  			darkdeep6: 'var(--darkdeep6)',
  			darkdeep7: 'var(--darkdeep7)',
  			indigo: 'var(--indigo)',
  			deepgreen: 'var(--deepgreen)',
  			deepblue: 'var(--deepblue)',
  			deepred: 'var(--deepred)',
  			skycolor: 'var(--skycolor)',
  			yellow: 'var(--yellow)',
  			yellow1: 'var(--yellow1)',
  			blue: 'var(--blue)',
  			naveBlue: 'var(--navBlue)',
  			borderRadius: 'var(--borderRadius)',
  			borderRadius2: 'var(--borderRadius2)',
  			borderRadius3: 'var(--borderRadius3)',
  			transition: 'var(--transition)',
  			bodyFont: 'var(--bodyFont)',
  			headingFont: 'var(--headingFont)',
  			contentFont: 'var(--contentFont)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'spinLoader': 'spinLoader 2s linear infinite'
  		},
  		keyframes: {
  			spinLoader: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
