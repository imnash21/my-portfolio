import { AbsoluteCenter, Box, CloseButton } from '@chakra-ui/react'
import { AnimatePresence } from 'motion/react'
import type { ProjectType } from './partials/projects'
import ProjectCarousel from './project-carousel'

type ProjectViewDialogProps = {
	projects?: ProjectType[]
	onClose: () => void
}

export default function ProjectViewDialog({ projects, onClose }: ProjectViewDialogProps) {
	return (
		<AnimatePresence>
			{projects && (
				<Box position={'fixed'} inset={0} zIndex={100}>
					<Box position={'absolute'} inset={0} backgroundColor={'black'} opacity={0.8} zIndex={1} />
					<CloseButton
						variant={'plain'}
						position={'absolute'}
						top={2}
						right={2}
						size={'lg'}
						color={'white'}
						zIndex={3}
						onClick={onClose}
					/>
					<AbsoluteCenter width={'100%'} height={'100%'} zIndex={2}>
						<ProjectCarousel projects={projects} onClose={onClose} />
					</AbsoluteCenter>
				</Box>
			)}
		</AnimatePresence>
	)
}
