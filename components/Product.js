import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartContext,prodContext } from '../config/Contex';

export default function Product() {
  //array to hold all the products
  const [products, setProucts] = useState([]);
  const{cart,setCart}=useContext(cartContext);
  // const{products,setProucts}=useContext(prodContext);
  //to load the data from API one time at the beginning
  useEffect(() => {
    //it's async function so you have to use then or async and await
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //after getting the data from the API set the array with the data
      setProucts(res.data);
    })
  }, []);//empty array means it won't be excuted on updating anything
  
  function addToCart (item) {
    //add the item to my cart
    setCart([...cart,item]);
    //remove the item from the store
  //   setProucts(
  //     products.filter(function (val) {
  //         return val != item;
  //     })
  // );
  }
  // async function setStorage () {
  //   await AsyncStorage.setItem("prod",JSON.stringify(cart));
  // }
  // useEffect(()=>{
  //   setStorage();
  // },[cart]);
  return (
    <View>
      <View style={styles.titv}>
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
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{obj.item.title}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginLeft:10}}>
            <View>
              <Text>Price: {obj.item.price}</Text>
              <Text>Rate: {obj.item.rating.rate}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>addToCart(obj.item)}>
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
    // height: 200,
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
    color: "white",
    paddingLeft:20,
  },
  titv:{
    alignItems:'stretch',
    justifyContent:'center',
    marginTop:30
  }
})