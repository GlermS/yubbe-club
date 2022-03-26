import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Principal from '../screens/Principal';
import LinkingConfiguration from './LinkingConfiguration';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Navigation({colorScheme}){
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Call" component={MeetingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Meetings" component={Meetings} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Principal"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        
      }}>
      <BottomTab.Screen
        name="Principal"
        component={Principal}
        options={({ navigation }) => ({
          title: 'Principal',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'mic';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              >
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

