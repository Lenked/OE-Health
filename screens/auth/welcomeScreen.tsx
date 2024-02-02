import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles'
import { ButtonComponent } from '../../components/buttonComponent'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ButtonComponent textBtn={"Let's go"} handleOnPress={() => navigation.navigate('signUp')}/>
    </View>
  )
}
