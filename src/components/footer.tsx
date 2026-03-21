import { Box, Heading, HStack, Icon, Link, Separator, SimpleGrid, Stack, type BoxProps } from '@chakra-ui/react'
import Container from './container'
import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbMail, TbPhone } from 'react-icons/tb'
import { forwardRef } from 'react'

const socials = [
	{ icon: TbBrandLinkedin, href: 'https://www.linkedin.com/in/nasief-m-7792aa148', label: 'LinkedIn' },
	{ icon: TbBrandGithub, href: 'https://github.com/imnash21', label: 'GitHub' },
	{ icon: TbBrandFacebook, href: 'https://www.facebook.com/imnash21', label: 'Facebook' },
]

const Footer = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
	return (
		<Box
			ref={ref}
			as={'footer'}
			backgroundColor={'primary'}
			color={'foreground'}
			position={'fixed'}
			bottom={0}
			left={0}
			right={0}
			zIndex={-1}
			{...props}
		>
			<Container paddingBlock={'12'}>
				<SimpleGrid columns={{ sm: 2, xl: 3 }} gap={{ base: '6', md: '10' }}>
					{/* About Section */}
					<About />
					{/* Contact Section */}
					<Contact />
					{/* Social Section */}
					<Social />
				</SimpleGrid>
			</Container>

			<Separator borderColor={'secondary'} />

			{/* Copyright */}
			<Box textAlign={'center'} paddingBlock={'6'} fontSize={'sm'} color={'foregroundDimmed'}>
				&copy; {new Date().getFullYear()}{' '}
				<Box as={'span'} fontWeight={'semibold'} color={'foreground'}>
					Nasief M. Marhala
				</Box>
				{"'s "}
				Portfolio.
			</Box>
		</Box>
	)
})

export default Footer

// About Section
function About() {
	return (
		<Stack as={'section'} gapY={'6'} gridColumn={{ smToXl: '1 / -1' }} width={'full'}>
			<div>
				<Heading size={{ base: '3xl', sm: '4xl' }} textTransform={'uppercase'} fontWeight={'bold'}>
					Nasief M. Marhala
				</Heading>
				<Box color={'foregroundDimmed'}>A full stack web developer</Box>
			</div>
			<Separator borderColor={'secondary'} />
			<Box fontSize={'sm'} color={'foregroundDimmed'}>
				Built with{' '}
				<Link href="https://react.dev" target="_blank" fontWeight={'semibold'} color={'foreground'}>
					React
				</Link>
				{' + '}
				<Link href="https://www.chakra-ui.com" target="_blank" fontWeight={'semibold'} color={'foreground'}>
					Chakra UI
				</Link>
				{' + '}
				<Link href="https://motion.dev" target="_blank" fontWeight={'semibold'} color={'foreground'}>
					Motion
				</Link>
				, powered by{' '}
				<Link href="https://vite.dev" target="_blank" fontWeight={'semibold'} color={'foreground'}>
					Vite
				</Link>{' '}
				and deployed on{' '}
				<Link href="https://vercel.com" target="_blank" fontWeight={'semibold'} color={'foreground'}>
					Vercel
				</Link>
			</Box>
		</Stack>
	)
}

// Contact Section
function Contact() {
	return (
		<Stack as={'section'} gapY={'6'}>
			<Heading fontWeight={'bold'}>Contact</Heading>

			<Box as={'ul'} spaceY={'3'}>
				{/* Email Address */}
				<HStack as={'li'}>
					<Icon>
						<TbMail />
					</Icon>
					nasiefmarhala@gmail.com
				</HStack>

				{/* Phone Number */}
				<HStack as={'li'}>
					<Icon>
						<TbPhone />
					</Icon>
					+63 991 658 8296
				</HStack>
			</Box>
		</Stack>
	)
}

// Social Section
function Social() {
	return (
		<Stack as={'section'} gapY={'6'}>
			<Heading fontWeight={'bold'}>Social</Heading>

			<Box as={'ul'} spaceY={'3'}>
				{socials.map((social) => (
					<li key={social.label}>
						<HStack asChild color={'foreground'}>
							<Link href={social.href} target={'_blank'}>
								<Icon>
									<social.icon />
								</Icon>
								{social.label}
							</Link>
						</HStack>
					</li>
				))}
			</Box>
		</Stack>
	)
}
