import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setTerm(val);
    onSearch(val);
  };

  return (
    <Input
      placeholder="Search users..."
      value={term}
      onChange={handleChange}
      size="md"
    />
  );
};

export default SearchBar;
