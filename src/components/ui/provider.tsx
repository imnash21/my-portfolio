'use client'

import { ChakraProvider, type SystemContext } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export type ProviderProps = ColorModeProviderProps & {
	theme: SystemContext
}

export function Provider({ theme, ...rest }: ProviderProps) {
	return (
		<ChakraProvider value={theme}>
			<ColorModeProvider {...rest} />
		</ChakraProvider>
	)
}
