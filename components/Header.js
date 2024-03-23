import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
        < Image source = {{uri:'https://blog.texasbar.com/files/2011/02/ConstanceMims1.jpg'}}
        style={styles.userImage}/>
      <Text style={styles.headingText}>WhatsApp</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        marginTop: 80,
        justifyContent: 'center',
        alignItems:'center',
        width: 250,
       
        

    },
    headingContainer:{
       
        flex:1,
        flexDirection:'row',
       
        
       
        

    },
    headingText:{
        fontSize: 25,
        marginLeft: 5,
        padding: 8
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 10
    }
})