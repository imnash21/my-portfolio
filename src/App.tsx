import { Box, Separator } from '@chakra-ui/react'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/partials/hero'
import Certificates from './components/partials/certificates'
import Techs from './components/partials/techs'
import Projects from './components/partials/projects'

export default function App() {
	return (
		<>
			<Header />

			<Box as={'main'} backgroundColor={'white'} marginBlockEnd={'375px'} zIndex={1}>
				<Hero />
				<Techs />
				<Separator />
				<Certificates />
				<Projects />
			</Box>

			<Footer />
		</>
	)
}
