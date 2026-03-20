import { Heading, type HeadingProps } from '@chakra-ui/react'

type SectionTitleProps = HeadingProps

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<Heading
			size={'4xl'}
			fontWeight={'bold'}
			textTransform={'uppercase'}
			marginBlockEnd={{ base: '12', lg: '20' }}
			color={'secondary'}
			{...props}
		/>
	)
}
