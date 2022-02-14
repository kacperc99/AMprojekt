import React from 'react';
import {Box, Center, Text, View, VStack} from "native-base";
import { Progress } from 'native-base';

const LoadingScreen = () => {
    return (
        <Center w="100%">
            <Box w="90%" maxW="400">
                <VStack space="md">
                    <VStack mx="4" space="md">
                        <Progress colorScheme="primary" value={35} />
                        <Progress colorScheme="secondary" value={45} />
                        <Progress colorScheme="emerald" value={55} />
                        <Progress colorScheme="warning" value={65} />
                        <Progress colorScheme="light" value={75} />
                    </VStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default LoadingScreen;