import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Square(props) {

    return (
        <View style={[{backgroundColor: props.color},styles.Square]}>
       <Text style={styles.square}>{props.title}</Text>
        </View>
      )
      
    }

const styles = StyleSheet.create({
  Square: {
    height: 90,
    width: 90,
    justifyContent: "center",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    textAlign: "center",
  },
});
export default Square;