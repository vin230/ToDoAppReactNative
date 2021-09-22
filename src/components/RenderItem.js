import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const RenderItem = (props) => {
    return (
        props.data.map((data, index) => {
            return(
            <View style={styles.conatiner} key={index}>
                <Text style={styles.text}>{data}</Text>
                <TouchableOpacity style={styles.delete}>
                    <Text style={styles.deletTxt}>X</Text>
                </TouchableOpacity>
            </View>
            )
        })
    )
}

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: "#daf0ff",
        marginHorizontal:10,
        marginVertical:5,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20
    },
    delete: {
        position: 'absolute',
        right: 20
    },
    deletTxt: {
        fontSize: 18,
        color: 'red'
    }
})

export default RenderItem;