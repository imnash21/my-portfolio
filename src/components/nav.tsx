import { HStack, Link } from '@chakra-ui/react'
import type { NavItemType } from './types'

type NavProps = {
	items: NavItemType[]
}

export default function Nav({ items }: NavProps) {
	return (
		<HStack marginInlineStart={'auto'} gapX={'6'} hideBelow={'md'}>
			{items.map((item) => (
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
	)
}
