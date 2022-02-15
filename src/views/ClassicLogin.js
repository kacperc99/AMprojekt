import React from 'react';
import {Box, Button, FormControl, Input, Stack, Text, View, VStack, WarningOutlineIcon} from "native-base";

const ClassicLogin = ({navigation}) => {
    return (
        <View>
            <VStack space={1} alignItems="center">
            <Text fontSize={"lg"}>Classic Login</Text>
            </VStack>
            <Box alignItems="center">
                <Box w="90%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>User ID</FormControl.Label>
                            <Input type="user ID" defaultValue="12345" placeholder="userID" />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Incorrect username.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
            <Box alignItems="center">
                <Box w="90%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" defaultValue="12345" placeholder="password" />
                            <FormControl.HelperText>
                                Must be at least 6 characters.
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                At east 6 characters are required.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
            <Button onPress={() => navigation.navigate('Home')}>Zaloguj</Button>
        </View>
    );
};

export default ClassicLogin;