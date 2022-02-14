import React, {useEffect, useState} from 'react';
import {Button, Heading, HStack, Spinner, Text, View} from "native-base";
import styleSheet from "react-native-web/dist/exports/StyleSheet";

const TouchScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])

    return (
        <View>
            {loading ?
                <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                        Loading
                    </Heading>
                </HStack>
                 :
                <View>
                    <Button
                        onPress={() => navigation.navigate('Home')}
                    >
                        To nie jest skaner linii papilarnych ale udawaj że jest
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('ClassicLogin')}>
                        Classic login
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('RegisterUser')}>
                        Registration
                    </Button>
                </View>
            }
        </View>
    );
};

export default TouchScreen;