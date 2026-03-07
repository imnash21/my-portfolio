import { Box, HStack, Link } from '@chakra-ui/react'
import type { NavItemType } from './types'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

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

type NavProps = {
	items: NavItemType[]
}

export default function Nav({ items }: NavProps) {
	const [currentHash, setCurrentHash] = useState(getCurrentHash)

	useEffect(() => {
		const handleHashChange = () => setCurrentHash(getCurrentHash())

		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)

		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])

	return (
		<HStack as={'nav'} gap={0} marginInlineStart={'auto'} hideBelow={'md'}>
			{items.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					color={{ base: 'foregroundDimmed', _hover: 'foreground' }}
					fontSize={'xs'}
					fontWeight={'semibold'}
					textTransform={'uppercase'}
					position={'relative'}
					height={'16'}
					paddingInline={'4'}
					_focus={{ outline: 'none' }}
				>
					{item.label}
					{isActiveItem(currentHash, item.href) && (
						<MotionIndicator
							layoutId="nav-indicator"
							background={'secondary'}
							position={'absolute'}
							inset={0}
							zIndex={-1}
						/>
					)}
				</Link>
			))}
		</HStack>
	)
}
