// import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
//We are implementing HOC Higher Order Component
import * as Google from "expo-auth-session/providers/google"; //we can access all google actions from then
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Settings from './screens/Settings';
import Splash from './screens/Splash'
import { TailwindProvider } from 'tailwind-rn';
import  utilities  from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login"
import Signup from "./screens/Signup"
// Initialize the WebBrowser
//This is basically going to capture when user wants to login
WebBrowser.maybeCompleteAuthSession()
const Stack = createNativeStackNavigator();


export default function App() {
  const [userInfo, setUserInfo] = useState()
  // Loading state to avoid the login screen fast transition
  const [loading, setLoading] = useState(false)
  // We are Going to use a Hook tha comes with Authentiction 
  //promptAsync  function is what starts login process\

  const [request, response, promptAsync] = Google.useAuthRequest({
    //Later keep them in .env file
    iosClientId:"699420084293-dq427sa4v16tn93ae1en5raieru6orgc.apps.googleusercontent.com",
    androidClientId:"699420084293-c0on34f2k3c5mpfn0l5a17r61vjbcrba.apps.googleusercontent.com"
  });

  const checkLocalUser = async () => {
    try {
      setLoading(true)
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("Local Storage:", userData);
      //check expiration of token

      setUserInfo(userData)
    } catch (error) {
      alert(error.message)
    } finally {
      // We are implementing here beacuse it will run no matter what scenario
      setLoading(false)
    }
  }


  //use Effect takes two params 1)callback function 2) Array of Dependancies(and when dependncies change we redo)

  useEffect(()=>{
    if(response?.type === "success"){
      const { id_token } = response.params; //guery params
      const credential = GoogleAuthProvider.credential(id_token);

      //This function will take Instance of the Authentication of our Firebase and credendials
      signInWithCredential(auth,credential)
    }

  },[response])

  useEffect(()=>{
    checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) =>{
      if (user){
        console.log(JSON.stringify(user,null,2));
        setUserInfo(user);
        //To set info in device we reccomend to Encrypt the data
        //It is capable to store stings
        await AsyncStorage.setItem("@user", JSON.stringify(user))
      }else{
        console.log("User is not authenticated")
        // console.log(auth)
      }
    });
      //we need to remove unsub when it is on mounted
    return () => unsub();

  },[])

  if (loading)
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
          <ActivityIndicator size={'large'} />
        </View>
    )
  return(
    <TailwindProvider utilities={utilities}>
        {/* { userInfo ? <>
          <Settings />
        </>:
          
          <SignInScreen promptAsync={promptAsync}/>
        
        } */}
  
        {/* <Splash /> */}
        {/* <Text>Page here Testing</Text> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    </TailwindProvider>
  )

}
