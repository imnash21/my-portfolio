import { HStack } from '@chakra-ui/react'
import Container from './container'
import Brand from './brand'
import Nav from './nav'
import NavMobile from './nav-mobile'
import { navItems } from '@/lib/nav'

export default function Header() {
	return (
		<HStack as={'header'} height={'16'} bgColor={'primary'} position={'sticky'} top={0} zIndex={2}>
			<Container>
				<HStack>
					{/* Brand */}
					<Brand />
					{/* Nav */}
					<Nav items={navItems} />
					{/* Nav Mobile */}
					<NavMobile items={navItems} />
				</HStack>
			</Container>
		</HStack>
	)
}
