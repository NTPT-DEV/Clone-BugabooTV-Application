import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Index() {

  useEffect(() =>{
    setTimeout(() => {
      router.replace('/home');
    }, 500);
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#fff' }}>
      <StatusBar hidden={true} />
      <Image source={require('../assets/images/logos/logoBugaboo.png')} style={{width:120, height:120, resizeMode:'contain'}} />
    </View>
  );
}
