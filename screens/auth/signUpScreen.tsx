import React, { useState } from 'react';
import { ImageBackground, Text, View, ImageRequireSource, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles';
import { SocialButtonComponent } from '../../components/SocialButtonComponent';
import TextInputComponent from '../../components/textInputComponent';
import { ButtonComponent } from '../../components/buttonComponent';
import { RadioButton } from 'react-native-paper';

export const icGoogle: ImageRequireSource = require('../../assets/igoogle.png'); // Importez et déclarez l'image
export const icFacebook: ImageRequireSource = require('../../assets/ifacebook.png'); // Importez et déclarez l'image

export default function SignUpScreen({navigation}) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSetChecked = () => {
    setChecked(!checked);

  }
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode='cover'
        style={styles.imgBackground}
      >
       <ImageBackground
        source={require('../../assets/Ellipse_BG.png')}
        resizeMode='cover'
       >
        <View style={styles.formContainer}>
          <View style={[styles.headerContainer, {marginTop: 50}]}>
            <Text style={styles.headerTitle}>Join us to start searching</Text>
            <Text style={styles.headerDescription}>You can search c ourse, apply course and find {'\n'} scholarship for abroad studies</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, width: '90%' }}>
              <SocialButtonComponent 
                sourceSocialBtn={icGoogle} 
                textSocialBtn='Google' 
              />
              <SocialButtonComponent 
                sourceSocialBtn={icFacebook} 
                textSocialBtn='Facebook' 
              />
            </View>
            <View>
              <TextInputComponent 
                value={username}
                onChangeText={setUserName}
                placeholder='Username'
                type='username'
              />
              <TextInputComponent 
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
                type='email'
              />
              <TextInputComponent 
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
                type='password'
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton 
                  value="rbChecked"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={handleSetChecked}
                  color='#677294'
                />
                <Text style={[{ marginLeft: 8 }, styles.headerDescription]}>I agree with the Terms of Service & Privacy Policy</Text>
              </View>
            </View>
            <ButtonComponent textBtn={"Sign up"} handleOnPress={() => console.log('Sign up')}/>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.linkText}>Have an account? Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
       </ImageBackground>
      </ImageBackground>
    </View>
  );
}
