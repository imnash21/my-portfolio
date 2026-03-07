import { background, me } from '@/lib/images'
import { Center, Flex, Heading, HStack, Image, Separator, Stack, Text } from '@chakra-ui/react'
import Container from '../container'
import { motion } from 'motion/react'

const MotionImageContainer = motion.create(Center)

export default function Hero() {
	return (
		<HStack
			as={'section'}
			backgroundImage={`url(${background})`}
			backgroundRepeat={'no-repeat'}
			backgroundAttachment={'fixed'}
			backgroundSize={'cover'}
			aspectRatio={'16/9'}
			maxHeight={{ lg: '700px' }}
			width={'full'}
		>
			<Container>
				<Flex
					alignItems={'center'}
					flexDirection={{ lgDown: 'column-reverse' }}
					gap={{ base: '8', lg: '20' }}
					py={{ base: '12', lg: '20' }}
				>
					{/* Text */}
					<Stack gapY={{ base: '6', sm: '8' }} flex={1} color={'background'}>
						<div>
							<Text as={'span'} fontWeight={'semibold'} color={'foregroundDimmed'}>
								Hello, I'm
							</Text>
							<Heading
								as={'h1'}
								size={{ base: '4xl', md: '6xl' }}
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
							<Heading size={{ base: '2xl', sm: '3xl' }} fontWeight={'bold'} color={'foreground'}>
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

					{/* Image */}
					<MotionImageContainer
						rounded={'full'}
						backgroundColor={'background'}
						overflow={'clip'}
						animate={{
							y: [0, -12, 0],
							transition: { duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },
						}}
					>
						<Image src={me} aspectRatio={1} />
					</MotionImageContainer>
				</Flex>
			</Container>
		</HStack>
	)
}
