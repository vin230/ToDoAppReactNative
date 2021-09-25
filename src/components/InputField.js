import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const InputFieldArea = (props) => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={props.onChangeText}
        value={props.value}
      />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.btnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    //backgroundColor:"yellow",
    margin: 18,
    borderRadius: 15,
    shadowColor: "#daf0ff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#45b6fe',
    borderRadius: 15,
    marginLeft: 10,
    shadowColor: "#45b6fe",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: 'white'
  }
})

export default InputFieldArea;