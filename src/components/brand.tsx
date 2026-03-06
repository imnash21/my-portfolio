import { Text } from '@chakra-ui/react'

export default function Brand() {
	return (
		<Text as={'div'} color={'foreground'} fontWeight={'semibold'}>
			Nasief{' '}
			<Text as={'span'} color={'foregroundDimmed'}>
				M. Marhala
			</Text>
		</Text>
	)
}
