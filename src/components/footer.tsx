import { Box, Heading, HStack, Icon, Link, Separator, SimpleGrid, Stack } from '@chakra-ui/react'
import Container from './container'
import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbMail, TbPhone } from 'react-icons/tb'

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
			height={'375px'}
		>
			<Container paddingBlock={'20'}>
				<SimpleGrid columns={{ sm: 3 }} gap={'6'} justifyItems={'center'}>
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
							Made in{' '}
							<Box as={'span'} fontWeight={'semibold'} color={'foreground'}>
								Chakra UI
							</Box>
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
							{/* LinkedIn */}
							<li>
								<HStack asChild color={'foreground'}>
									<Link href="https://www.linkedin.com/in/nasief-m-7792aa148" target={'_blank'}>
										<Icon>
											<TbBrandLinkedin />
										</Icon>
										LinkedIn
									</Link>
								</HStack>
							</li>

							{/* GitHub */}
							<li>
								<HStack asChild color={'foreground'}>
									<Link href="https://github.com/imnash21" target={'_blank'}>
										<Icon>
											<TbBrandGithub />
										</Icon>
										GitHub
									</Link>
								</HStack>
							</li>

							{/* Facebook */}
							<li>
								<HStack asChild color={'foreground'}>
									<Link href="https://www.facebook.com/imnash21" target={'_blank'}>
										<Icon>
											<TbBrandFacebook />
										</Icon>
										Facebook
									</Link>
								</HStack>
							</li>
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
