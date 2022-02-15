import React, {useState} from 'react';
import {Box, Button, FormControl, Input, Stack, Text, View, VStack} from "native-base";
import axios from "axios";
import {TextInput} from 'react-native-paper';
const RegisterUser = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://10.0.2.2:3000/users', {
                username: username,
                password: password,
                money: 0
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View>
            <VStack space={1} alignItems="center">
                <Text fontSize={"lg"}>Classic Login</Text>
            </VStack>
            <Box alignItems="center">
                <Box w="90%" maxWidth="300px">
                    <FormControl mb="5">
                        <TextInput
                            label="Username"
                            value={username}
                            onChangeText={setUsername}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                        <FormControl.HelperText>
                            Enter username
                        </FormControl.HelperText>
                    </FormControl>
                    <FormControl mb="5">
                        <TextInput
                            label="Password:"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                        <FormControl.HelperText>
                            Enter password
                        </FormControl.HelperText>
                    </FormControl>
                    <Button style={{height: 50}} onPress={() => handleSubmit()}>
                        Submit
                    </Button>
                </Box>
            </Box>
            <Box alignItems="center">
                <Box w="90%" maxWidth="300px">

                </Box>
            </Box>
            <Button onPress={() => navigation.navigate('TouchScreen')}>Zarejestruj</Button>
        </View>
    );
};

export default RegisterUser;