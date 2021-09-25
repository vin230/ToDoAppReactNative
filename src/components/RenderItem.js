import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const RenderItem = (props) => {
    const DATA = props.data;
    console.log(Object.entries(DATA).length);
    return (
        DATA.slice(0).reverse().map((data, index) => {
            return (
                <View style={styles.conatiner} key={index}>
                    <Text style={styles.text}>{data}</Text>
                    <TouchableOpacity style={styles.delete} onPress={() => props.onPressItem(data)}>
                        <Text style={styles.deletTxt}>X</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    );
}

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: "#daf0ff",
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: "#daf0ff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 30
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