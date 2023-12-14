import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useState,Platform } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import * as Cloudinary from 'cloudinary-core';

import { Ionicons } from '@expo/vector-icons';
import WavyBackground from 'react-native-wavy-background';
import { Button , ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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

const Info = ({ navigation }) => {
  const city = [
   { label: 'All', value: 'all' },
    { label: 'Casablanca', value: 'casablanca' },
    { label: 'Rabat', value: 'rabat' },
    { label: 'Fes', value: 'fes' },
    { label: 'Meknes', value: 'meknes' },
     { label: 'Tanger', value: 'tanger' },
     { label: 'Marakesh', value: 'marakesh' },
    { label: 'Tetoan', value: 'tetoan' },
    { label: 'Jadida', value: 'jadida' },
    { label: 'Agadir', value: 'agadir' },
    { label: 'Settat', value: 'settat' },
    { label: 'Oujda', value: 'Oujda' },
    { label: 'Berkane', value: 'Berkane' },
      { label: 'Khribga', value: 'Khribga' },
      { label: 'Safi', value: 'Safi' },
      { label: 'Errachidia', value: 'Errachidia' },
      { label: 'Laayoun', value: 'Laayoun' },
{ label: 'Taza', value: 'Taza' },

  ];
    const sex = [
    { label: 'men', value: 'male' },
    { label: 'female', value: 'female' },
  ];
const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch=async() =>{ setIsEnabled(previousState => !previousState)  
  //alert(isEnabled)
setshow(true)
   
var body2 = {
   share:!isEnabled
 }

    const valuee = await AsyncStorage.getItem('x');

  axios({
    method: 'put',
    url: 'https://www.ajinkriw.co/api/profiles/update_my_profile/',
      headers: {
    'Authorization': `Bearer ${valuee}` 
  }
    ,
    data: body2
  }).then(function (res) {
    
setshow(false)
  }).catch(function(err) {

    seterrormessage("c ant share profile without description and city")
    setshowalert3(true)
    setshow(false)
   setIsEnabled(false)


  });
}

  
  
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
    const [image, setImage] = useState(null);
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  const [myprofile, setmyprofile] = React.useState({});
 const [show, setshow] = React.useState(true);
  const [usernamee, setusername] = React.useState(null);
  const [firstname, setfirstname] = React.useState(null);
  const [lastname, setlastname] = React.useState(null);
  const [password, setpassword] = React.useState(null);
  const [descriptions, setdescription] = React.useState(null);
    const [ville, setville] = React.useState(null);
    const [genre, setgenre] = React.useState(null);
     const [heights, setheights] = React.useState(0);
     const [errormessage, seterrormessage] = React.useState("");
      const [showAlert, setshowalert] = React.useState(false);
      const [showAlert3, setshowalert3] = React.useState(false);
  storeData = async () => {
    const value = await AsyncStorage.getItem('x');
setshow(true)
    await axios
      .get('https://www.ajinkriw.co/api/users/me', {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        // alert(res.data)
        // console.log(res.data)
        setmyprofile(res.data);
        setusername(res.data.username);
        setfirstname(res.data.first_name);

        setlastname(res.data.last_name);
        setdescription(res.data.description)
      //alert(2)
      })
      .catch((error) => {
        console.error(error);
      });





 await axios
      .get('https://www.ajinkriw.co/api/profiles/retreive_my_profile/', {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
         setIsEnabled(res.data.share)
       //  alert(res.data.city)
         setville(res.data.city)
       //setgenre(res.data.gender)
         setdescription(res.data.description)
        // console.log(res.data)
         setshow(false)
        //  alert(res.data.description)
       
      })
      .catch((error) => {
        alert(error);
      });
























  };

  React.useEffect(() => {
    storeData();
  },[]);

  const update=async()=>{

setshow(true)




 const values = await AsyncStorage.getItem('x');


 





var bodys = {
   first_name:firstname,
   last_name:lastname,
   username:usernamee,

  }



axios({
    method: 'put',
    url: 'https://www.ajinkriw.co/api/user/update-or-retrieve-my-info/update/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: bodys
  }).then(function (res) {
    //console.log(res)
    setshow(false)

  }).catch(function(err) {
//alert(err)
  });


















if(descriptions){



if(descriptions.length<105){

  
var body = {

   description:descriptions,
  
   city:ville 
 
  }

   axios({
    method: 'put',
    url: 'https://www.ajinkriw.co/api/profiles/update_my_profile/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: body
  }).then(function (res) {
 navigation.navigate({
                name: 'Principal',
              });
  }).catch(function(err) {
alert(err)
  });
}

else{
 seterrormessage("description max 100")
 setshowalert3(true)

  }

 
}


  






else{
  setshow(false)
  seterrormessage("description is small")
 setshowalert3(true)

}
  
  
 














//alert(username+' '+lastname+' '+firstname+' '+ville+' '+genre+' '+isEnabled+' '+description+' '+myprofile.profile_photo)

  };



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
     // alert(1)
    setImage(result)
    setTimeout(()=>{
     let base64Img = `data:image/jpg;base64,${result.base64}`
      
      //Add your cloud name
     let apiUrl = 'https://api.cloudinary.com/v1_1/dzkx1z6lo/upload';
  
      let data = {
        "file": base64Img,
        "upload_preset": "soufiane",
      }

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
          let data = await r.json()
      
         //  alert(data.secure_url)
          //  await AsyncStorage.setItem("pic",data.secure_url);
     const values = await AsyncStorage.getItem('x');

var bodyimg = {
   image:data.secure_url 


  }
 

 
await axios({
    method: 'put',
    url: 'https://www.ajinkriw.co/api/user/update-or-retrieve-my-info/update/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: bodyimg
  }).then(function (res) {
    console.log(res)
//alert("done")
setshow(false)
  }).catch(function(err) {
alert(err)
  }); 
      
 })  
},2000)
//setshow(true)
 

 


