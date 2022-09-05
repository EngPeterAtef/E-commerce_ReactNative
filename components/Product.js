import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Product() {
  //array to hold all the products
  const [products, setProucts] = useState([]);
  const [cart, setCart] = useState([]);

  //to load the data from API one time at the beginning
  useEffect(() => {
    //it's async function so you have to use then or async and await
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //after getting the data from the API set the array with the data
      setProucts(res.data);
    })
  }, []);//empty array means it won't be excuted on updating anything
  function addToCart (ind) {
    setCart([...cart,products[ind]]);
    console.log("Added to cart");
  }
  async function setStorage () {
    await AsyncStorage.setItem("prod",JSON.stringify(cart));
  }
  useEffect(()=>{
    setStorage();
  },[cart]);
  return (
    <View>
      <View>
        <Text style={styles.tit}>Online Store</Text>
      </View>
      <FlatList
        numColumns={2}//to have 2 products in the row
        data={products}
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
              <TouchableOpacity onPress={()=>addToCart(obj.index)}>
                <Ionicons name="ios-add-circle-outline" size={25} color="#ff7700" />
              </TouchableOpacity></View>
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
    paddingLeft: 110,
    marginTop:30,
  }
})