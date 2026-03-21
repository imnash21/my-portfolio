import type { NavItemType } from '@/components/types'

export const navItems = [
	{ label: 'Introduction', href: '#', selector: '[data-scroll-section="top"]' },
	{ label: 'Tech Stack', href: '#techs', selector: '#techs' },
	{ label: 'Certificates', href: '#certificates', selector: '#certificates' },
	{ label: 'Projects', href: '#projects', selector: '#projects' },
] satisfies NavItemType[]
