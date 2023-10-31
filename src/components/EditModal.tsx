import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormLabel, Input, FormControl, FormHelperText, HStack } from "@chakra-ui/react"
import { ITrainee } from "../models/trainees.model";
import { useEffect, useState } from "react";
import traineeService from "../services/trainee.service";

function EditTraineeModal(
    { isOpen, onClose, trainee }:
        { isOpen: boolean, onClose: any, trainee: ITrainee | undefined }) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        if (trainee) {
            setName(trainee.name)
            setPhone(trainee.phone)
            setEmail(trainee.email)
        }

    }, [])


    const submitEditForm =  async() => {
        try {
          let data : any = {
            ...trainee,
            name: name,
            phone: phone,
            email : email
          }  
          console.log(data,'this is data')
          const editTrainee  = await traineeService.editTrainee(trainee?.id, data)
        } catch (error) {
        console.log(error)    
        }
    }
    return( 
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Trainee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form >
                        <FormControl >
                                <FormLabel>Name</FormLabel>
                                <Input type='text' 
                                name="name"
                                 value={name}
                                 onChange={(e)=> 
                                 {setName(e.target.value)} } />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Phone</FormLabel>
                                <Input type='text' 
                                name="phone"
                                 value={phone}
                                 onChange={(e)=> 
                                 {setPhone(e.target.value)} } />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' 
                                 value={email}
                                 name="email"
                                 onChange={(e)=> 
                                 {setEmail(e.target.value)} } />
                            </FormControl>
                            <HStack>
                            <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={submitEditForm}>Submit</Button>
                            </HStack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                      
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditTraineeModal;