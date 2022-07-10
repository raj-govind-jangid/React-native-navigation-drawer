// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from '../screens/about';
import ContactUs from '../screens/contactus';
import Home from '../screens/home';
import Service from '../screens/service';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';

export default function AuthRoute() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} 
      options={({route, navigation}) => ({
        headerTitleAlign: 'center',
        headerRight: () => (
           <Button
             onPress={() => navigation.navigate('Home')}
             title="h"
           />
         )
       })}/>
      <Drawer.Screen name="About" component={About} options={({route, navigation}) => ({
      headerTitleAlign: 'center',
      headerRight: () => (
         <Button
           onPress={() => navigation.navigate('Home')}
           title="a"
         />
       )
     })}/>
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Service" component={Service} />
    </Drawer.Navigator>
  );
}

// const Stack = createStackNavigator();

// export default function AuthRoute() {
//   return (
//     <Stack.Navigator initialRouteName="Home" screenOptions={{
//       headerShown: false
//     }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//       <Stack.Screen name="ContactUs" component={ContactUs} />
//       <Stack.Screen name="Service" component={Service} />
//     </Stack.Navigator>
//   );
// }