import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthRoute from './routes/authRoute';
import UnAuthRoute from './routes/unauthRoute';
import 'react-native-gesture-handler';

export default function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ?
        <AuthRoute/> :
        <UnAuthRoute/>
      }
    </NavigationContainer>
  );
}
