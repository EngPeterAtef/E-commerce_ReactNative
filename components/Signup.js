import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signup(props) {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");

  //go to sign up
  async function goToLogIn() {
    if (user.userName.length == 0 || user.userEmail.length == 0 || user.userPass.length == 0) {
      setErr("Please Enter All Needed Data");
    }
    else {
      setErr("");
      console.log("from signup: "+ JSON.stringify(user));
      await AsyncStorage.setItem("sign", JSON.stringify(user));
      props.navigation.navigate('LogIn', user);
    }
  }
  function takeName(val) {
    setUser({...user,userName: val});
  }
  function takeEmail(val) {
    setUser({...user,userEmail: val});
  }
  function takePass(val) {
    setUser({...user,userPass: val});
  }
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Welcome To our ToDo ApP !!</Text>
      <View>
        <Text style={styles.personal}>What is your Name? </Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={takeName}
          value={user.name}
        ></TextInput>
        <Text style={styles.personal}>What is your Email? </Text>
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={takeEmail}
          value={user.userEmail}
        ></TextInput>
        <Text style={styles.personal}>Create a PassWord </Text>
        <TextInput
          placeholder="Enter Your PassWord"
          onChangeText={takePass}
          value={user.userPass}
          textContentType='password'
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.error}>{err}</Text>
      </View>
      <Text style={styles.data}>Hello {user.userName} !!</Text>
      <TouchableOpacity onPress={goToLogIn}>
        <Text style={styles.signup}>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    elevation: 30,
    backgroundColor: "white",
    width: 300,
    marginHorizontal: 50,
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
    fontSize: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    borderStyle: 'dashed',
    padding: 5,
    color: "white",
  }
});

export default Signup;