import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const ScanPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/DSU2.png')} // Adjust the path accordingly if necessary
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.scanText}>Scan Page</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Rooms')}
        >
          <Text style={styles.buttonText}>Go back to Rooms</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scanText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: 'maroon',
    padding: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScanPage;
