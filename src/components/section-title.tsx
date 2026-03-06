import { Heading, type HeadingProps } from '@chakra-ui/react'

type SectionTitleProps = HeadingProps

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<Heading
			size={'3xl'}
			fontWeight={'bold'}
			textTransform={'uppercase'}
			marginBlockEnd={{ base: '12', lg: '14' }}
			color={'secondary'}
			{...props}
		/>
	)
}
