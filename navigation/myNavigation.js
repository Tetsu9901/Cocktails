import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Iconicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import FavScreen from './screens/Fav';

const homeName = 'Cocktails';
const favName = 'Favoris';

const Tab = createBottomTabNavigator();

function MyNavigation() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === favName) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }
                        return <Iconicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={favName} component={FavScreen} />
            </Tab.Navigator>
    );
}

export default MyNavigation;