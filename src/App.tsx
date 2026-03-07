import { Box, Separator } from '@chakra-ui/react'
import { useEffect } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/partials/hero'
import Certificates from './components/partials/certificates'
import Techs from './components/partials/techs'
import Projects from './components/partials/projects'

const sections = [
	{ hash: '#', selector: '[data-scroll-section="top"]' },
	{ hash: '#certificates', selector: '#certificates' },
	{ hash: '#projects', selector: '#projects' },
] as const

type SectionHash = (typeof sections)[number]['hash']
type TrackedSection = { hash: SectionHash; element: HTMLElement | null }
type ActiveSection = { hash: SectionHash; element: HTMLElement }

export default function App() {
	useEffect(() => {
		const trackedSections = sections
			.map<TrackedSection>((section) => ({
				hash: section.hash,
				element: document.querySelector<HTMLElement>(section.selector),
			}))
			.filter((section): section is ActiveSection => section.element !== null)

		if (!trackedSections.length) return

		let animationFrameId: number | null = null

		const getCurrentHash = () => window.location.hash || '#'

		const updateHashFromScroll = () => {
			animationFrameId = null

			const scrollPosition = window.scrollY + 96
			let nextHash = trackedSections[0].hash

			for (const section of trackedSections) {
				if (section.element.offsetTop <= scrollPosition) {
					nextHash = section.hash
				}
			}

			if (getCurrentHash() !== nextHash) {
				window.history.replaceState(null, '', nextHash)
				window.dispatchEvent(new Event('hashchange'))
			}
		}

		const requestHashUpdate = () => {
			if (animationFrameId !== null) return

			animationFrameId = window.requestAnimationFrame(updateHashFromScroll)
		}

		requestHashUpdate()
		window.addEventListener('scroll', requestHashUpdate, { passive: true })
		window.addEventListener('resize', requestHashUpdate)

		return () => {
			if (animationFrameId !== null) {
				window.cancelAnimationFrame(animationFrameId)
			}

			window.removeEventListener('scroll', requestHashUpdate)
			window.removeEventListener('resize', requestHashUpdate)
		}
	}, [])

	return (
		<>
			<Header />

			<Box as={'main'} backgroundColor={'white'} marginBlockEnd={'375px'} zIndex={1}>
				<Box as={'section'} data-scroll-section={'top'} scrollMarginTop={'16'}>
					<Hero />
					<Techs />
					<Separator />
				</Box>
				<Certificates />
				<Projects />
			</Box>

			<Footer />
		</>
	)
}
