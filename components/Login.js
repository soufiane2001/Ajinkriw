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


const Login = ( {navigation }) => {
  const [text, setText] = React.useState(null);
  const [showAlert, setshowalert] = React.useState(false);
   const [Email, onChangeEmail] = React.useState("");
  const [Password, onChangepassword] = React.useState("");
    const [show, setshow] = React.useState(false);
const inputlog = React.useRef();
  const item = [
       { label: 'All', value: 'all' },
    { label: 'Casablanca', value: 'casablanca' },
    { label: 'Rabat', value: 'rabat' },
    { label: 'Fes', value: 'fes' },
    { label: 'Meknes', value: 'meknes' },
  ];


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

//alert();
setshow(true)
/*navigation.navigate(
    {
      name: 'Principal',
    })
*/


 var body = {
    email:Email,
    password:Password
  }
  axios({
    method: 'post',
    url: 'https://www.ajinkriw.co/api/jwt/create/',
    data: body
  }).then(function (res) {
 setText(text=>res.data.access)

    
  
  }).catch(function(err) {
//alert(err)
setshow(false)
setshowalert(true)
  });


if(text!=null){

//await AsyncStorage.setItem("x",text);
  //await AsyncStorage.setItem("num",0);
await AsyncStorage.setItem("email",Email);


 }


  };

  const entre=async() => {

//alert();
/*navigation.navigate(
    {
      name: 'Principal',
    })
*/


 //const value = await AsyncStorage.getItem('x');
//if(value){


await AsyncStorage.setItem("x",text);
await AsyncStorage.setItem("email",Email);
//}


//await AsyncStorage.setItem("email",Email);


setTimeout(()=>{
navigation.navigate('Principal', {
  animated: true
})
setshow(false)
}


  ,3500)






 


  };




React.useEffect(() => {
  


if(text!=null){
setTimeout(()=>{
  entre()
navigation.navigate(
    {
      name: 'Principal',
    })

}
  
  ,1500)
  
  
  
  }
 
 
  const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
 
 
 
  },[text]);





  return (       
    
    <>

  
    <View  style={{height:"100%",backgroundColor: "white" }}>   



     <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="email or password incorrect"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="try again"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert(false)
          }}
        />
       <Image
     style={{ width:130,height:60,marginLeft:'35%',marginTop:'15%'
   
   }}
        source={require("../assets/Corporate_Business_Proposal_Presentation-removebg-preview.png")}
      />

     <Text style={{color:'#0269C4',fontSize:28,textAlign:'center',marginTop:'0%',fontFamily:'Poppins_600SemiBold'}}>Welcom Back</Text>
<Text style={{color:'#D5D5D5',fontSize:15,textAlign:'center',marginTop:'0%',fontFamily:'Poppins_200ExtraLigh'}}>Sign to continue</Text>
      

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
      <TextInput
        style={{fontFamily:"Poppins_400Regular",width:'90%',padding:"0%", paddingLeft:'2%',borderColor:'#F0F0F0',height:'7%',marginTop:'5%', marginLeft:'5%',
borderRadius:5,  borderWidth:1,
    fontSize:18}}
        onChangeText={onChangepassword}
        value={Password}
        placeholder="Password"
        keyboardType="Text"
        placeholderTextColor="#BCBCBC" 
  secureTextEntry={true}
      /> 
      





 <Text  style={{marginLeft:"5%",width:"90%",padding:"2.5%", fontFamily:"Poppins_400Regular,",marginTop:'1.5%',

    fontSize:14,textAlign:'right',color:'#0252D2'}}
    onPress={()=>{
  
  navigation.navigate('Password',
  )
}} 
    
    > Forgot Password? 
    
    </Text>





  

    
      <Pressable style={{backgroundColor:'#0E64F1',width:'90%',marginLeft:'5%',borderRadius:5,padding:'2.5%',marginTop:'2.5%'
     }} ref={inputlog} onPress={()=>{
         log()
    } } 

>   
           

  
    <Text   style={{color:'white',fontSize:18 ,textAlign:'center',borderRadius:5, fontFamily:'Poppins_500Medium'}} >Login</Text>

  
  </Pressable>
     
   {/*
   </KeyboardAvoidingView>
   */}

   

  <Text  style={{marginLeft:"5%",width:"90%",padding:"2.5%", fontFamily:"Poppins_400Regular,",marginTop:'2.5%',

    fontSize:15,textAlign:'center'}}>Don t have account? <Text  style={{color:'#048CFD'}} onPress={()=>
  
  navigation.navigate(
    {
      name: 'signup',
}
  )
  } >Create new Account </Text></Text>













 






 

</View>



{show &&
<>
   <View style={{position:'absolute',top:'0%',left:'0%',width:'100%',height:'100%',backgroundColor:'black',opacity:0.5}}></View>
   <ActivityIndicator style={{position:'absolute',top:'45%',left:'45%'}}   size="large" color="#003EC5" />
   </>
}
</>

  );
};
const CustomProgressBar = ({ visible }) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View style={{ flex: 1, backgroundColor: "#dcdcdc", alignItems: "center", justifyContent: "center" }}>
        <View style={{ borderRadius: 10, backgroundColor: "white", padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: 200 }}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
  
const styles = StyleSheet.create({
 
  button: { 
    
    alignItems: 'center',
    justifyContent: 'center',
   marginTop:'2%',
   width:100,
   marginLeft:'5%',
    borderRadius: 0,
    elevation: 3,

  },
  wallhide: {
position:'absolute',top:'0%',left:'0%',width:'100%',height:'100%',backgroundColor:'black',zIndex:11,opacity: 0,
  }
  ,
    wallshow: {
position:'absolute',top:'0%',left:'0%',width:'100%',height:'100%',backgroundColor:'black',zIndex:11,opacity: 0.5,
  }
});

export default Login;