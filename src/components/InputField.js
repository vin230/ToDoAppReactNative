import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const InputFieldArea = (props) => {
  return (
    <View style={styles.conatiner}>
      <TextInput 
      style={styles.input}
      placeholder="Type here..."
      />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
         <Text style={styles.btnTxt}>+</Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:  {
        flexDirection:'row',
        //backgroundColor:"yellow",
        margin:18,
        borderRadius:15,
      },
      input:{
          flex:1,
          backgroundColor:'white',
          borderRadius:15,
          paddingHorizontal:10
      },
      button:{
          justifyContent:'center',
          backgroundColor:'#45b6fe',
          borderRadius:15,
          marginLeft:10,
      },
      btnTxt:{
          fontSize:30,
          fontWeight:'bold',
          marginHorizontal:15,
          color:'white'
      }
})

export default InputFieldArea;