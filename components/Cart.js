import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
    const [cart, setCart] = useState([]);
    function removeFromCart (ind) {
        
    }
    async function getStorage () {
        var data = await AsyncStorage.getItem("prod");
        setCart(JSON.parse(data));
    }
    useEffect(()=>{
        getStorage();
    },[cart]);
    return (
        <View>
            <View>
                <Text style={styles.tit}>My Cart</Text>
            </View>
            <FlatList
                numColumns={2}//to have 2 products in the row
                data={cart}
                renderItem={(obj) => <View style={styles.card}>
                    <View style={{ top: -25, alignItems: "center" }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 50 }}
                            source={{ uri: obj.item.image }} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{obj.item.category}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", margin: 10 }}>
                        <View>
                            <Text>{obj.item.price}</Text>
                            <Text>{obj.item.rating.rate}</Text>
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
        height: 200,
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
        paddingLeft: 120,
        marginTop: 30,
    }
})