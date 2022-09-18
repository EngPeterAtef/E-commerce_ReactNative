import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { cartContext } from '../config/Contex';
import { countContext } from '../config/Contex';
import { useDispatch, useSelector } from 'react-redux';
import { delCart } from '../redux/actions';

export default function Cart() {
    //using redux
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { count, setCount } = useContext(countContext);

    // const { cart, setCart } = useContext(cartContext);
    //AsyncStorage Code
    // useEffect(() => {
    //     getStorage();
    // }, [cart]);

    // async function setStorage() {
    //     await AsyncStorage.setItem("prod", JSON.stringify(cart));
    // }
    // async function getStorage() {
    //     var data = await AsyncStorage.getItem("prod");
    //     setCart(JSON.parse(data));
    // }
    function removeFromCart(ind) {
        //remove the item from my cart
        dispatch(delCart(ind));//using redux
        setCount(count-1);
        // setCart(
        //     cart.filter(function (val, i) {
        //         return ind != i;
        //     })
        //     );
    }
    return (
        <View>
            <View style={styles.titv}>
                <Text style={styles.tit}>My Cart</Text>
            </View>
            <FlatList
                numColumns={2}//to have 2 products in the row
                data={cart}
                keyExtractor={(item, index) => index} //it returns the index to be the key
                renderItem={(obj) => <View style={styles.card}>
                    <View style={{ top: -25, alignItems: "center" }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 50 }}
                            source={{ uri: obj.item.image }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{obj.item.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginLeft: 10 }}>
                        <View>
                            <Text>Price: {obj.item.price}</Text>
                            <Text>Rate: {obj.item.rating.rate}</Text>
                            <Text>Quantity: {obj.item.quantity}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => removeFromCart(obj.index)}>
                                <Ionicons name="remove-circle-outline" size={25} color="#ff7700" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    card:
    {
        width: 175,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 40,
        borderRadius: 15,
        elevation: 20,
        backgroundColor: "white",
    },
    x:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 10

    },
    tit: {
        backgroundColor: 'orange',
        fontSize: 25,
        fontWeight: 'bold',
        height: 35,
        color: "white",
        paddingLeft: 20,
    },
    titv: {
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 30
    }
})