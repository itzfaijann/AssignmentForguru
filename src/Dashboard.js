import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './tabs/Home';
import Setting from './tabs/Setting';
import Profile from './tabs/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'black' },
        })}
      >
        <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Tab.Screen name="Settings" options={{headerShown: false}} component={Setting} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Dashboard;
