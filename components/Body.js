import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'

export default function Body() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        time: '9 pm'
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          time: '8 pm'
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          time: '9 am'
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          time: '6 pm'
        },
        {
            uid: 5,
            name: 'Jasmita Mukherjee',
            status: 'Save your deers',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
            time: '5 am'  
        },
          {
            uid: 6,
            name: 'Aditi Nayak',
            status: 'i love engineering',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
            time: '12 am'
        },
        {
            uid: 7,
            name: 'Anujesh Ansh',
            status: 'i know everything',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
            time: '12 am'
        },

        
      ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl,time}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{uri: imageUrl}}
                style={styles.userImage}
                />

                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
                <View style={styles.timeContainer}> 

                <View>
                    <Text>{time}</Text>
                </View>
                </View>

            </View>
        )) }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: 590,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        marginTop:5,
        padding : 8,
        borderRadius: 10,
        

    },
    userImage:{
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight : 14

    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        

    },
    userStatus:{
        fontSize: 12,
        color : 'black'

    },
    timeContainer:{
        
    }
})