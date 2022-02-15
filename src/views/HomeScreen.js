import React from 'react';
import {Box, Button, Text, View, VStack} from "native-base";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <VStack space={1} alignItems="center">
                <Text fontSize={"xl"}>Masz 500 euro</Text>
            </VStack>
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