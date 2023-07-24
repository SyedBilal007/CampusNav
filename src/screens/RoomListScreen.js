import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native';

const RoomListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const rooms = [
    'FF-105',
    'FF-106',
    'FF-107',
    'FF-108',
    'FF-109',
    'FF-110',
    'FF-111',
    'FF-112',
    'SF-238',
    'SF-239',
    'SF-240',
    'SF-241',
  ];

  const filteredRooms = rooms.filter((room) =>
    room.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('../assets/DSU2.png')} // Adjust the path accordingly if necessary
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Rooms"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#fff"
        />
        <View style={styles.roomList}>
          {filteredRooms.map((room, index) => (
            <TouchableOpacity
              key={index}
              style={styles.roomItem}
              onPress={() => navigation.navigate('ScanPage')}
            >
              <Text style={styles.roomText}>{room}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    color: '#fff',
  },
  roomList: {
    flex: 1,
  },
  roomItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    backgroundColor: '#990000', // Add background color for the room items
    borderRadius: 5,
    marginBottom: 5,
    opacity: 0.8,
  },
  roomText: {
    fontSize: 18,
    color: '#ffb84d',
    fontWeight: 'bold', // Add fontWeight to make the room numbers more prominent
  },
});

export default RoomListScreen;
