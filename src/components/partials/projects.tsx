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
					<Project
						image={carewiseLandingPage1}
						title="CareWise"
						description="A web application we built for a child development enrollment system, where I served as the Full-Stack Developer responsible for building the system across both front-end and back-end development."
						projects={carewiseProjects}
					/>
					<Project
						image={catClubCafeLandingPagePage1}
						title="Cat Club Cafe"
						description="A web application we built for a cafe ordering system, where I served as the Full-Stack Developer responsible for building the system used to manage and process orders without a customer-facing user account."
						projects={catClubCafeProjects}
					/>
				</SimpleGrid>
			</Container>
		</Section>
	)
}
