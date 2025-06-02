// src/components/AddUserButton.jsx
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

const AddUserButton = ({ onAdd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    role: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newUser = {
      id: Date.now(),
      ...formData,
    };
    onAdd(newUser);
    setFormData({ firstName: '', lastName: '', companyName: '', role: '', country: '' });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">Add User</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input name="lastName" value={formData.lastName} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input name="companyName" value={formData.companyName} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input name="role" value={formData.role} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input name="country" value={formData.country} onChange={handleChange} />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUserButton;
