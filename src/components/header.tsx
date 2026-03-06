import { HStack, Link } from '@chakra-ui/react'
import Container from './container'
import Brand from './brand'

const navItems = [
	{ label: 'About', href: '#' },
	{ label: 'Certificates', href: '#certificates' },
	{ label: 'Projects', href: '#projects' },
]

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
					<HStack marginInlineStart={'auto'} gapX={'6'}>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								color={{ base: 'foregroundDimmed', _hover: 'foreground' }}
								fontSize={'xs'}
								fontWeight={'semibold'}
								textTransform={'uppercase'}
							>
								{item.label}
							</Link>
						))}
					</HStack>
				</HStack>
			</Container>
		</HStack>
	)
}
