import { Center, CloseButton, Dialog, Heading, Image, Portal, Text } from '@chakra-ui/react'
import ProjectCarousel from './project-carousel'
import { motion, useAnimation } from 'motion/react'
import { useRef } from 'react'
import type { ProjectType } from './projects'
import { Prose } from '../ui/prose'

const MotionImage = motion.create(Image)

type ProjectProps = ProjectType & {
	description: string
	projects: ProjectType[]
}

export default function Project({ image, title, projects, description }: ProjectProps) {
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
				<Prose marginInline={'auto'}>
					{/* Image */}
					<MotionImage
						src={image}
						alt={title}
						objectFit={'cover'}
						shadow={'lg'}
						aspectRatio={'4/3'}
						cursor={'pointer'}
						animate={controls}
						onHoverStart={handleHoverStart}
						onHoverEnd={handleHoverEnd}
						whileHover={{ scale: 1.02 }}
					/>
					{/* Title */}
					<Heading as={'h4'} size={'lg'} textAlign={'center'}>
						{title}
					</Heading>
					<Text fontSize={'sm'} textAlign={'center'}>
						{description}
					</Text>
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
								{/* Carousel */}
								<ProjectCarousel projects={projects} />
							</Center>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
