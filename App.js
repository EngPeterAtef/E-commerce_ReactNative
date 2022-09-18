import { StyleSheet } from 'react-native';
import Home from "./components/Home";
import Profile from './components/profile';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { countContext } from './config/Contex';
import { useState } from 'react';
export default function App() {
  // const [count,setCount] = useState(0);//number of items in the cart
  // const [products, setProucts] = useState([]);
  const Stack = createNativeStackNavigator();
  const [count, setCount] = useState(0);//items in the cart

  // useEffect(() => {
  //   //it's async function so you have to use then or async and await
  //   axios.get("https://fakestoreapi.com/products").then((res) => {
  //     //after getting the data from the API set the array with the data
  //     setProucts(res.data);
  //   })
  // }, []);//empty array means it won't be excuted on updating anything
  return (
  <countContext.Provider value={{count,setCount}}>
        <NavigationContainer style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Stack.Navigator>
          <Stack.Screen name='LogIn' component={Profile}></Stack.Screen>
          <Stack.Screen name='SignUp' component={Signup}></Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </countContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
