import { SimpleGrid } from '@chakra-ui/react'
import Container from '../container'
import SectionTitle from '../section-title'
import Certificate from '../certificate'
import { itsDatabase, itsHtmlCss, itsNetworkSecurity, mtaJava } from '@/lib/images'
import Section from '../section'

export type CertificateType = {
	image: string
	caption: string
}

export default function Certificates() {
	return (
		<Section id="certificates" aria-labelledby="certificates-title" backgroundColor={'foreground'}>
			<Container>
				<SectionTitle id="certificates-title" textAlign={'center'}>
					Certificates
				</SectionTitle>

				<SimpleGrid columns={{ md: 2 }} gap={{ base: '6', sm: '10', lg: '14' }}>
					<Certificate image={mtaJava} caption="Certiport - MTA Exam (Java)" />
					<Certificate image={itsHtmlCss} caption="Certiport - Information Technology Specialist (HTML and CSS)" />
					<Certificate image={itsDatabase} caption="Certiport - Information Technology Specialist (Databases)" />
					<Certificate
						image={itsNetworkSecurity}
						caption="Certiport - Information Technology Specialist (Network Security)"
					/>
				</SimpleGrid>
			</Container>
		</Section>
	)
}
