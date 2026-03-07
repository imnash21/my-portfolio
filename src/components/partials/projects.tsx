import { SimpleGrid } from '@chakra-ui/react'
import Container from '../container'
import SectionTitle from '../section-title'
import Project from '../project'
import { carewiseLandingPage1, catClubCafeLandingPagePage1 } from '@/lib/images'
import { carewiseProjects, catClubCafeProjects } from '@/lib/projects'
import Section from '../section'

export type ProjectType = {
	image: string
	title: string
}

export default function Projects() {
	return (
		<Section id="projects" aria-labelledby="projects-title">
			<Container>
				<SectionTitle id="projects-title" textAlign={'center'}>
					Projects
				</SectionTitle>

				<SimpleGrid columns={{ md: 2 }} gap={{ base: '6', sm: '10', lg: '14' }}>
					<Project image={carewiseLandingPage1} title="CareWise" projects={carewiseProjects} />
					<Project image={catClubCafeLandingPagePage1} title="Cat Club Cafe" projects={catClubCafeProjects} />
				</SimpleGrid>
			</Container>
		</Section>
	)
}