/*


 const values = await AsyncStorage.getItem('x');

var bodyimg = {
   image:linkimg


  }
 

 /*
await axios({
    method: 'put',
    url: 'https://www.ajinkriw.co/api/user/update-or-retrieve-my-info/update/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: bodyimg
  }).then(function (res) {
    console.log(res)
alert("done")
setshow(false)
  }).catch(function(err) {
alert(err)
  });*/






      
    
  }
  };

const drop=(x)=>{

setville(x)
}

const dropsex=(x)=>{

 setgenre(x)
}






  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <LinearGradient
        colors={['#8AAFFF', '#0045D8', '#0035A8']}
        style={{
          width: '100%',
          height: '9%',
          backgroundColor: '#0479D5',
          paddingLeft: '3%',
          paddingRight: '3%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <TouchableOpacity
          style={{
            marginTop: '3%',
            shadowColor: 'red',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5.46,
          }}
          onPress={() => {
            setTimeout(() => {
              navigation.navigate({
                name: 'Principal',
              });
            }, 500);
          }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            width: '88%',
            color: 'white',
            textAlign: 'center',
            marginTop:'1.5%',
            fontSize: 21,
            marginLeft: '0%',

            fontFamily:' Poppins_500Medium'
          }}>
          Profile
        </Text>
      </LinearGradient>












      <View
        style={{
          width: '100%',
          height: '12%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
           flexWrap:'wrap',
           alignItems:'center', 
          
          marginTop:'0%',
          paddingTop:'2%',
          paddingBottom:'2%'
        }}>

          {image ?  (
        <Image
          source={{ uri: image.uri }}
          style={{
            width: 55,
            height: 55,
            borderRadius: 100,
           
          }}
        />
      ):   (   myprofile.image && (
        <Image
          style={{
            width: 55,
            height: 55,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5.46,

            backgroundColor: 'white',
            borderRadius: 100,
          }}
          source={{uri: myprofile.image}}
        /> ))
   }
     <View  style={{width:'90%',marginTop:'2%', display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'}} >

     
       <StatusBar hidden={true} />
     
       <Button title="change image" onPress={pickImage}  />
      <StatusBar style="auto" />

 




 </View> 
 </View>
























      <TextInput
        style={{
        fontFamily:"Poppins_400Regular",width:'90%',padding:"0%", paddingLeft:'2%',borderColor:'#F0F0F0',height:'6%',marginTop:'12%', marginLeft:'5%',
borderRadius:5,  borderWidth:1,
    fontSize:16
        }}
        onChangeText={setusername}
        value={usernamee}
        placeholder="Username"
        placeholderTextColor="#BCBCBC"
      />
      <TextInput
        style={{
        fontFamily:"Poppins_400Regular",width:'90%',padding:"0%", paddingLeft:'2%',borderColor:'#F0F0F0',height:'6%',marginTop:'5%', marginLeft:'5%',
borderRadius:5,  borderWidth:1,
    fontSize:16
        }}
        onChangeText={setfirstname}
             value={firstname}
       
        placeholder="firstname"
        keyboardType="Text"
        placeholderTextColor="#BCBCBC"
      />
      <TextInput
        style={{
      fontFamily:"Poppins_400Regular",width:'90%',padding:"0%", paddingLeft:'2%',borderColor:'#F0F0F0',height:'6%',marginTop:'5%', marginLeft:'5%',
borderRadius:5,  borderWidth:1,
    fontSize:16
        }}
        onChangeText={setlastname}
        value={lastname}
        placeholder="Lastname"
        keyboardType="Text"
        placeholderTextColor="#BCBCBC"
      />
     <TextInput
        style={{
          marginTop: '5%',
          marginLeft: '5%',
          borderWidth: 1,
          width: '90%',
          height:heights<55 ? 55+heights : 120, 
          borderColor: '#CACACA',
          padding: '0%',
           paddingTop:'0%',
          borderRadius: 5,
          fontSize: 14,
          
          fontFamily: 'Poppins_400Regular',
        }}
          multiline
        placeholderTextColor="#BCBCBC"
        placeholder="Description"
   
        onChangeText={setdescription}
        value={descriptions}
         onContentSizeChange={(e) => {
       
         setheights(e.nativeEvent.contentSize.height/3)
         

    
     } }
      />
      <View style={{position:"absolute",width:'100%',height:'35%',marginTop:'65%',marginLeft:'0%',zIndex:5,display:showAlert?'block': 'none'  }}>

 
</View>

<View style={{width:"90%", marginLeft:'5%',marginTop:'5%'}}>

  <RNPickerSelect
            placeholder={{
              label: 'Select  city',
              value: null,
            }}
            items={city}
            onValueChange={(value) => {
              drop(value.toString());
            }}
            style={{
               
                
                fontSize: 26,
              
                borderWidth: 1,
                borderColor: '#BCBCBC',
                borderRadius: 4,
                color: 'black', 
                height:50,
              // to ensure the text is never behind the icon
            
            }}
          />


</View>














<View style={{marginLeft:'5%',display:'flex',flexDirection:'row',alignItems:'center',marginTop:'3.5%'}}>
<Text>Share profile </Text>
 <Switch

        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
</View>



 



      







    
      <Pressable style={{backgroundColor:'#0E64F1',width:'90%',marginLeft:'5%',borderRadius:5,padding:'2.5%',marginTop:'5%'
     }}  onPress={()=>{
        update()
    } } 

>   
           

  
    <Text   style={{color:'white',fontSize:18 ,textAlign:'center',borderRadius:5, fontFamily:'Poppins_500Medium'}} >Update</Text>

  
  </Pressable>
     





      









    {show && (
        <>
          <View
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              opacity: 0.5,
            }}></View>
          <ActivityIndicator
            style={{ position: 'absolute', top: '45%', left: '45%' }}
            size="large"
            color="#003EC5"
          />
        </>
      )}


      <AwesomeAlert
          show={showAlert3}
          showProgress={false}
          title="Error"
          message={errormessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="try again"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert3(false)
          }}
        />

    

    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
});

export default Info;
