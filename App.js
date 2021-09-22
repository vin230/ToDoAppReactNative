import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RenderItem from './src/components/RenderItem';
import InputField from './src/components/InputField';

function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <View style={styles.viewCont}>
       <RenderItem/>
      </View>
      <View style={styles.viewCont2}>
       <InputField/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: '#daf0ff'
  },
  viewCont:{
    flex:1,
    margin:15,
    backgroundColor:'white',
    borderRadius:25,
  },
  viewCont2:{
    flex:0.15,
    //backgroundColor:'pink',
    justifyContent:'center'
  }
})

export default HelloWorldApp;