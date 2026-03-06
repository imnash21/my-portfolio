import { Box, Marquee } from '@chakra-ui/react'
import Container from '../container'
import {
	chakraui,
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

export default function Techs() {
	return (
		<Box as={'section'} width={'full'} paddingBlock={{ base: '12', lg: '20' }}>
			<Container>
				<Marquee.Root autoFill pauseOnInteraction spacing={'4rem'}>
					<Marquee.Edge side="start" />
					<Marquee.Viewport>
						<Marquee.Content>
							{/* React */}
							<Marquee.Item>
								<Tech image={react} caption="React" />
							</Marquee.Item>

							{/* Vue.js */}
							<Marquee.Item>
								<Tech image={vuejs} caption="Vue.js" width={'64px'} />
							</Marquee.Item>

							{/* HTML 5 */}
							<Marquee.Item>
								<Tech image={html5} caption="HTML5" />
							</Marquee.Item>

							{/* CSS 3 */}
							<Marquee.Item>
								<Tech image={css3} caption="CSS3" />
							</Marquee.Item>

							{/* JavaScript */}
							<Marquee.Item>
								<Tech image={javascript} caption="JavaScript" />
							</Marquee.Item>

							{/* TypeScript */}
							<Marquee.Item>
								<Tech image={typescript} caption="TypeScript" />
							</Marquee.Item>

							{/* Tailwind CSS */}
							<Marquee.Item>
								<Tech image={tailwindcss} caption="Tailwind CSS" width={'80px'} />
							</Marquee.Item>

							{/* Mantine */}
							<Marquee.Item>
								<Tech image={mantine} caption="Mantine" />
							</Marquee.Item>

							{/* Chakra UI */}
							<Marquee.Item>
								<Tech image={chakraui} caption="Chakra UI" width={'64px'} />
							</Marquee.Item>

							{/* Vuetify */}
							<Marquee.Item>
								<Tech image={vuetify} caption="Vuetify" width={'64px'} />
							</Marquee.Item>

							{/* Nuxt UI */}
							<Marquee.Item>
								<Tech image={nuxtui} caption="Nuxt UI" width={'72px'} />
							</Marquee.Item>

							{/* Laravel */}
							<Marquee.Item>
								<Tech image={laravel} caption="Laravel" width={'64px'} />
							</Marquee.Item>

							{/* Inertiajs */}
							<Marquee.Item>
								<Tech image={inertiajs} caption="Inertia.js" />
							</Marquee.Item>

							{/* PHP */}
							<Marquee.Item>
								<Tech image={php} caption="PHP" width={'80px'} />
							</Marquee.Item>

							{/* MySQL */}
							<Marquee.Item>
								<Tech image={mysql} caption="MySQL" width={'80px'} />
							</Marquee.Item>

							{/* PostgreSQL */}
							<Marquee.Item>
								<Tech image={postgresql} caption="PostgreSQL" />
							</Marquee.Item>

							{/* Node.js */}
							<Marquee.Item>
								<Tech image={nodejs} caption="Node.js" width={'88px'} />
							</Marquee.Item>
						</Marquee.Content>
					</Marquee.Viewport>
					<Marquee.Edge side="end" />
				</Marquee.Root>
			</Container>
		</Box>
	)
}
