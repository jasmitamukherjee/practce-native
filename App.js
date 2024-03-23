import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
export default function App() {
  return (
    <View style={styles.container} >
      <Header/>
      <Body/>
      <Footer/>
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
