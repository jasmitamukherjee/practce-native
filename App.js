import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
export default function App() {
  return (
    <View style={styles.container} >
      <Header/>
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbf9e',
   
    backgroundColor: '#9ec48b'
  },
});
