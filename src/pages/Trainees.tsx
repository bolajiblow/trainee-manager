import { Avatar, Box, Button, Center, Flex, HStack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

import { FiEdit2 } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from "react-router";

function Trainees() {
    const navigate = useNavigate()
    const viewTrainee = () => {
        navigate('/view-trainee')
    }
    return (
        <>
            <Box px={'30px'}
                py={'40px'}
            >
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'30px'} fontWeight={'700'} mb={'40px'}>
                        My Trainees
                    </Text>
                    <Button colorScheme="green">
                        Add trainee
                    </Button>
                </Flex>

                <Box>
                    <TableContainer>
                        <Table size={'sm'} variant='simple'>
                            <TableCaption>List of trainees</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>S/N</Th>
                                    <Th>Name</Th>
                                    <Th >Phone Number</Th>
                                    <Th >Address</Th>
                                    <Th >Email</Th>
                                    <Th >Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>
                                        <HStack onClick={viewTrainee}>
                                            <Avatar size={'sm'} name='Muili Bolaji' src='https://bit.ly/dan-abramov' />
                                            <Text>
                                                Muili Bolaji
                                            </Text>
                                        </HStack></Td>
                                    <Td ><Text>08049567475</Text></Td>
                                    <Td ><Text>Aguda, surulere</Text></Td>
                                    <Td ><Text>bolaji@gmail.com</Text></Td>
                                    <Td >
                                        <HStack spacing={'15px'}>
                                            <Center
                                                width={'40px'} height='40px'
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                cursor={'pointer'}
                                                title="edit trainee" >
                                                <FiEdit2 fontSize={'20px'}
                                                />
                                            </Center>
                                            <Center width={'40px'} height='40px'
                                                cursor={'pointer'}
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                title="delete trainee">
                                                <MdDelete color="red" fontSize={'20px'} />
                                            </Center>

                                        </HStack></Td>
                                </Tr>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>
                                        <HStack>
                                            <Avatar size={'sm'} name='Muili Bolaji' src='https://bit.ly/dan-abramov' />
                                            <Text>
                                                Muili Bolaji
                                            </Text>
                                        </HStack>
                                    </Td>
                                    <Td ><Text>08049567475</Text></Td>
                                    <Td ><Text>Aguda, surulere</Text></Td>
                                    <Td ><Text>bolaji@gmail.com</Text></Td>
                                    <Td >
                                        <HStack spacing={'15px'}>
                                            <Center
                                                width={'40px'} height='40px'
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                cursor={'pointer'}
                                                title="edit trainee" >
                                                <FiEdit2 fontSize={'20px'}
                                                />
                                            </Center>
                                            <Center width={'40px'} height='40px'
                                                cursor={'pointer'}
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                title="delete trainee">
                                                <MdDelete color="red" fontSize={'20px'} />
                                            </Center>

                                        </HStack></Td>
                                </Tr>
                                <Tr>
                                    <Td>1</Td>
                                    <Td> <HStack>
                                        <Avatar size={'sm'} name='Muili Bolaji' src='https://bit.ly/dan-abramov' />
                                        <Text>
                                            Muili Bolaji
                                        </Text>
                                    </HStack></Td>
                                    <Td ><Text>08049567475</Text></Td>
                                    <Td ><Text>Aguda, surulere</Text></Td>
                                    <Td ><Text>bolaji@gmail.com</Text></Td>
                                    <Td >
                                        <HStack spacing={'15px'}>
                                            <Center
                                                width={'40px'} height='40px'
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                cursor={'pointer'}
                                                title="edit trainee" >
                                                <FiEdit2 fontSize={'20px'}
                                                />
                                            </Center>
                                            <Center width={'40px'} height='40px'
                                                cursor={'pointer'}
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                title="delete trainee">
                                                <MdDelete color="red" fontSize={'20px'} />
                                            </Center>

                                        </HStack></Td>
                                </Tr>
                                <Tr>
                                    <Td>1</Td>
                                    <Td><HStack>
                                        <Avatar size={'sm'} name='Muili Bolaji' src='https://bit.ly/dan-abramov' />
                                        <Text>
                                            Muili Bolaji
                                        </Text>
                                    </HStack></Td>
                                    <Td ><Text>08049567475</Text></Td>
                                    <Td ><Text>Aguda, surulere</Text></Td>
                                    <Td ><Text>bolaji@gmail.com</Text></Td>
                                    <Td >
                                        <HStack spacing={'15px'}>
                                            <Center
                                                width={'40px'} height='40px'
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                cursor={'pointer'}
                                                title="edit trainee" >
                                                <FiEdit2 fontSize={'20px'}
                                                />
                                            </Center>
                                            <Center width={'40px'} height='40px'
                                                cursor={'pointer'}
                                                background={'lightgray'}
                                                borderRadius={'5px'}
                                                title="delete trainee">
                                                <MdDelete color="red" fontSize={'20px'} />
                                            </Center>

                                        </HStack></Td>
                                </Tr>



                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    )
}

export default Trainees;
