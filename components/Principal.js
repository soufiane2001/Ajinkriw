import React from 'react';
import axios from 'axios';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Platform,ActivityIndicator, ActivityIndicatorComponent,SafeAreaView
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import WavyBackground from 'react-native-wavy-background';
import { Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Info from './Info';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

function Principal({ navigation }) {
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











  const [users, setusers] = React.useState([]);
  const [img, setimg] = React.useState('');
 const [more, setmore] = React.useState(null);
 const [nbmessage, setnbmessage] = React.useState(0);
  const [showAlert, setshowalert] = React.useState(false);
   const [showAlert2, setshowalert2] = React.useState(false);
  const [profileid, setprofileid] = React.useState(15);
  const [show, setshow] = React.useState(true);
  const [usersfilter, setusersfilter] = React.useState([]);
  const [myprofile, setmyprofile] = React.useState({});
  const item = [
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











  storeData2 = async () => {
  
    //alert(values)
    /* const value = await AsyncStorage.getItem('x');
           const email = await AsyncStorage.getItem('email');
       alert(email)
    await axios.get('https://www.ajinkriw.me/api/users/me', {
        headers: {
          Authorization: `Bearer ${value}`,
        }
      }).then((res) => {
        // alert(res.data)
        // console.log(res.data)
        setmyprofile(res.data);
        //alert(res.data.pkid);
        setprofileid(res.data.pkid);
        //await AsyncStorage.setItem("pkid",x.pkid);
      })
      .catch((error) => {
       alert(error.response.data.detail);
      });
 
 */

   const values = await AsyncStorage.getItem('x');
          
    await axios.get('https://www.ajinkriw.co/api/users/me', {
        headers: {
          Authorization: `Bearer ${values}`,
        }
      }).then((res) => {
        
    
        // console.log(res.data)
       setmyprofile(res.data);
        //alert(res.data.pkid);
        setprofileid(res.data.pkid);
        //await AsyncStorage.setItem("pkid",x.pkid);
      })
      .catch((error) => {
     //  alert(error.response.data.detail+" 111111");
    
      });
 




setshow(false)




 
 
 
 };






















  storeData = async () => {
    // await AsyncStorage.setItem('one', 5544845);
//alert(0)
    var arraydata = [];
 


    const value = await AsyncStorage.getItem('x');
   // alert(value)






    await axios
      .get('https://www.ajinkriw.co/api/profiles/', {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
       // alert(res.data.next)
           setmore(res.data.next);
        setusers(res.data.results);
     
       // setimg(res.data.results[0].photo_profile);
      //  setusersfilter(res.data.results);

        //arraydata = res.data.results;
        setshow(false)
      })
      .catch((error) => {
        console.error(error);
       // alert(error)
      });




/***************************************/
await axios
      .get('https://www.ajinkriw.co/api/profiles/all/', {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
       // alert(res.data.next)
        //   setmore(res.data.next);
        //setusers(res.data.results);
     
       // setimg(res.data.results[0].photo_profile);
      // alert(res.data.length)
      setusersfilter(res.data);

        //arraydata = res.data.results;
       // setshow(false)
      })
      .catch((error) => {
        console.error(error);
       // alert(error)
      });






 










/************************************************************* */










































  //setshow(true)
await axios
      .get('https://www.ajinkriw.co/api/chats/get-all-messages-still-not-reading', {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        //alert(res.data)
       // setusers(res.data.results);
       // alert(res.data.results[0].photo_profile);
        //setimg(res.data.results[0].photo_profile);
        setnbmessage(res.data.count);
//alert(res.data.results.count_all_messages_still_not_reading)
       // arraydata = res.data.results;
        setshow(false)
      })
      .catch((error) => {
        console.error(error);
       // alert(error)
      });












  };










 /* React.useEffect(() => {
alert("hii")
  storeData();

    storeData2(); 
  

     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
  }
  
  ,[]);*/

 useFocusEffect(
    React.useCallback(() => {
  
      //setshow(true)
storeData();

    storeData2(); 
  

     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
    }, [])
  );




  const drop =(value) => {
    if (value == 'all') {
      setusers(usersfilter);
    } else {



      setusers((users) => usersfilter.filter((x) => x.city == value));
if( usersfilter.filter((x) => x.city == value).length<1){
setshowalert2(true)

}

      setmore(null)
    }
  };


















  addtocontact = async (x) => {
    //alert(x)
    setshow(true)
    const value = await AsyncStorage.getItem('x');
    //alert(value)

    axios({
      method: 'post',
      url:
        'https://www.ajinkriw.co/api/chats/add-or-remove-user-from-my-list/' +
        x +
        '/',
      headers: {
        Authorization: `Bearer ${value}`,
      },
    })
      .then(function (res) {
        console.log(res);
        setshowalert(true)
      })
      .catch((error) => {
        console.error(error);
      });

   
/*

  navigation.navigate('Chat',{
            itemId: x,
            id:profileid
         
          })

  */  
  };














  next = async (x) => {
setshow(true)
    const value = await AsyncStorage.getItem('x');
    var arrayhelp=[]
    var arrayhelp2=[]
   // alert(value)
    await axios
      .get(x, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
         setmore(res.data.next);

         if(more=="null"){
           setshow(false)


             }         
  setusers([...users,...res.data.results]);
  //setusersfilter([...usersfilter,...res.data.results]);

    
        setshow(false)
      })
      .catch((error) => {
        console.error(error);
       // alert(error)
      });
      
     
  
  };





















  return (
    <SafeAreaView>


    <View style={{
                      width: '100%',
          height:'100%',
          backgroundColor:'#F9F9F9'         
                
                      
                    }}>      

  
 <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Successful"
          message="user was add "
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="go"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert(false)
             navigation.navigate('contactlist', {
      pkid: profileid,
    })
          }}
        />
 



 <AwesomeAlert
          show={showAlert2}
          showProgress={false}
          title="no users"
          message="no users in this city"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="go"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert2(false)
            
          }}
        />













 



