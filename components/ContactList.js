import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Image, Pressable, SafeAreaView,   BackHandler,StyleSheet, Text, TextInput, View , ScrollView,TouchableOpacity , Platform,ActivityIndicator, ActivityIndicatorComponent,} from "react-native";
import WavyBackground from "react-native-wavy-background";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
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
import { Ionicons } from '@expo/vector-icons';


const ContactList = ({route, navigation }) => {
 const [text, onChangeText] = React.useState();
 const [myid, setmyid] = React.useState(0); 
   const [show, setshow] = React.useState(true);
    const {pkid} = route.params;
    const [texts, setText] = React.useState(11111);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [number, onChangeNumber] = React.useState(null);
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


_retrieveData = async () => {
 

    const value = await AsyncStorage.getItem('x');
    if (value != null) {
      // We have data!!
   //      alert("there data")
      setText(value)

    }
else{
    // Error retrieving data
    alert("no data")
  }


  

  await  axios.get('https://www.ajinkriw.co/api/chats/my-contact/', {
  headers: {
    'Authorization': `Bearer ${value}` 
  }}
)
.then((res) => {
    //alert(res.data)
 //console.log(res.data)
setSelectedValue(res.data.results)
  setshow(false)
})
.catch((error) => {
  alert(error)
})
};


React.useEffect(() => {
_retrieveData()

     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
  });











  return (       
    
    
    
    <View  style={{height:"100%",backgroundColor:"white"}}>
    
      <StatusBar hidden={true} />
     
     
      <StatusBar style="auto" />
        

     <LinearGradient
    colors={['#8AAFFF','#0045D8', '#0035A8']}
    style={{ width: '100%',
          height: '9%',
          backgroundColor: '#0479D5',
      
          paddingLeft: '3%',
          paddingRight: '3%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',


  }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >


  <TouchableOpacity   style={{marginTop:"3%",
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: 0.3,
     shadowRadius: 5.46,
  
   }}
    onPress={()=>{
      setTimeout(()=>{
navigation.navigate("Principal",{
  id:1
})

}
  ,500)
    } } 
   
   
   
   
   
   
   >
<Ionicons name="arrow-back" size={24} color="white" />
</TouchableOpacity>


<Text  style={{width:"70%",color:"white",textAlign:"center",fontSize:19,marginLeft:'11%', fontFamily:'Poppins_500Medium',marginTop:'3.5%' 

  }}>ContactList  </Text>



  </LinearGradient>



<View style={{width:"100%",color:"white",height:"93%",marginLeft:"0%",padding:'3%',paddingTop:'0%'

  }}>

<ScrollView style={{width:"100%",height:'100%'
  }}>
{selectedValue.map(x=>(
<View style={{width:"100%",borderBottomColor:"#F5F5F5",borderBottomWidth:1,paddingBottom:"5%",paddingTop:"5%"}}>


<TouchableOpacity 
 onPress={()=>
  
  navigation.navigate('Chat',{
            itemId: x.other_user.id,
            id:pkid,
            isread:x.is_read,
            img:x.other_user.image,
            reciver:x.other_user.first_name+" "+x.other_user.last_name,
            lastlogin:x.other_user.last_login
            
          }
      

  )

  }

style={{display:'flex',flexDirection:'row'}}



> 
<View style={{width:'20%'}}>
<Image 
  style={{ width:50,height:50,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: 0.3,
     shadowRadius: 5.46,
    
     top:'10%',
     left:"1%",
    backgroundColor:"white",
    borderRadius:100

   
   }}
        source={{uri:x.other_user.image}}

/>
</View>

<View style={{width:'57%'}}>
<Text style={{fontSize:18,fontFamily:'Poppins_500Medium'}}>{x.other_user.first_name} {x.other_user.last_name}</Text>
<Text style={{fontSize:15,marginTop:"1.5%",fontFamily: ' Poppins_500Extralight,',color:"#666666"}}>
 
   {x.last_message != null && x.last_message.length>30 ?<Text> {x.last_message.substring(0,30)}  . . . . .</Text>:x.last_message}

   </Text>
</View>



<View style={{width:'23%',display:'flex',alignItems:'center',paddingTop:'2.5%',paddingRight:'3%'}}>




  
   
  
  { 
    (parseInt(x.created_at.substring(6,10))==parseInt((new Date().getFullYear()))) ?
    
    (parseInt(x.created_at.substring(3,5))==parseInt((new Date().getDate())))? <Text style={{fontSize:13}}>{ x.created_at.substring(12,17)}</Text> :<Text style={{fontSize:12}}> { x.created_at.substring(0,10)} </Text> 
    :<Text style={{fontSize:13}}>last year</Text>
    

   
    
    
     }
 
{x.messages_still_not_read>0 &&



<View style={{width:20,height:20,backgroundColor:'red',display:'flex',marginTop:'5%',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:100}}>

<Text style={{color:"white",borderRadius:100,
fontSize:12,fontFamily: 'Poppins_500Medium'}}>{x.messages_still_not_read}</Text>
</View>


}

</View>




</TouchableOpacity>
</View>








))}
</ScrollView>
</View>

 



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











</View>








  );
};

const styles = StyleSheet.create({
 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,

  },
  input: {
    borderRadius:7,
    width:300,
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderColor:'#CACACA',
    padding: 10,
    fontSize:20
  },
});

export default  ContactList;