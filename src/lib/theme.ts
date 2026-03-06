import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
	theme: {
		tokens: {
			colors: {
				primary: { value: 'oklch(20.8% 0.042 265.755)' },
				secondary: { value: 'oklch(27.9% 0.041 260.031)' },
				foreground: { value: 'oklch(86.9% 0.022 252.894)' },
				foregroundDimmed: { value: 'oklch(70.4% 0.04 256.788)' },
				background: { value: 'oklch(96.8% 0.007 247.896)' },
			},
		},
	},
})

export default createSystem(defaultConfig, customConfig)
