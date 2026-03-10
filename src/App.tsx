import { Box, Separator } from '@chakra-ui/react'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/partials/hero'
import Certificates from './components/partials/certificates'
import Techs from './components/partials/techs'
import Projects from './components/partials/projects'
import { useScrollHashTracker } from './components/hooks/use-scroll-hash-tracker'
import { useElementHeightObserver } from './components/hooks/use-element-height-observer'

export default function App() {
	useScrollHashTracker()
	const { elementRef, measuredHeight } = useElementHeightObserver()

	return (
		<>
			<Header />

			<Box as={'main'} backgroundColor={'white'} marginBlockEnd={measuredHeight} zIndex={1}>
				<Box as={'section'} data-scroll-section={'top'} scrollMarginTop={'16'}>
					<Hero />
					<Techs />
					<Separator />
				</Box>
				<Certificates />
				<Projects />
			</Box>

			<Footer ref={elementRef} />
		</>
	)
}
