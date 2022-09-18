import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    //this function to check if the name is stored before
    //if it's not so error msg to sign up
    async function goToList() {
        try {
            var user = await AsyncStorage.getItem("sign");//get the data from the local storage
            console.log(user);
            if (!user) {//if the user not found
                ToastAndroid.show("Please SingUp", ToastAndroid.LONG);
            }
            else {
                user = JSON.parse(user);
                if (user.userEmail == email && user.userPass == pass) {
                    setEmail("");
                    setPass("");
                    props.navigation.navigate('Home', user);
                }
                else{
                    ToastAndroid.show("This account not found, please SingUp", ToastAndroid.LONG);
                }
            }
        }
        catch (e) {
            console.log("error : " + e);
        }
    }
    //go to sign up
    function goToSignUp() {
        props.navigation.navigate('SignUp');
    }
    function takeEmail(val) {
        setEmail(val);
    }
    function takePass(val) {
        setPass(val);
    }


    return (
        <View style={styles.cont}>
            <Text style={styles.title}>Welcome !!</Text>
            <View>
                <Text style={styles.personal}>Email: </Text>
                <TextInput
                    placeholder="Enter Your Email"
                    onChangeText={takeEmail}
                    value={email}
                ></TextInput>
                <Text style={styles.personal}>PassWord: </Text>
                <TextInput
                    placeholder="Enter Your PassWord"
                    onChangeText={takePass}
                    value={pass}
                    textContentType='password'
                    secureTextEntry={true}
                ></TextInput>
            </View>
            <Button title="LogIn" onPress={goToList} />
            <TouchableOpacity onPress={goToSignUp}>
                <Text style={styles.signup}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:
    {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 25,
        elevation: 30,
        backgroundColor: "white",
        width: 300,
        height: 500,
        marginHorizontal: 50,
        marginVertical: 50,
    },
    title: {
        color: "#1BFFFF",
        fontSize: 20,
        fontWeight: 'bold',
    },
    data: {
        color: "#1BFFFF",
        fontSize: 35,
    },
    name:
    {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    personal:
    {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 50,
    },
    input: {
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 2,
        marginVertical: 5,
    },
    error: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "red",
    },
    signup: {
        fontSize: 'italic',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#1157AA',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        borderStyle: 'dashed',
        padding: 5,
    }
});

export default Profile;