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
            {loading ?
                <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                        Loading
                    </Heading>
                </HStack>
                 :
                <View>
					<Touch onLongPress={() => touchIdAuth.bind()} delayPressIn={0} >
						<Circle bgColor="#1e1e1e">
							<Circle bgColor="#5196f405">
								<Circle bgColor="#5196f410">
									<Circle bgColor="#5196f430">
										<TouchButton>
											<MaterialIcons name="fingerprint" size={64} color="#ffffff" />
										</TouchButton>
									</Circle>
								</Circle>
							</Circle>
						</Circle>
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
            }
        </View>
    );
};

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.View`
    background-color: ${(props) => props.bgColor};
    padding: 32px;
    border-radius: 999px;
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
const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;
export default TouchScreen;
