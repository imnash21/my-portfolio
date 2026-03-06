import { Box, type BoxProps } from '@chakra-ui/react'

type SectionProps = BoxProps

export default function Section(props: SectionProps) {
	return (
		<Box
			as={'section'}
			scrollMarginTop={{ lgDown: '8' }}
			paddingBlock={{ base: '12', lg: '20' }}
			width={'full'}
			{...props}
		/>
	)
}
