import { Avatar, Box, Button, Center, Flex, HStack, Portal, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FiEdit2 } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from "react-router";
import TraineeService from "../services/trainee.service";
import { ITrainee } from "../models/trainees.model";
import EditTraineeModal from "../components/EditModal";

function Trainees() {
    const navigate = useNavigate()
    const [trainees, setTrainees] = useState<ITrainee[]>()
    const [editTrainee, setEditTrainee] = useState<ITrainee>()
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        TraineeService.getTrainees().then(
            (data) => {
                setTrainees(data)
            }
        )
    }, []);


    const viewTrainee = () => {
        navigate('/view-trainee')
    }

    const openEditModal = (trainee : ITrainee) => {
        setEditTrainee(trainee)
        onOpen()
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
                                {
                                    trainees && trainees.map((trainee, index) =>
                                    (
                                        <Tr key={index}>
                                            <Td>{index+1}</Td>
                                            <Td>
                                                <HStack onClick={viewTrainee}>
                                                    <Avatar size={'sm'} name={trainee.name} />
                                                    <Text>
                                                       {trainee.name}
                                                    </Text>
                                                </HStack></Td>
                                            <Td ><Text>{trainee.phone}</Text></Td>
                                            <Td ><Text>{`${trainee.address.street},${trainee.address.city}`}</Text></Td>
                                            <Td ><Text>{trainee.email}</Text></Td>
                                            <Td >
                                                <HStack spacing={'15px'}>
                                                    <Center
                                                        width={'40px'} height='40px'
                                                        background={'lightgray'}
                                                        borderRadius={'5px'}
                                                        cursor={'pointer'}
                                                        title="edit trainee" 
                                                        onClick={() => {openEditModal(trainee)}}
                                                        >
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
                                    ))
                                }


                            </Tbody>

                        </Table>
                    </TableContainer>
                    {
                        isOpen && 
                        <Portal>
                            <EditTraineeModal 
                            isOpen={isOpen}
                            onClose={onClose}
                            trainee={editTrainee} />
                        </Portal>
                    }
                </Box>
            </Box>
        </>
    )
}

export default Trainees;
