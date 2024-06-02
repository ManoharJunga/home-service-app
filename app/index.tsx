import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Login from './Screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import * as SecureStore from "expo-secure-store";

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
const index = () => {
    return (
        <ClerkProvider
        tokenCache={tokenCache}
         publishableKey='pk_test_dGVhY2hpbmctZmlsbHktOTguY2xlcmsuYWNjb3VudHMuZGV2JA'>
            <View >
                {/* Sign In Component */}
                <SignedIn>
                    <Text>You are Signed in</Text>
                </SignedIn>
                 {/* SignOut */}
                <SignedOut>
                <Login /> 
                </SignedOut>
                <StatusBar style="auto" />
            </View>
        </ClerkProvider>

    )
}

export default index

const styles = StyleSheet.create({
})