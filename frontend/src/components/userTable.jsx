// src/components/UserTable.jsx
import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
} from '@chakra-ui/react';

const UserTable = ({ users, onDelete }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="lg" overflowX="auto">
      <Table variant="striped" colorScheme="gray">
        <Thead bg="gray.100">
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Company</Th>
            <Th>Role</Th>
            <Th>Country</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.company || 'N/A'}</Td>
              <Td>{user.role || 'N/A'}</Td>
              <Td>{user.country || 'N/A'}</Td>
              <Td>
                <Button size="sm" colorScheme="red" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserTable;
