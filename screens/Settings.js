import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title='Sign Out' onPress={async () => await signOut(auth)} />
    </View>
  )
}

export default Settings