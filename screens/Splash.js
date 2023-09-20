import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import animationData from "../assets/cyber.json"

const Splash = () => {
  return (
    <>
    <SafeAreaView style={{ flex: 1, alignItems: "center",justifyContent: "center"}}>

      <LottieView  
        source={animationData}
        autoPlay
        loop={true}
        resizeMode='cover'
        // onAnimationFinish={}
        onError={error => console.log('Lottie Error:', error)}

        // style={{flex: 1}}
        
        />
      <Text>Terrerrerrer</Text>
      <Text>Terrerrerrer</Text>
    </SafeAreaView>
    </>
  )
}

export default Splash