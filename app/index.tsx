import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import Login from './Screens/LoginScreen/Login';
import { useFonts } from 'expo-font';

const Index = () => {
    // Call useFonts hook inside the functional component
    const [fontsLoaded] = useFonts({
        'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
        'outfit-light': require('../assets/fonts/Outfit-Light.ttf'),
        'outfit-SemiBold': require('../assets/fonts/Outfit-SemiBold.ttf'),
    });

    // Define tokenCache object inside the functional component
    const tokenCache = {
        async getToken(key) {
            try {
                return SecureStore.getItemAsync(key);
            } catch (err) {
                return null;
            }
        },
        async saveToken(key, value) {
            try {
                return SecureStore.setItemAsync(key, value);
            } catch (err) {
                return;
            }
        },
    };

    return (
        <ClerkProvider
            tokenCache={tokenCache}
            publishableKey='pk_test_dGVhY2hpbmctZmlsbHktOTguY2xlcmsuYWNjb3VudHMuZGV2JA'>
            <NavigationContainer independent={true}>
                <View style={styles.container}>
                    <SignedIn>
                        <TabNavigation />
                    </SignedIn>
                    <SignedOut>
                        <Login />
                    </SignedOut>
                    <StatusBar style="auto" />
                </View>
            </NavigationContainer>
        </ClerkProvider>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
