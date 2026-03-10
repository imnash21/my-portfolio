import { useEffect, useRef, useState } from 'react'

export function useElementHeightObserver() {
	const elementRef = useRef<HTMLDivElement>(null)
	const [measuredHeight, setMeasuredHeight] = useState('auto')

	useEffect(() => {
		const element = elementRef.current

		if (!element) return

		const updateHeight = () => {
			setMeasuredHeight(`${element.offsetHeight}px`)
		}

		updateHeight()

		const resizeObserver = new ResizeObserver(updateHeight)
		resizeObserver.observe(element)

		window.addEventListener('resize', updateHeight)

		return () => {
			resizeObserver.disconnect()
			window.removeEventListener('resize', updateHeight)
		}
	}, [])

	return { elementRef, measuredHeight }
}
