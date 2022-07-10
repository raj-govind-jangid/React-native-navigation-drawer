import { View, Text } from "react-native";

export default function ContactUs({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contact Us Page</Text>
      <Text onPress={()=>{ navigation.navigate('Login') }}>Login</Text>
      <Text onPress={()=>{ navigation.navigate('Home') }}>Home</Text>
      <Text onPress={()=>{ navigation.navigate('About') }}>About</Text>
      <Text onPress={()=>{ navigation.navigate('ContactUs') }}>ContactUs</Text>
      <Text onPress={()=>{ navigation.navigate('Service') }}>Service</Text>
    </View>
  );
}