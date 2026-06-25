import { Marquee } from '@chakra-ui/react'
import Container from '../container'
import {
	chakraui,
	csharp,
	css3,
	html5,
	inertiajs,
	javascript,
	laravel,
	mantine,
	mysql,
	nodejs,
	nuxtui,
	php,
	postgresql,
	react,
	tailwindcss,
	typescript,
	vuejs,
	vuetify,
} from '@/lib/images'
import Tech from '../tech'
import SectionTitle from '../section-title'
import Section from '../section'

const techs = [
	{ image: react, caption: 'React', width: '64px' },
	{ image: vuejs, caption: 'Vue.js', width: '64px' },
	{ image: html5, caption: 'HTML5' },
	{ image: css3, caption: 'CSS3' },
	{ image: javascript, caption: 'JavaScript' },
	{ image: typescript, caption: 'TypeScript' },
	{ image: tailwindcss, caption: 'Tailwind CSS', width: '80px', height: '42px' },
	{ image: mantine, caption: 'Mantine' },
	{ image: chakraui, caption: 'Chakra UI', width: '64px' },
	{ image: vuetify, caption: 'Vuetify', width: '64px' },
	{ image: nuxtui, caption: 'Nuxt UI' },
	{ image: nodejs, caption: 'Node.js' },
	{ image: php, caption: 'PHP' },
	{ image: laravel, caption: 'Laravel' },
	{ image: inertiajs, caption: 'Inertia.js' },
	{ image: mysql, caption: 'MySQL' },
	{ image: postgresql, caption: 'PostgreSQL' },
	{ image: csharp, caption: 'C#' },
]

export default function Techs() {
	return (
		<Section id="techs" aria-labelledby="techs-title" backgroundColor={'white'}>
			<Container>
				<SectionTitle id="techs-title" textAlign={'center'}>
					Tech Stack
				</SectionTitle>

				<Marquee.Root autoFill pauseOnInteraction spacing={'4rem'}>
					<Marquee.Edge side="start" />
					<Marquee.Viewport>
						<Marquee.Content alignItems={'center'}>
							{techs.map((tech, index) => (
								<Marquee.Item key={`tech-${index}`}>
									<Tech image={tech.image} caption={tech.caption} width={tech.width} height={tech.height} />
								</Marquee.Item>
							))}
						</Marquee.Content>
					</Marquee.Viewport>
					<Marquee.Edge side="end" />
				</Marquee.Root>
			</Container>
		</Section>
	)
}
