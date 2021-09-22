import React,{useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RenderItem from './src/components/RenderItem';
import InputField from './src/components/InputField';

function HelloWorldApp() {
  const [data, setData] = useState(["cgvcg"]);
  return (
    <View style={styles.container}>
      <View style={styles.viewCont}>
        <Text style={styles.title}>TODAY'S TASKS</Text>
        <ScrollView>
          <RenderItem data={data} />
        </ScrollView>
      </View>
      <InputField
        onPress={() => alert('pressed')}
      />
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
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5
  },
  viewCont: {
    flex: 1,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 25,
  }
})

export default HelloWorldApp;