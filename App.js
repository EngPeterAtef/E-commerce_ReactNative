import { StyleSheet } from 'react-native';
import Product from './components/Product'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './components/Cart';
import { Entypo } from '@expo/vector-icons';
import { prodContext,cartContext } from './config/Contex';
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  // const [count,setCount] = useState(0);//number of items in the cart
  const [cart,setCart] = useState([]);//items in the cart
  // const [products, setProucts] = useState([]);

  const Tab = createBottomTabNavigator();
  // useEffect(() => {
  //   //it's async function so you have to use then or async and await
  //   axios.get("https://fakestoreapi.com/products").then((res) => {
  //     //after getting the data from the API set the array with the data
  //     setProucts(res.data);
  //   })
  // }, []);//empty array means it won't be excuted on updating anything
  return (
    
    <cartContext.Provider value={{cart,setCart}}>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({//taking the route of
            tabBarIcon:
              ({ focused, size, color }) => {
                //focued is a flag to know the screen is opened
                //size is the size of the icon
                //color is the color of the icon
                var icon = '';//icon name in the library
                //decide the size and the color depends 
                size = focused ? 30 : 24;
                color = focused ? "orange" : 'grey';
                if (route.name == 'Products') {
                  icon = 'shop';
                }
                else if (route.name == 'My Cart') {
                  icon = 'shopping-cart';
                }
                return <Entypo name={icon} size={size} color={color} />;
          }})}
        >
          {/* <Tab.Screen options={{ headerShown: false }} name='Count' component={Count}/> */}
          <Tab.Screen options={{ headerShown: false }} name='Products' component={Product} />
          <Tab.Screen options={{ headerShown: false ,tabBarBadge:cart.length}} name='My Cart' component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </cartContext.Provider>
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
