import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={{flex:1 ,backgroundColor:"plum"}}>
      <View
      style={{width:200 ,height:200,backgroundColor:"lightblue"}}
      ></View>
      <View>
  <Text>
    THIS IS NIVETHIGA VEERASINGAM
  </Text>
</View>
      
      <View
      style={{width:200 ,height:200,backgroundColor:"lightgreen"}}
      ></View>

      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