<View style={{
             
 
    height:'12%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:'3%',
    paddingRight:'3%',
   // paddingBottom:'5%',

               

           
            }}>



      <Image
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5.46,
              }}
              source={{ uri: `${myprofile.image}` }}
            />










        <Feather
          name="search"
          size={18}
          color="black"
          style={{  marginTop: '0%',marginLeft:'55%' }}
        />

        <View
          style={{
       
            fontSize: '25%',
            marginLeft:'2%',
            width: '30%'           
          }}>
          <RNPickerSelect
            placeholder={{
              label: 'Select  city',
              value: null,
            }}
            items={item}
            onValueChange={(value) => {
              drop(value.toString());
            }}
            style={{
              inputIOS: {
                fontSize: 12,
                paddingVertical: 2,
                paddingHorizontal: 7,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                color: 'black',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
              inputAndroid: {
                fontSize: 12,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 0.5,
                borderColor: 'purple',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
            }}
          />
        </View>

               </View>
        









       <View    style={{
             
            
          height:'80%',
            marginTop:'0%'
          
 
           
            }}>
          <ScrollView
            style={{
             
              width: '100%',

            
              //padding: '2.5%',
          height:'52%',
            
    
           
            }}>
     
  {users.length > 0 &&
              users.map((x) => (
    



              <View
                
                   style={{
                      width: '90%',
                      marginLeft:'5%',
                    marginTop: '3%',
                    borderRadius: 15,
                 
                    borderColor: '#DFDFDF',
                    borderWidth: 1,
      
                    paddingBottom: '3%',
                  backgroundColor: 'white',
                
                      
                      
                    }}
                   >

   

  








   <Image
                    style={{
                      position: 'absolute',
                      width: 45,
                      height: 40,
                      marginLeft: '2.5%',
                      borderRadius: 100,
                      borderColor:'green',
                      borderWidth:0
                      ,
                      backgroundColor: 'white',
                      marginTop: '5%',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 5.46,
                    }}
                    source={{ uri: `${x.image}` }}
               
                  />



              
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: '25%',
                      width: '70%',
                      marginTop: '5%',
                      fontFamily: 'Poppins_600SemiBold',
                      
                    }}>
                    {x.full_name} 

                  </Text>


{x.last_login !=null  && ( parseInt((x.last_login).substring(3,5))==(new Date()).getDate() && parseInt(x.last_login.substring(0,2))==(parseInt((new Date()).getMonth())+1)  )&&

                          <View style={{width:'70%',borderRadius:100,marginLeft:'25%',display:'flex',flexDirection:'row',alignItems:'center',marginTop:'-2%'}}>
 <Text style={{backgroundColor:'green',width:7,height:7,borderRadius:100,marginLeft:'1%'}}>.</Text><Text style={{marginLeft:'3%',fontSize:13}}>online</Text>
 </View>


    
}






                   <Text
                    style={{
                     
                      fontSize: 11,
                       fontFamily: 'Poppins_300Light',
           
                      marginLeft: '25%',
                      width: '75%',
                      marginTop: '1%',
                      lineHeight:15,
                      color:'#464646'
                    }}>
                    {x.description}
                    
                  </Text>

                    { myprofile.pkid!=x.id &&(


 <LinearGradient
                    colors={ ['#FF712E', '#FF5D12', '#FF5100']}
                    style={{
                      width: x.is_this_user_in_my_list ? '33%' :'33%',
                      borderRadius:5,
                      marginLeft: '65%',
                      padding:x.is_this_user_in_my_list ? 2 :0,
                      marginTop: '3%',
                    
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    {x.is_this_user_in_my_list ?
                    <Text style={{fontSize:13.7,color:'white',textAlign:'center'}}>already added</Text>
                    :
                    <Pressable
                      style={styles.button}
                      onPress={() => addtocontact(x.id)}>
                      <Text style={{ color: 'white', fontSize: 13 }}>
                       Add to contact
                      </Text>
                    </Pressable>

                    }
                  </LinearGradient>
               
           ) }

                  
               
           </View>
              ))}































           
              { more &&(
                 <LinearGradient
                    colors={['#8AAFFF', '#0045D8', '#0035A8']}
                    style={{
                      width: '23%',
                      borderRadius: 20,
                      marginLeft: '40%',
                      marginTop: '1.5%',
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Pressable
                      style={styles.button}
                      onPress={() => next(more)}>
                      <Text style={{ color: 'white', fontSize: 13 }}>
                        More
                      </Text>
                    </Pressable>
                  </LinearGradient> ) }




          </ScrollView>
   </View>

        <LinearGradient
          colors={['#8AAFFF', '#0045D8', '#0035A8']}
          style={{
            width: '100%',
            backgroundColor: '#0479D5',

            height:'8%',
            paddingTop: '2%',
            paddingBottom: '2%',
            paddingLeft: '5%',
            paddingRight: '3%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center'
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View
            style={{
              width: '6%',
              height: 17,
              borderRadius: 100,
              position: 'absolute',
              left: '54%',
              zIndex: 7,
              bottom: '59%',
              backgroundColor: 'red',
            }}>
            <Text style={{ color: 'white', textAlign: 'center' ,fontSize:12}}>{nbmessage}</Text>
          </View>

          <TouchableOpacity
            style={{
              width: '12%',
          
        
              shadowColor: '#000',
           }}
            onPress={() =>
              navigation.navigate({
                name: 'info',
              })
            }>
      <Ionicons name="settings" size={26} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '12%',
               shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5.46,
            }}
            onPress={() =>
              navigation.navigate('contactlist', {
                pkid: profileid,
              })
            }>
            <FontAwesome5 name="facebook-messenger" size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '12%',
            
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5.46,
            }}
             onPress={() =>
             {  AsyncStorage.clear()
              navigation.navigate('login',{
      pkid: profileid,
    })
             
             }}
            >
            <AntDesign name="logout" size={25} color="white" />
          </TouchableOpacity>
        </LinearGradient>
       










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







    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    padding: 15,
    paddingBottom: 5,
    position: 'absolute',
    height: '81%',
    width: '103%',
    top: '12%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 4,
    elevation: 3,
     backgroundColor:'blue'
  },
  pickerSelectStyles: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Principal;
