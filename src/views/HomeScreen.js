import React from 'react';
import {Box, Button, Text, View} from "native-base";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Box>
                <Text>Home</Text>
                <Button onPress={() => navigation.navigate('LastTransactions')}>Last transactions</Button>
                <Button onPress={() => navigation.navigate('PayingScreen')}>Pay</Button>
                <Button onPress={() => navigation.navigate('TouchScreen')}>Log out</Button>
            </Box>
        </View>
    );
};

export default HomeScreen;