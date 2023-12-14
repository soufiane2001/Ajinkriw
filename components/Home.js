import * as React from 'react'
import { ActivityIndicator, ActivityIndicatorComponent, Image, Modal, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




function Home({ navigation }) {
    const [pourcentage, setPourcentage] = React.useState(0);

const directlog=async()=>{
const values = await AsyncStorage.getItem('x');
if(values==null){
      setTimeout(()=>{
        navigation.navigate(
          {
            name: "login",
          }    
        )

      },800)  
}

else{

   setTimeout(()=>{
        navigation.navigate(
          {
            name: "Principal",
          }    
        )

      },800)  

}


}




    React.useEffect(() => {
      
directlog()


      },[]);






  return (
    <View style={styles.container}>

      <Image
     style={{ width:150,height:80,marginLeft:"1%",marginTop:"15%",
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: 0.3,
     shadowRadius: 5.46,
   
   }}
        source={require("../assets/Corporate_Business_Proposal_Presentation-removebg-preview.png")}
      />

<ActivityIndicator style={{marginTop:50}}   size="large" color="#003EC5" />

<View>


</View>
    </View>
  )
}

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
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    progress: {
        margin: 10,
        backgroundColor:"red",
        color:"white"
      },
  });
  
export default Home;