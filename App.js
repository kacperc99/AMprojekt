import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/views/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import LastTransactions from "./src/views/LastTransactions";
import PayingScreen from "./src/views/PayingScreen";
import RegisterUser from "./src/views/RegisterUser";
import ClassicLogin from "./src/views/ClassicLogin";
import TouchScreen from "./src/views/TouchScreen";

const Stack = createStackNavigator();

export default function App() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fac',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="LastTransactions" component={LastTransactions} />
                    <Stack.Screen name="PayingScreen" component={PayingScreen} />
                    <Stack.Screen name="ClassicLogin" component={ClassicLogin} />
                    <Stack.Screen name="RegisterUser" component={RegisterUser} />
                    <Stack.Screen name="TouchScreen" component={TouchScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}


