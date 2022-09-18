import { Button, StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
// import { countContext } from '../config/Contex';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub, addVal } from '../redux/actions';
export default function Count() {

   const [flag, setFlag] = useState(false);
   // const{count,setCount}=useContext(countContext);
   const [input,setInput] = useState(0);
   const count = useSelector((state) => state.count);
   const dispatch = useDispatch()
   function inc() {
      dispatch(add());
      // setCount(count+1);
   }

   function dec() {
      dispatch(sub());
   }
   function changeIn(val) {
      setInput(parseInt(val));
      // setInput(val); wrong
   }
   function setVal() {
      dispatch(addVal(input));
   }
   return (
      <View style={{ margin: 80 }}>
          
         <Modal animationType={"slide"}
            visible={flag}
            onRequestClose={() => { console.log("Modal has been closed.") }}>

            <View style={styles.modal}>
               <Text style={styles.text}>Modal is open!</Text>

               <TouchableHighlight onPress={() => { setFlag(false) }}>

                  <Text style={styles.text}>Close Modal</Text>
               </TouchableHighlight>
            </View>
         </Modal>

         <TouchableHighlight onPress={() => { setFlag(true) }}>
            <Text style={styles.text}>Open Modal</Text>
         </TouchableHighlight> 
         <Text>{count}</Text>
         <Button title='Increase' onPress={inc} />
         <Button title='Decrease' onPress={dec} />
         <TextInput
            style={{ border: 10, borderRadius: 20 }}
            placeholder='Enter the value'
            value={input}
            onChangeText= {changeIn}
            keyboardType='numeric'
         ></TextInput>
         <Button title='Add Value' onPress={setVal} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100
   },
   modal: {

      alignItems: 'center',
      backgroundColor: '#654245',
      padding: 100,
      elevation: 20,
      borderRadius: 20
   },
   text: {
      color: 'red',
      marginTop: 10,
   }
})