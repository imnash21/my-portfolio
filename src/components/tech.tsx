import { Image } from '@chakra-ui/react'
import { ToggleTip } from './ui/toggle-tip'

type TechProps = {
	image: string
	caption: string
	width?: string | number
	height?: string | number
}

export default function Tech({ image, caption, width = '56px', height = '56px' }: TechProps) {
	return (
		<ToggleTip content={caption}>
			<Image src={image} alt={caption} objectFit={'fill'} width={width} height={height} />
		</ToggleTip>
	)
}
