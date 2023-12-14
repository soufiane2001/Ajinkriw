import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text,   BackHandler,ScrollView,TouchableOpacity,TextInput, View ,ActivityIndicator, ActivityIndicatorComponent,KeyboardAvoidingView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import WavyBackground from "react-native-wavy-background";
import { AntDesign } from '@expo/vector-icons';

import { Button } from "react-native";
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


const Chat = ({route, navigation }) => {
  
const [numOfLinesCompany,setnumOfLinesCompany]=React.useState(16)

var [heights,setheight]=React.useState(55)
    const { itemId} = route.params;
       const { id} = route.params;
       const { isread} = route.params;
         const {img} = route.params;
           const { reciver} = route.params;
                   const { lastlogin} = route.params;
        const [myid, setmyid] = React.useState(33); 
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
  const [text, onChangeText] = React.useState();
    const [pkid, setpkid] = React.useState(0);
    const [number, onChangeNumber] = React.useState(null);
        const [show, setshow] = React.useState(true);
  const [my, setmy] = React.useState([/*{m:"heey",fr:"me"},{m:"cv",fr:"he"},{m:"hamdlh",fr:"me"},{m:"kin chi kre",fr:"he"}
  ,{m:"kin chi kre",fr:"he"},{m:"kin chi kre",fr:"he"},{m:"kin chi kre",fr:"he"},{m:"kin chi kre",fr:"he"},{m:"kin chi kre",fr:"he"}
  ,{m:"lyn3l tbn mok jawb",fr:"he"},{m:"dor t9wd azabi nta baghi tjib l9hab ldar",fr:"me"},
  ,{m:"nta malk njib hta khtk",fr:"he"},{m:"mkarich li bhalk awl 9hba tamlk sir chouf chi 9wad idbrlik fbrtouch hahahah ddfdsf",fr:"me"}
  ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
   ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
  ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
  
  ,{m:"mkarich li bhalk awl 9hba tamlk sir chouf chi 9wad idbrlik fbrtouch hahahah ddfdsf",fr:"me"}
  ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
   ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
  ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"} ,{m:"bhala m3rft ach ghadi tkri lina",fr:"he"}
  */
  
  
  ]);
    const [you, setyou] = React.useState([1,2,3,4,5,6]);
        const [youtop, setyoutop] = React.useState([30]);
        const [before, setbefore] = React.useState();
        var tp=25;
        var tp2=0;
          const scrollViewRef = useRef();
const inputRef = useRef(null);
   


  function handleScroll(event) {
    if (event.nativeEvent.contentOffset.y === 0) {
      if(before!=null){
    //setshow(true)
  setbefore(0)
    storeData2(before)
                        
                        
                        }
    }
  }





storeData2 =async (x) => {
   // await AsyncStorage.setItem('one', 5544845);
    const pk = await AsyncStorage.getItem('pkid');

//setmyid(pk)
   var arraydata=[]
 
    const value = await AsyncStorage.getItem('x');


 await  axios.get(x, {
  headers: {
    'Authorization': `Bearer ${value}` 
  }}
)
.then((res) => {
//alert(res.data)
//setmy((res.data.results).reverse())
setbefore(res.data.next)
const updatedArray = res.data.results.reverse().map(item => {
  return {
    ...item,sended:'jjjjj'
  };
});
setmy([...updatedArray,...my])


setTimeout(()=> {
    scrollViewRef.current.scrollTo({ y: 0 });
setshow(false)
  }
,50)  
//alert(res.data.results[0].message)



})
.catch((error) => {
  console.log(error)
})
  
  

       const pkidd = await AsyncStorage.getItem('pkid');

setpkid(pkidd)



  const values = await AsyncStorage.getItem('x');


var body = {
    is_read: true
  }
inputRef.current.clear();
  axios({
    method: 'patch',
    url: 'https://www.ajinkriw.co/api/chats/updated-is-read-to-true/'+itemId+'/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: body
  }).then(function (res) {
    
//alert("mesaage li")
  }).catch(function(err) {
//alert(err+"111111")
  });


  
  };























storeData =async () => {
   // await AsyncStorage.setItem('one', 5544845);
    const pk = await AsyncStorage.getItem('pkid');

//setmyid(pk)
   var arraydata=[]
 
    const value = await AsyncStorage.getItem('x');


 await  axios.get('https://www.ajinkriw.co/api/chats/?user_id='+itemId, {
  headers: {
    'Authorization': `Bearer ${value}` 
  }}
)
.then((res) => {
//alert(res.data)
//setmy((res.data.results).reverse())
setbefore(res.data.next)
const updatedArray = res.data.results.reverse().map(item => {
  return {
    ...item,sended:'jjjjj'
  };
});
setmy(updatedArray)



//alert(res.data.results[0].message)
setshow(false)


})
.catch((error) => {
  alert(error+"111111")
})
  
  

       const pkidd = await AsyncStorage.getItem('pkid');

setpkid(pkidd)



  const values = await AsyncStorage.getItem('x');


var body = {
    is_read: true
  }
inputRef.current.clear();
  axios({
    method: 'patch',
    url: 'https://www.ajinkriw.co/api/chats/updated-is-read-to-true/'+itemId+'/',
      headers: {
    'Authorization': `Bearer ${values}` 
  }
    ,
    data: body
  }).then(function (res) {
    
//alert("mesaage li")
  }).catch(function(err) {
//alert(err+"1111111")
  });


  
  };



  React.useEffect(() => {
storeData()

  

     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
  
  
  },[]);








sendmessage =async (recive) => {

   const value = await AsyncStorage.getItem('x');

  // alert(id+" "+recive+" "+text+" "+value)
  setmy([...my,{  receiver:itemId, message: text}])
var body = {
    sender:id,
    receiver:recive,
    message:text
  }
inputRef.current.clear();
  axios({
    method: 'post',
    url: 'https://www.ajinkriw.co/api/chats/',
      headers: {
    'Authorization': `Bearer ${value}` 
  }
    ,
    data: body
  }).then(function (res) {
    
    setshow(false)
    setTimeout(()=>{
      storeData();},
    1000
    )
    
//alert("mesaage envoyer")
  }).catch(function(err) {
//alert(err+"1111111")
  });






  
  };






  return (       
    
    
     
   

       <View  style={{height:"100%"}}>
       
     <LinearGradient
    colors={['#8AAFFF','#0045D8', '#0035A8']}
    style={{      width: '100%',
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
     
navigation.navigate(
    {
      name: 'Principal',
    })


    } } 
   
   >
<Ionicons name="arrow-back" size={24} color="white" />
</TouchableOpacity>
<Image 
  style={{ width:35,height:35,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: 0.3,
     shadowRadius: 5.46,
    backgroundColor:"white",
    marginLeft:'3%',
    marginTop:'2.5%',
    borderRadius:100

   
   }}
        source={{uri:img}}

/>

<View style={{width:'70%',paddingLeft:'2.5%',marginTop:'2%'}}>
<Text style={{color:"white",fontSize:18,fontFamily:'Poppins_400Regular'

  }}> {reciver} </Text>

  <Text style={{color:"#D1D1D1",fontSize:11,fontFamily:'Poppins_400Regular',marginTop:'-1.75%'

  }}> { lastlogin !=null ? ( 
    (parseInt(lastlogin.substring(6,10))==parseInt((new Date().getFullYear()))) ?
    
    (parseInt(lastlogin.substring(3,5))==parseInt((new Date().getDate())))? <Text style={{fontSize:13}}>Today { lastlogin.substring(12,17)}</Text> :<Text style={{fontSize:12}}> { lastlogin.substring(0,10)} </Text> 
    :<Text style={{fontSize:13}}>last year</Text>
    

   
    
    
      ) : "offliness"} </Text>
</View>


  </LinearGradient>

 
  
 


<View style={{backgroundColor:'red',height:'84%'}}>

<ScrollView style={{width:"100%",color:"white",backgroundColor:'#F3F3F3',borderBottomColor:"#E9E9E9",borderStyle:"solid",paddingTop:"0%"
,borderBottomWidth:1,height:'100%',paddingBottom:'2%'

  }}
  
  ref={scrollViewRef}
      onScroll={handleScroll}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
  
  > 

  {before !=null &&
         <ActivityIndicator style={{marginTop:5}}   size="small" color="#003EC5" />



  }

<View style={{marginTop:5}}>
{


  my.map((x)=>
   
{ 
//tp2=tp2+100
return(
 
  <View  style={{paddingLeft:2,marginTop:11,display:"flex",flexDirection:x.receiver==itemId ?"row-reverse":"row",flexWrap:"wrap",}}>
   <View style={{ maxWidth:'90%' }}>
  {x.message.length>0 && (
  
  <LinearGradient
    colors={x.receiver==itemId?['#8AAFFF','#0045D8', '#0035A8']:['#CA83FF','#A020FF', '#890FE3']}
    style={{paddingTop:1,paddingBottom:2 ,paddingLeft:10,paddingRight:18,borderRadius:30,marginTop:10,width:'100%'
  }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >

  
 <Text style={{color: '#F2F2F2',fontSize:16,fontFamily:'Poppins_400Regular'}}>
 {x.message}  
</Text> 
   {x.sended && x.sender==id && x.is_read==false ?
 
 /*<AntDesign name="check" size={13} color={"white"}  /> */
 <View style={{width:15,position:'absolute',right:'5%',bottom:'12%'}}  >
 <AntDesign name="check" size={12} color={"white"}  /> 

 </View>

 :<></>
  }
{
 x.sended && x.sender==id && x.is_read==true ?
  <View style={{width:15,position:'absolute',right:'5%',bottom:'12%'}}  >

 <Ionicons name="checkmark-done-sharp" size={13} color="white" />
 </View>
 :<></>
}


    
     
</LinearGradient>








) }








</View>
</View>



)
}



  )
}

</View>




</ScrollView>

</View>







<View style={{height:'7%',display:"flex",flexDirection:"row",paddingTop:'2.5%',alignItems:'center',justifyContent:'space-around',paddingBottom:'2%'}}>

{/* <View style={{width:"70%",height:"75%",marginTop:"2%",marginLeft:'5%' ,paddingBottom:'1%'
 
 }}>*/}
    <TextInput
style={{borderWidth:1,padding:5, borderColor:'#CACACA',width:'79%',paddingLeft:'2.5%',backgroundColor:'#F7F7F7',
borderRadius:15,height:heights<50 ? heights+numOfLinesCompany :55+numOfLinesCompany,marginTop:heights<50?-heights+numOfLinesCompany:-50+numOfLinesCompany,
marginLeft:'1.25%',
    fontSize:14,fontFamily:"Poppins_300Light"}}
    multiline
        onChangeText={onChangeText}
        value={number}
        placeholder="Message"
        keyboardType="Text"
        ref={inputRef} 
 onContentSizeChange={(e) => {
       
         setheight(e.nativeEvent.contentSize.height/1.7)
         

    
     } }
    

      /> 

      {/*
 </View>
*/
}



            <LinearGradient
    colors={['#8AAFFF','#0045D8', '#0035A8']}
    style={{width:"15%",borderRadius:20,height:30,marginLeft:'2%',display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  
  >

        <Pressable style={styles.button}  onPress={()=>sendmessage(itemId)} >
 
    <Text   style={{color:'white',fontSize:15}} >Send</Text>

    </Pressable>
        </LinearGradient>


</View>




  { show && (
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
 
    borderRadius: 10,
    elevation: 3,
   
  },

});

export default Chat;