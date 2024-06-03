import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import Login from './Screens/LoginScreen/Login';

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

const Index = () => {
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
