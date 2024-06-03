import { useUser } from '@clerk/clerk-expo';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
    const { user } = useUser(); // Retrieve user information

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {user && user.imageUrl && (
                    <Image
                        source={{ uri: user.imageUrl }}
                        style={styles.userImage}
                    />)}
                    <View>
                        <Text style={{color:Colors.WHITE}}>Welcome</Text>
                        <Text style={{color:Colors.WHITE, fontSize: 20}} >{user?.fullName}</Text>
                    </View>
            </View>
            <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap:10,
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
});
