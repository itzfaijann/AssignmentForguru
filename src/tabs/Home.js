import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../Utils/metrix'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the App</Text>
      <Text style={styles.name}>I am Mohmmed Faijan</Text>
      <View style={{flexDirection:'row',marginLeft: moderateScale(114),marginTop :moderateScale(5)}}>
              
         <Text style={{fontSize: moderateScale(17),fontWeight:'600',marginTop : moderateScale(3)}}>Jaipur Rajasthan</Text>
         <Icon name ="location-on" size ={30} color="red" />  
         </View>

    </View>     
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  welcome:{
    alignSelf: 'center',
    fontSize: moderateScale(20),
    color:'black',
    fontWeight: "900",

  },
  name:{
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginLeft: moderateScale(114),
    marginTop: moderateScale(10)
  }
})