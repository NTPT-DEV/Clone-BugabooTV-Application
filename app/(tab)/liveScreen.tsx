import { StyleSheet, Text, View } from 'react-native'
const LiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Live Screen</Text>
    </View>
  )
}
export default LiveScreen
const styles = StyleSheet.create({
  container : {
    flex : 1 , 
    justifyContent : 'center' , 
    alignItems : 'center'
  }
})