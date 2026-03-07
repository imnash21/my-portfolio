import { HStack } from '@chakra-ui/react'
import Container from './container'
import Brand from './brand'
import Nav from './nav'
import type { NavItemType } from './types'

const navItems = [
	{ label: 'About', href: '#' },
	{ label: 'Certificates', href: '#certificates' },
	{ label: 'Projects', href: '#projects' },
] satisfies NavItemType[]

export default function Header() {
	return (
		<HStack
			as={'header'}
			paddingInline={{ base: '4', md: '6' }}
			height={'16'}
			bgColor={'primary'}
			position={'sticky'}
			top={0}
			zIndex={2}
		>
			<Container>
				<HStack>
					<Brand />
					<Nav items={navItems} />
				</HStack>
			</Container>
		</HStack>
	)
}
