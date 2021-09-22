import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const RenderItem = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>Hello, world!</Text>
      <TouchableOpacity style={styles.delete}>
      <Text style={styles.deletTxt}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:  {
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor:"#daf0ff",
        margin:15,
        borderRadius:10,
      },
      text:{
          fontSize:18,
          marginVertical:10,
          marginHorizontal:10
      },
      delete:{
          position:'absolute',
          right:20
      },
      deletTxt:{
          fontSize:18,
          color:'red'
      }
})

export default RenderItem;