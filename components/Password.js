 import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button,Platform, Image,Pressable, SafeAreaView, StyleSheet, Text, TextInput, View ,ActivityIndicator, ActivityIndicatorComponent,KeyboardAvoidingView,BackHandler} from "react-native";
import WavyBackground from "react-native-wavy-background";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';


const Password = ( {navigation }) => {
  const [text, setText] = React.useState(null);
  const [showAlert, setshowalert] = React.useState(false);
   const [showAlert2, setshowalert2] = React.useState(false);
   const [Email, onChangeEmail] = React.useState("");

   
const inputlog = React.useRef();



let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  const log=async() => {


var body = {
    email:Email,
   
  }
  axios({
    method: 'post',
    url: 'https://www.ajinkriw.co/api/forgot_password/',
    data: body
  }).then(function (res) {
if(res.data.message.length>25){
setshowalert(true)
}
else{
  setshowalert2(true)
}
  
  }).catch(function(err) {
//alert(err)

  });




  };

 







 


  










  return (       
    
    <>

  
    <View  style={{height:"100%",backgroundColor: "white" }}>   



     <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="Password reset email has been sent to your email address"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="login"
          confirmText="login"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
          navigation.navigate(
    {
      name: 'login',
}
  )
          }}
        />


     <AwesomeAlert
          show={showAlert2}
          showProgress={false}
          title="Error"
          message="User does not exist!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="try again"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert2(false)
          }}
        />




       <Image
     style={{ width:150,height:80,marginLeft:'35%',marginTop:'15%'
   
   }}
        source={require("../assets/Corporate_Business_Proposal_Presentation-removebg-preview.png")}
      />



      

      <TextInput
        style={{
  marginLeft:'5%',width:'90%',padding:"0%", borderColor:'#F0F0F0',height:'7%',paddingLeft:'3%',
borderRadius:5,marginTop:'20%',
    fontSize:18,fontFamily:"Poppins_400Regular",color:'black',
    borderWidth:1
    
    }}
        onChangeText={onChangeEmail}
        value={Email}
         placeholder="Email"
   placeholderTextColor="#BCBCBC" 
      
     />
    





  

    
      <Pressable style={{backgroundColor:'#0E64F1',width:'90%',marginLeft:'5%',borderRadius:5,padding:'2.5%',marginTop:'3%'
     }} ref={inputlog} onPress={()=>{
         log()
    } } 

>   
           

  
    <Text   style={{color:'white',fontSize:18 ,textAlign:'center',borderRadius:5, fontFamily:'Poppins_500Medium'}} >Reset</Text>

  
  </Pressable>
     
  <Text  style={{marginLeft:"5%",width:"85%",textAlign:'center',padding:"2.5%", fontFamily:"Poppins_400Regular",marginTop:'3.5%',

    fontSize:15}}>Already have a account? <Text  style={{color:'#048CFD'}} onPress={()=>
  
  navigation.navigate(
    {
      name: 'login',
}
  )
  } >Login</Text></Text>

   


 


</View>
</>
  )
}
  

export default Password;