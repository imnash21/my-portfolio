import { Box, IconButton, Link, Portal, useBreakpointValue } from '@chakra-ui/react'
import type { NavItemType } from './types'
import { TbMenu2 } from 'react-icons/tb'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const MotionNav = motion.create(Box)
const MotionIndicator = motion.create(Box)

function getCurrentHash() {
	if (typeof window === 'undefined') return ''

	return window.location.hash
}

function isActiveItem(currentHash: string, itemHref: string) {
	if (itemHref === '#') {
		return currentHash === '' || currentHash === '#'
	}

	return currentHash === itemHref
}

type NavMobileProps = {
	items: NavItemType[]
}

export default function NavMobile({ items }: NavMobileProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [currentHash, setCurrentHash] = useState(getCurrentHash)
	const isDesktop = useBreakpointValue({ base: false, md: true }) ?? false
	const shouldShowMenu = !isDesktop && isOpen

	useEffect(() => {
		const handleHashChange = () => setCurrentHash(getCurrentHash())

		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)

		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])

	return (
		<>
			{/* Nav Mobile Trigger */}
			<IconButton
				aria-label="Open menu"
				variant="ghost"
				marginInlineStart={'auto'}
				color={'foregroundDimmed'}
				hideFrom={'md'}
				_hover={{ backgroundColor: 'secondary' }}
				onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
			>
				<TbMenu2 />
			</IconButton>

			<Portal>
				<AnimatePresence>
					{shouldShowMenu && (
						// Nav Mobile Menu
						<MotionNav
							as={'nav'}
							initial={{ height: 0, opacity: 0, y: -8 }}
							animate={{
								height: 'auto',
								opacity: 1,
								y: 0,
								transition: { duration: 0.25, ease: 'easeInOut' },
							}}
							exit={{
								height: 0,
								opacity: 0,
								y: -8,
								transition: { duration: 0.2, ease: 'easeInOut' },
							}}
							position={'fixed'}
							top={'16'}
							left={0}
							backgroundColor={'primary'}
							width={'full'}
							overflow={'hidden'}
							paddingBlockEnd={'3'}
						>
							{items.map((item) => (
								// Nav Mobile Item Link
								<NavItem
									key={item.href}
									label={item.label}
									href={item.href}
									isActive={isActiveItem(currentHash, item.href)}
								/>
							))}
						</MotionNav>
					)}
				</AnimatePresence>
			</Portal>
		</>
	)
}

type NavItemProps = {
	label: string
	href: string
	isActive: boolean
}

// Nav Mobile Item Link
function NavItem({ label, href, isActive }: NavItemProps) {
	return (
		// Link
		<Link
			href={href}
			color={{ base: isActive ? 'foreground' : 'foregroundDimmed', _hover: 'foreground' }}
			fontSize={'xs'}
			fontWeight={'semibold'}
			textTransform={'uppercase'}
			textDecoration={'none'}
			display={'block'}
			paddingBlock={'3'}
			paddingInline={'6'}
			position={'relative'}
			_focus={{ outline: 'none' }}
		>
			{/* Label */}
			{label}
			{/* Indicator */}
			{isActive && (
				<MotionIndicator
					layoutId="nav-mobile-indicator"
					position={'absolute'}
					inset={0}
					background={'secondary'}
					zIndex={-1}
				/>
			)}
		</Link>
	)
}
