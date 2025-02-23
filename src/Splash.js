import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { moderateScale } from './Utils/metrix'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.SplashTxt}>Assignment Work</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  SplashTxt:{
    fontSize: moderateScale(18),
    fontWeight: "600"
  }
})