import { background, me } from '@/lib/images'
import { Center, Heading, HStack, Image, Separator, Stack, Text } from '@chakra-ui/react'
import Container from '../container'
import { motion } from 'motion/react'

const MotionImageContainer = motion(Center)

export default function Hero() {
	return (
		<HStack
			as={'section'}
			backgroundImage={`url(${background})`}
			backgroundRepeat={'no-repeat'}
			backgroundAttachment={'fixed'}
			backgroundSize={'cover'}
			aspectRatio={'16/9'}
			maxHeight={700}
			width={'full'}
		>
			<Container>
				<HStack gapX={'20'} py={'20'}>
					<Stack gapY={{ base: '6', sm: '8' }} flex={1} color={'background'}>
						<div>
							<Text as={'span'} fontWeight={'semibold'} color={'foregroundDimmed'}>
								Hello, I'm
							</Text>
							<Heading
								as={'h1'}
								size={{ base: '5xl', lg: '6xl', xl: '7xl' }}
								fontWeight={'bold'}
								lineHeight={1}
								color={'foreground'}
							>
								Nasief{' '}
								<Text as={'span'} color={'foregroundDimmed'}>
									M. Marhala
								</Text>
							</Heading>
						</div>

						<Separator borderColor={'foregroundDimmed'} />

						<Stack gapY={'6'}>
							<Heading size={{ base: '3xl', sm: '4xl' }} fontWeight={'bold'} color={'foreground'}>
								Full Stack Developer
							</Heading>
							<Text>
								A budding web developer with a passion for creating engaging and dynamic websites. I am eager to
								leverage my skills to contribute to innovative projects. My knowledge extends across front-end and
								back-end technologies, enabling me to build full-stack solutions. I am committed to staying up-to-date
								with the latest industry trends and best practices to deliver high-quality, maintainable, and scalable
								web applications. Although I don't have formal job experience yet, I am enthusiastic about gaining
								practical experience and making a positive impact in the field of web development.
							</Text>
						</Stack>
					</Stack>

					<MotionImageContainer
						rounded={'4xl'}
						backgroundColor={'background'}
						overflow={'clip'}
						hideBelow={'lg'}
						animate={{
							y: [0, -12, 0],
							transition: { duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },
						}}
					>
						<Image src={me} aspectRatio={'3/4'} objectFit={'cover'} />
					</MotionImageContainer>
				</HStack>
			</Container>
		</HStack>
	)
}
