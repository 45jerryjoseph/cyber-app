import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import { AntDesign } from "@expo/vector-icons";


const Home = (props) => {
  return (
    <Background>
      {/* <Image 
        source={require("../assets/logo.jpg")}
        style={{height: 150, width:150, marginHorizontal: 220,marginVertical: 200, objectFit:"cover", borderRadius: 60}}
      /> */}
      <View style={{ marginHorizontal: 120, marginVertical: 350 }}>
        <Text style={{ color: 'white', fontSize: 34, marginBottom: 40, marginHorizontal: 20 }}>Explore the Cyber-Space</Text>
        <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
        <Text style={{ color: 'white', fontSize: 34, marginHorizontal: 70, marginVertical: 30 }}>or Continue with</Text>
        <View style={{flexDirection: "row", marginHorizontal: 65, marginVertical: 15 ,justifyContent:"space-between"}}>
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <AntDesign name="google" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <AntDesign name="twitter" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 10}}>
              <AntDesign name="github" size={40} color="white" />
          </TouchableOpacity>

        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
