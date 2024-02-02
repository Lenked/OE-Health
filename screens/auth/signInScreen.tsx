import React, { useState } from 'react';
import { ImageBackground, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles';
import TextInputComponent from '../../components/textInputComponent';
import { ButtonComponent } from '../../components/buttonComponent';
import { SocialButtonComponent } from '../../components/SocialButtonComponent';
import { icFacebook, icGoogle } from './signUpScreen';


export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Mettez ici la logique de connexion avec les informations d'email et de mot de passe
    console.log('Signing in with:', email, password);
  };

  return (
    <View style={{ flex: 1 }}>
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
          <View style={[styles.headerContainer, { marginTop: 50 }]}>
            <Text style={styles.headerTitle}>Welcome back!</Text>
            <Text style={styles.headerDescription}>You can search c ourse, apply course and find {'\n'} scholarship for abroad studies</Text>
          </View>
          <View>
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
            <ButtonComponent textBtn={"Login"} handleOnPress={handleSignIn} />
            <TouchableOpacity>
              <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
