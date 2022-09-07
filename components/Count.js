import { Button, StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native'
import React,{useContext,useState} from 'react'
import { countContext } from '../config/Contex';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCount, setCountValue } from './redux/actions';
export default function Count() {

   const [flag, setFlag] = useState(false);
   // const{count,setCount}=useContext(countContext);

   /*const count=useSelector((state)=>state.count);
   const dispatch=useDispatch()
    */
   function add() {
      //dispatch(setCountValue(5));
      setCount(count+1);
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
         <Button title='Increase' onPress={() => add()} />
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
      color: '#3f2949',
      marginTop: 10
   }
})