import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RoomListScreen from './src/screens/RoomListScreen';
import ScanPage from './src/screens/ScanPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rooms" component={RoomListScreen} />
        <Stack.Screen name="ScanPage" component={ScanPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
