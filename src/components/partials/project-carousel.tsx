import { Carousel, Image } from '@chakra-ui/react'
import type { ProjectType } from './projects'
import { forwardRef } from 'react'

type ProjectCarouselProps = {
	projects: ProjectType[]
}

const ProjectCarousel = forwardRef<HTMLDivElement, ProjectCarouselProps>(({ projects }, ref) => {
	return (
		<Carousel.Root ref={ref} slideCount={projects.length} maxWidth="6xl" gap="4" marginInline={'auto'}>
			<Carousel.Control justifyContent="center" gap="4" width="full">
				{/* Previous Trigger */}
				{/* <Carousel.PrevTrigger asChild>
					<IconButton size="xs" variant="outline">
						<LuChevronLeft />
					</IconButton>
				</Carousel.PrevTrigger> */}

				{/* Items */}
				<Carousel.ItemGroup>
					{projects.map((project, index) => (
						<Carousel.Item key={index} index={index} aspectRatio={{ base: 3 / 2, lg: 16 / 9 }}>
							{/* Image */}
							<Image
								src={project.image}
								alt={project.title}
								width={'full'}
								height={'full'}
								borderRadius={'lg'}
								objectFit={'contain'}
							/>
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>

				{/* Next Trigger */}
				{/* <Carousel.NextTrigger asChild>
					<IconButton size="xs" variant="outline">
						<LuChevronRight />
					</IconButton>
				</Carousel.NextTrigger> */}
			</Carousel.Control>

			{/* Indicators */}
			<Carousel.IndicatorGroup>
				{projects.map((project, index) => (
					<Carousel.Indicator
						key={index}
						index={index}
						unstyled
						_current={{
							outline: '2px solid currentColor',
							outlineOffset: '2px',
						}}
					>
						{/* Image */}
						<Image
							width="20"
							aspectRatio="16/9"
							src={project.image}
							alt={project.title}
							objectFit="cover"
							borderRadius={'sm'}
						/>
					</Carousel.Indicator>
				))}
			</Carousel.IndicatorGroup>
		</Carousel.Root>
	)
})

export default ProjectCarousel
