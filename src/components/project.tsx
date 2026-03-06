import { Box, Center, CloseButton, Dialog, Image, Portal } from '@chakra-ui/react'
import { Prose } from './ui/prose'
import type { ProjectType } from './partials/projects'
import ProjectCarousel from './project-carousel'

type ProjectProps = ProjectType & {
	projects: ProjectType[]
}

export default function Project({ image, caption, projects }: ProjectProps) {
	return (
		<Dialog.Root size={'full'}>
			<Dialog.Trigger asChild>
				<Prose as={'figure'} marginInline={'auto'}>
					<Image
						src={image}
						alt={caption}
						objectFit={'cover'}
						shadow={'lg'}
						aspectRatio={'4/3'}
						cursor={'pointer'}
						scale={{ _hover: 1.02, _active: 1.02, _focus: 1.02 }}
						transition={'scale 0.15s ease'}
					/>
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
								<ProjectCarousel projects={projects} />
							</Center>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
