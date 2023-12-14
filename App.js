
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Info from './components/Info';
import Password from './components/Password'
import ContactList from './components/ContactList'
import { NavigationContainer} from '@react-navigation/native';
import   {createNativeStackNavigator }from '@react-navigation/native-stack';
import Principal from './components/Principal'; 
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>


<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome',headerShown:false }}
      />

       <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ title: 'Welcome',headerShown:false }}
      />
        <Stack.Screen name="login" component={Login}  options={{ title: 'Welcome',headerShown:false }} />
      <Stack.Screen name="signup" component={Signup}  options={{ title: 'Welcome',headerShown:false}}/>
  
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{ title: 'principal',headerShown:false }}
      />
           <Stack.Screen name="contactlist" component={ContactList}  options={{ title: 'Welcome',headerShown:false}}/> 
           <Stack.Screen name="Password" component={Password}  options={{ title: 'Welcome',headerShown:false}}/> 
       <Stack.Screen name="info" component={Info}  options={{ title: 'Welcome',headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
      
    

   
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      width:'100%',
    backgroundColor: '#fff',
  
  },
});
