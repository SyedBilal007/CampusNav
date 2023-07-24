import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChange }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search rooms..."
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default SearchBar;
