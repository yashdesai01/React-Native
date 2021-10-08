import React  from "react";
import { Text, View, StyleSheet } from "react-native"; 

export default function Home(){
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Hello World!</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        paddingTop: 300,
        fontSize: 50,
      }
});