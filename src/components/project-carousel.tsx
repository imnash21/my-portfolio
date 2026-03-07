import { Carousel, Image } from '@chakra-ui/react'
import type { ProjectType } from './partials/projects'

type ProjectCarouselProps = {
	projects: ProjectType[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
	return (
		<Carousel.Root slideCount={projects.length} maxWidth="6xl" gap="4" marginInline={'auto'}>
			<Carousel.Control justifyContent="center" gap="4" width="full">
				{/* <Carousel.PrevTrigger asChild>
					<IconButton size="xs" variant="outline">
						<LuChevronLeft />
					</IconButton>
				</Carousel.PrevTrigger> */}

				<Carousel.ItemGroup>
					{projects.map((project, index) => (
						<Carousel.Item key={index} index={index} aspectRatio={{ base: 3 / 2, lg: 16 / 9 }}>
							<Image
								src={project.image}
								alt={project.caption}
								shadow={'xl'}
								width={'full'}
								height={'full'}
								borderRadius={'lg'}
								objectFit={'fill'}
							/>
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>

				{/* <Carousel.NextTrigger asChild>
					<IconButton size="xs" variant="outline">
						<LuChevronRight />
					</IconButton>
				</Carousel.NextTrigger> */}
			</Carousel.Control>

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
						<Image
							width="20"
							aspectRatio="16/9"
							src={project.image}
							alt={project.caption}
							objectFit="cover"
							borderRadius={'sm'}
						/>
					</Carousel.Indicator>
				))}
			</Carousel.IndicatorGroup>
		</Carousel.Root>
	)
}
