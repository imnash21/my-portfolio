import { useEffect } from 'react'

const sections = [
	{ hash: '#', selector: '[data-scroll-section="top"]' },
	{ hash: '#techs', selector: '#techs' },
	{ hash: '#certificates', selector: '#certificates' },
	{ hash: '#projects', selector: '#projects' },
] as const

type SectionHash = (typeof sections)[number]['hash']
type TrackedSection = { hash: SectionHash; element: HTMLElement | null }
type ActiveSection = { hash: SectionHash; element: HTMLElement }

export function useScrollHashTracker() {
	useEffect(() => {
		const trackedSections = sections
			.map<TrackedSection>((section) => ({
				hash: section.hash,
				element: document.querySelector<HTMLElement>(section.selector),
			}))
			.filter((section): section is ActiveSection => section.element !== null)

		if (!trackedSections.length) return

		let animationFrameId: number | null = null
		let isNavigating = false
		let navigationTimeout: ReturnType<typeof setTimeout> | null = null

		const getCurrentHash = () => window.location.hash || '#'

		const stopNavigating = () => {
			isNavigating = false
		}

		const handleAnchorClick = (e: MouseEvent) => {
			const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
			if (!anchor) return

			isNavigating = true

			if (navigationTimeout !== null) clearTimeout(navigationTimeout)

			window.removeEventListener('scrollend', stopNavigating)
			window.addEventListener('scrollend', stopNavigating, { once: true })

			// Fallback in case scrollend never fires (e.g. no scroll needed)
			navigationTimeout = setTimeout(stopNavigating, 1000)
		}

		const updateHashFromScroll = () => {
			animationFrameId = null

			if (isNavigating) return

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

		document.addEventListener('click', handleAnchorClick)
		requestHashUpdate()
		window.addEventListener('scroll', requestHashUpdate, { passive: true })
		window.addEventListener('resize', requestHashUpdate)

		return () => {
			if (animationFrameId !== null) {
				window.cancelAnimationFrame(animationFrameId)
			}
			if (navigationTimeout !== null) {
				clearTimeout(navigationTimeout)
			}

			document.removeEventListener('click', handleAnchorClick)
			window.removeEventListener('scrollend', stopNavigating)
			window.removeEventListener('scroll', requestHashUpdate)
			window.removeEventListener('resize', requestHashUpdate)
		}
	}, [])
}
