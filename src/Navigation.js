import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';


const Stack = createStackNavigator();
function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ presentation: 'card', headerShown: false, animation: 'fade' }} />
        </Stack.Navigator>
    ); 
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
}

export default Navigation

