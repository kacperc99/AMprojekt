import React, {useEffect, useState} from 'react';
import {Button, Container, Heading, HStack, Spinner, Text, View} from "native-base";
import styleSheet from "react-native-web/dist/exports/StyleSheet";
import TouchID from 'react-native-touch-id';
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const optionalConfigObject = {
	title: "Authentication Required", // Android
	color: "ffffff", // Android,
	fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
}


const touchIdAuth = () => {
	TouchID.isSupported()
	  .then(biometryType => {
		// Success code
		if (biometryType === 'FaceID') {
		  console.log('FaceID is supported.');
		} else {
		  console.log('TouchID is supported.');
		  TouchID.authenticate("Authenticate", optionalConfigObject)
			.then(success => {
			  Alert.alert('Authenticated Successfully');
			  navigation.navigate('HomeScreen');
			})
			.catch(error => {
			  Alert.alert('Authentication Failed', error.toString());
			});
		}
	  })
	  .catch(error => {
		// Failure code
		console.log(error);
	  });
}

const TouchScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])

    return (
                <View>
			<Touch onLongPress={() => touchIdAuth.bind()} delayPressIn={0} >

									<TouchButton>
										<MaterialIcons name="fingerprint" size={64} color="#ffffff" />
									</TouchButton>
			</Touch>				

                    <Button
                        onPress={() => navigation.navigate('ClassicLogin')}>
                        Classic login
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('RegisterUser')}>
                        Registration
                    </Button>
                </View>
    );
};

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const TouchButton = styled.View`
    background-color: #5196f4;
    padding: 8px;
    border-radius: 100px;
`;

const Button = styled.View`
	padding:10px;
	border-radius: 100 px;

`;

const View = styled.View`
	padding: 10px;
	width: 50%;
	border-width: 1px;
	border-style: solid;
	border-color: #cc0000;
	background-color: #000000;
`;
export default TouchScreen;
