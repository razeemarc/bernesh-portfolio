
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Professional color palette
				professional: {
					slate: {
						50: 'hsl(210, 40%, 98%)',
						100: 'hsl(210, 40%, 96%)',
						200: 'hsl(210, 25%, 88%)',
						300: 'hsl(214, 20%, 69%)',
						400: 'hsl(215, 20%, 65%)',
						500: 'hsl(215, 16%, 47%)',
						600: 'hsl(215, 19%, 35%)',
						700: 'hsl(215, 25%, 27%)',
						800: 'hsl(217, 33%, 17%)',
						900: 'hsl(222, 47%, 11%)'
					},
					blue: {
						50: 'hsl(214, 100%, 97%)',
						100: 'hsl(214, 95%, 93%)',
						200: 'hsl(213, 97%, 87%)',
						300: 'hsl(212, 96%, 78%)',
						400: 'hsl(213, 94%, 68%)',
						500: 'hsl(214, 100%, 65%)',
						600: 'hsl(221, 83%, 53%)',
						700: 'hsl(224, 76%, 48%)',
						800: 'hsl(226, 71%, 40%)',
						900: 'hsl(224, 64%, 33%)'
					},
					accent: {
						cyan: 'hsl(189, 94%, 43%)',
						teal: 'hsl(170, 76%, 42%)',
						emerald: 'hsl(160, 84%, 39%)',
						amber: 'hsl(43, 96%, 56%)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsla(214, 100%, 65%, 0.3)' },
					'50%': { boxShadow: '0 0 20px hsla(214, 100%, 65%, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
