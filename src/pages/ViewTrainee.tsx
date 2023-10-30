import { Avatar, Box, HStack, Text } from "@chakra-ui/react"


const ViewTrainee = () => {
    return (
        <div>
            <Box width={'100%'} >
                <Box mx={'auto'} width={'80%'}>
                    <HStack mb={'40px'}>
                        <Avatar size={'lg'} name='Muili Bolaji' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text fontSize={'16px'}>
                                Muili Bolaji
                            </Text>
                            <Text fontSize={'16px'}>
                                bolaji@gmail.com
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </div>
    )
}

export default ViewTrainee