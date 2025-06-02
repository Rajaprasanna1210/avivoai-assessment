// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  VStack,
  Button,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import UserTable from './components/UserTable';
import SearchBar from './components/SearchBar';
import AddUserButton from './components/AddUserButton';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users/get_all_users');
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const results = users.filter((u) =>
      (`${u.firstName} ${u.lastName}`.toLowerCase().includes(lowerTerm) ||
        (u.companyName || '').toLowerCase().includes(lowerTerm) ||
        (u.role || '').toLowerCase().includes(lowerTerm) ||
        (u.country || '').toLowerCase().includes(lowerTerm))
    );
    setFilteredUsers(results);
  };

  const handleDelete = (id) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    setFilteredUsers(updated);
  };

  const handleAddUser = (newUser) => {
    const updated = [newUser, ...users];
    setUsers(updated);
    setFilteredUsers(updated);
  };

  return (
    <Box p={6} maxW="1000px" mx="auto" bg="white" borderRadius="xl" boxShadow="xl">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg" color="teal.700">User List</Heading>
        <Text fontSize="sm" fontWeight="medium" color="gray.500">Powered by Avivo.ai</Text>
      </Flex>

      <Divider mb={4} />

      <VStack spacing={4} align="stretch">
        <SearchBar onSearch={handleSearch} />
        <Flex gap={3}>
          <AddUserButton onAdd={handleAddUser} />
          <Button onClick={fetchUsers} colorScheme="blue" variant="outline">Refresh</Button>
        </Flex>
        <UserTable users={filteredUsers} onDelete={handleDelete} />
      </VStack>
    </Box>
  );
};

export default App;
