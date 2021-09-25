import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RenderItem from './src/components/RenderItem';
import InputField from './src/components/InputField';

function HelloWorldApp() {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState();

  function onChange(text) {
    var newTask = text
    setTemp(newTask);
  }

  function saveTask() {
    setData(prevState => [...prevState, temp])
    setTemp();
  }

  function deleteTask(item) {
   const filtereddata = data.filter((data)=>{
      return data !== item 
    })
    setData(filtereddata);
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewCont}>
        <Text style={styles.title}>TODAY'S TASKS</Text>
        { (data.length !== 0) ?
        <ScrollView>
          <RenderItem
            data={data}
            onPressItem={deleteTask}
          />
        </ScrollView>  :
        <View style={styles.noData}>
          <Text style={styles.noText}>No Task's Found</Text>
        </View>
        }
      </View>
      <InputField
        onPress={saveTask}
        onChangeText={onChange}
        value={temp}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#daf0ff'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    borderBottomWidth:0.5
  },
  viewCont: {
    flex: 1,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  noData:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  noText:{
    fontSize:14
  }
})

export default HelloWorldApp;