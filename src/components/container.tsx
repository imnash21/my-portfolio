import { Container as ChakraContainer, type ContainerProps } from '@chakra-ui/react'

export default function Container(props: ContainerProps) {
	return <ChakraContainer maxInlineSize={'7xl'} {...props} />
}
