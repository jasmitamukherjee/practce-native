import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>CHATS</Text>
      <Text style={styles.item}>STATUS</Text>
      <Text style={styles.item}>CALLS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    item:{
        backgroundColor:'#c7edce',
        padding: 7,
        borderRadius: 20
    }
})