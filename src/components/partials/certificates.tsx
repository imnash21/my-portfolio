import { SimpleGrid } from '@chakra-ui/react'
import Container from '../container'
import SectionTitle from '../section-title'
import { itsDatabase, itsHtmlCss, itsNetworkSecurity, mtaJava, umGitHub, umJavaScript } from '@/lib/images'
import Section from '../section'
import Certificate from './certificate'

const certificates: CertificateType[] = [
	{ image: mtaJava, caption: 'Certiport - MTA Exam (Java)' },
	{ image: itsHtmlCss, caption: 'Certiport - Information Technology Specialist (HTML and CSS)' },
	{ image: itsDatabase, caption: 'Certiport - Information Technology Specialist (Databases)' },
	{
		image: itsNetworkSecurity,
		caption: 'Certiport - Information Technology Specialist (Network Security)',
	},
	{ image: umGitHub, caption: 'UM - GitHub' },
	{ image: umJavaScript, caption: 'UM - JavaScript' },
]

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
					{certificates.map((certificate, index) => (
						<Certificate key={`certificate-${index}`} image={certificate.image} caption={certificate.caption} />
					))}
				</SimpleGrid>
			</Container>
		</Section>
	)
}
