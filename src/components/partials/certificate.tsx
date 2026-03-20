import { Box, Center, CloseButton, Dialog, Image, Portal } from '@chakra-ui/react'
import { Prose } from './ui/prose'
import type { CertificateType } from './partials/certificates'
import { motion, useAnimation } from 'motion/react'
import { useRef } from 'react'

const MotionImage = motion.create(Image)

type CertificateProps = CertificateType

export default function Certificate({ image, caption }: CertificateProps) {
	const controls = useAnimation()
	const isHovering = useRef(false)

	const handleHoverStart = async () => {
		isHovering.current = true
		while (isHovering.current) {
			await controls.start({ y: -10, transition: { duration: 1, ease: 'easeInOut' } })
			if (!isHovering.current) break
			await controls.start({ y: 0, transition: { duration: 1, ease: 'easeInOut' } })
		}
	}

	const handleHoverEnd = () => {
		isHovering.current = false
		controls.start({ y: 0 })
	}

	return (
		<Dialog.Root size={'full'}>
			<Dialog.Trigger asChild>
				{/* Figure */}
				<Prose as={'figure'} marginInline={'auto'}>
					{/* Image */}
					<MotionImage
						src={image}
						alt={caption}
						objectFit={'cover'}
						shadow={'lg'}
						aspectRatio={'4/3'}
						cursor={'pointer'}
						animate={controls}
						onHoverStart={handleHoverStart}
						onHoverEnd={handleHoverEnd}
						whileHover={{ scale: 1.02 }}
					/>
					{/* Caption */}
					<Box as={'figcaption'}>{caption}</Box>
				</Prose>
			</Dialog.Trigger>

			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content backgroundColor={'transparent'} shadow={'none'}>
						<Dialog.CloseTrigger asChild top={'3'} right={'6'}>
							<CloseButton variant={'plain'} color={'background'} />
						</Dialog.CloseTrigger>
						<Dialog.Body asChild height="full" padding={0}>
							<Center>
								{/* Image */}
								<Image src={image} alt={caption} aspectRatio={4 / 3} maxHeight={'85svh'} borderRadius={'lg'} />
							</Center>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
