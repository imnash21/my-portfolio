import { Box, Heading, HStack, Icon, Link, Separator, SimpleGrid, Stack } from '@chakra-ui/react'
import Container from './container'
import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbMail, TbPhone } from 'react-icons/tb'

const socials = [
	{ icon: TbBrandLinkedin, href: 'https://www.linkedin.com/in/nasief-m-7792aa148', label: 'LinkedIn' },
	{ icon: TbBrandGithub, href: 'https://github.com/imnash21', label: 'GitHub' },
	{ icon: TbBrandFacebook, href: 'https://www.facebook.com/imnash21', label: 'Facebook' },
]
export default function Footer() {
	return (
		<Box
			as={'footer'}
			backgroundColor={'primary'}
			color={'foreground'}
			position={'fixed'}
			bottom={0}
			left={0}
			right={0}
			zIndex={-1}
			height={{ lg: '375px' }}
		>
			<Container paddingBlock={'20'}>
				<SimpleGrid columns={{ sm: 3 }} gap={'6'} justifyItems={{ sm: 'center' }}>
					{/* About */}
					<Stack gapY={'6'}>
						<div>
							<Heading size={'4xl'} textTransform={'uppercase'} fontWeight={'bold'}>
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

					{/* Contact Information */}
					<Stack gapY={'6'}>
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

					{/* Social Information */}
					<Stack gapY={'6'}>
						<Heading fontWeight={'bold'}>Social</Heading>

						<Box as={'ul'} spaceY={'3'}>
							{socials.map((social) => (
								<li>
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
				</SimpleGrid>
			</Container>

			<Separator borderColor={'secondary'} />

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
}
