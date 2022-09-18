import Product from './Product'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import { Entypo } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { cartContext, countContext } from '../config/Contex';
// import Count from './Count';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function Home() {
    const Tab = createBottomTabNavigator();
    // const [cart, setCart] = useState([]);//items in the cart
    // const [count, setCount] = useState(0);//items in the cart
    const { count, setCount } = useContext(countContext);

    return (
        // <cartContext.Provider value={{cart, setCart }}>
        // <countContext.Provider value={{count,setCount}}>
        //         <Tab.Navigator
        //             screenOptions={({ route }) => ({//taking the route of
        //                 tabBarIcon:
        //                     ({ focused, size, color }) => {
        //                         //focued is a flag to know the screen is opened
        //                         //size is the size of the icon
        //                         //color is the color of the icon
        //                         var icon = '';//icon name in the library
        //                         //decide the size and the color depends 
        //                         size = focused ? 30 : 24;
        //                         color = focused ? "orange" : 'grey';
        //                         if (route.name == 'Products') {
        //                             icon = 'shop';
        //                         }
        //                         else if (route.name == 'My Cart') {
        //                             icon = 'shopping-cart';
        //                         }
        //                         return <Entypo name={icon} size={size} color={color} />;
        //                     }
        //             })}
        //         >
        //             <Tab.Screen options={{ headerShown: false }} name='counter' component={Count} />
        //             <Tab.Screen options={{ headerShown: false }} name='Products' component={Product} />
        //             <Tab.Screen options={{ headerShown: false, tabBarBadge: cart.length }} name='My Cart' component={Cart} />
        //         </Tab.Navigator>
        // {/* </cartContext.Provider> */}
        // </countContext.Provider>

        <Provider store={store}>
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
                        }
                })}
            >
                {/* <Tab.Screen options={{ headerShown: false }} name='counter' component={Count} /> */}
                <Tab.Screen options={{ headerShown: false }} name='Products' component={Product} />
                <Tab.Screen options={{ headerShown: false, tabBarBadge: count }} name='My Cart' component={Cart} />
            </Tab.Navigator>
        </Provider>
    )
}
