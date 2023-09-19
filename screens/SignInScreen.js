import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";

export default function SignInScreen({ promptAsync }) {
  const tw = useTailwind();
  // const [isLoading, setIsLoading]= useState(true);
  
  return (
    <SafeAreaView
      style={[tw("bg-indigo-950"),{ flex: 1, alignItems: "center",  }]}
    >
      <StatusBar style="light"/>
      {/* <Ionicons name="logo-firebase" size={100} color="#FFA611" />
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        Sign In with{" "}
        <Text style={{ color: "#4285F4" }}>
          G<Text style={{ color: "#EA4336" }}>o</Text>
          <Text style={{ color: "#FBBC04" }}>o</Text>
          <Text style={{ color: "#4285F4" }}>g</Text>
          <Text style={{ color: "#34A853" }}>l</Text>
          <Text style={{ color: "#EA4336" }}>e</Text>
        </Text>
      </Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>And Firebase</Text> */}
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 80,
          marginBottom: 150,
        }}

        //The reason we are calling this function like this is:we want to make sure the event is triggered 
        //only when user clicks the button
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
          Sign In with Google
        </Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 15,
          borderRadius: 15,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.9s ease-in-out',
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          // marginTop: 80,
          marginBottom:"auto",
        }}
      
      >
        {/* <Button title="Get Started" style={tw("")}/> */}
        <Text style={[tw("text-3xl font-semibold text-white")]}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}