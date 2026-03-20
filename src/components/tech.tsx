import { Image } from '@chakra-ui/react'
import { ToggleTip } from './ui/toggle-tip'

type TechProps = {
	image: string
	caption: string
	width?: string | number
	height?: string | number
}

export default function Tech({ image, caption, width = '60px', height = '60px' }: TechProps) {
	return (
		<ToggleTip content={caption}>
			<Image src={image} alt={caption} objectFit={'fill'} width={width} height={height} cursor={'pointer'} />
		</ToggleTip>
	)
}
