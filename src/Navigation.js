import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Welcome from './pages/Welcome';


const Stack = createStackNavigator();
function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ presentation: 'card', headerShown: false, animation: 'fade' }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ presentation: 'card', headerShown: false, animation: 'fade' }} />
            <Stack.Screen name="Cart" component={Cart} options={{ presentation: 'card', headerShown: false, animation: 'fade' }} />
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

