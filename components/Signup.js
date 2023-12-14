import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, SafeAreaView,Platform, StyleSheet, Text, TextInput, View,ViewActivityIndicator, ActivityIndicatorComponent,KeyboardAvoidingView,ActivityIndicator } from "react-native";
import WavyBackground from "react-native-wavy-background";
import { Button } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker';
import Info from './Info'
const Signup = ({ navigation }) => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
    const [error, setError] = React.useState("");
    const [show, setshow] = React.useState(false);
  const [image, setImage] =React.useState(null);
   const [Email, onChangeEmail] = React.useState("");
  const [Password, onChangePassword] = React.useState("");
  const [Passwordagain, onChangePasswordagain] = React.useState("");
     const [User, onChangeUser] = React.useState("");
  const [Lastname, onChangeLastname] = React.useState("");
   const [Firstname, onChangeFirstname] = React.useState("");
   const [errormessage, seterrormessage] = React.useState("");
 const [showAlert, setshowalert] = React.useState(false);
  const [showAlert2, setshowalert2] = React.useState(false);
  const [Sexo, setsexo] = React.useState("");
      const sex = [
    { label: 'men', value: 'male' },
    { label: 'female', value: 'female' },
  ];

const drop = (value) => {
  setsexo(value)
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library



    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


 const sig = async () => {
    // No permissions request is necessary for launching the image library
    setshow(true)
 var bodys = {
 username: User,
 email:Email,
 first_name: Firstname,
last_name: Lastname,
gender: Sexo,
password: Password,
re_password: Passwordagain,

  }
 await axios({
    method: 'post',
    url: 'https://www.ajinkriw.co/api/users/',
    data: bodys
  }).then(function (res) {
     setshowalert2(true)


  }).catch((err)=>{
    //seterrormessage(err.non_field_errors[0])
    setshow(false)
    setshowalert(true)
  });



  };












  return (       
    
    


    
    <View style={{height:"100%",backgroundColor: "white" }}>
    





 <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Impossible registre"
          message={"impossible registre maybe field may  be blank or password confirmation  or you forgot choose gender"}
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

 <AwesomeAlert
          show={showAlert2}
          showProgress={false}
          title="successfully registre"
          message="your account is create "
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="ok"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
             navigation.navigate(
    {
      name: 'login',
}
  )

          }}
        />





<Text style={{color:'#0269C4',fontSize:23,textAlign:'center',marginTop:'10.5%',fontFamily:'Poppins_600SemiBold'}}> Create Account</Text>
<Text style={{color:'#D5D5D5',fontSize:15,textAlign:'center',marginTop:'0%',fontFamily:'Poppins_200ExtraLigh'}}> Create new Account</Text>




{/*
 <KeyboardAvoidingView
      style={{height:Platform.OS=='ios' ? '80%' :'40%' 
    }}
      behavior="padding">*/
}


      <TextInput
        style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangeUser}
        value={User}
        placeholder="Username"
           placeholderTextColor="#BCBCBC" 
     />
     <TextInput
       style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangeFirstname}
        value={number}
        placeholder="firstname"
        keyboardType="Text"
           placeholderTextColor="#BCBCBC" 
      /> 
<TextInput
style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangeLastname}
        value={number}
        placeholder="Lastname"
           placeholderTextColor="#BCBCBC" 
        keyboardType="Text"
      /> 
<TextInput
     style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangeEmail}
        value={number}
        placeholder="Email"
           placeholderTextColor="#BCBCBC" 
        keyboardType="Text"
      /> 
     <TextInput
style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangePassword}
        value={number}
        placeholder="Password"
           placeholderTextColor="#BCBCBC" 
        keyboardType="Text"
          secureTextEntry={true}
      /> 
      <TextInput
        style={{marginLeft:"5%",borderWidth:1,width:"90%",padding:"1%", borderColor:'#F0F0F0',marginTop:'5%',height:Platform.OS=='ios' ? '6%' :'6%',
borderRadius:5,
    fontSize:15,fontFamily:"Poppins_400Regular",paddingLeft:'2%'}}
        onChangeText={onChangePasswordagain}
        value={number}
        placeholder="Password Again"
           placeholderTextColor="#BCBCBC" 
        keyboardType="Text"
          secureTextEntry={true}
      /> 
 






   
<View style={{width:"90%", marginLeft:'5%',marginTop:'5.5%', borderColor:'#F0F0F0',height:'8%'}}>

  <RNPickerSelect
            placeholder={{
              label: 'Select  gender',
              value: null,
            }}
            items={sex}
            onValueChange={(value) => {
              drop(value.toString());
            }}
            style={{
               
                
                fontSize: 23,
                paddingVertical: 2,
                paddingHorizontal: 7,
                borderWidth: 1,
                borderColor: '#BCBCBC',
                borderRadius: 4,
                color: 'black',
                paddingRight: 30, // to ensure the text is never behind the icon
            
            }}
          />


</View>

 
 

      
      
  

     <Pressable style={{backgroundColor:'#0E64F1',width:'90%',marginLeft:'5%',borderRadius:5,padding:'2%',marginTop:'7%'
     }}  onPress={()=>{
         sig()
    } } 

>   
           

  
    <Text   style={{color:'white',fontSize:18 ,textAlign:'center',borderRadius:5, fontFamily:'Poppins_500Medium'}} >Signup</Text>

  
  </Pressable>








         <Text  style={{marginLeft:"5%",width:"85%",textAlign:'center',padding:"2.5%", fontFamily:"Poppins_400Regular",marginTop:'3%',

    fontSize:15}}>Already have a account? <Text  style={{color:'#048CFD'}} onPress={()=>
  
  navigation.navigate(
    {
      name: 'login',
}
  )
  } >Login</Text></Text>


{/*
 <KeyboardAvoidingView
      style={{height:Platform.OS=='ios' ? '80%' :'40%' 
    }}
      behavior="padding">*/
}
{show &&
<>
   <View style={{position:'absolute',top:'0%',left:'0%',width:'100%',height:'100%',backgroundColor:'black',opacity:0.5}}></View>
   <ActivityIndicator style={{position:'absolute',top:'45%',left:'45%'}}   size="large" color="#003EC5" />
   </>
}



</View>








  );
};

const styles = StyleSheet.create({
 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
   
    borderRadius: 20,
    elevation: 3,
   
  },
  input: {
    borderRadius:7,
    width:300,
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor:'#CACACA',
    padding: 10,
    fontSize:20
  },
});

export default Signup;