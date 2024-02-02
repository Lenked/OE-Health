import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../styles';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type: string;
}

const TextInputComponent: React.FC<TextInputProps> = ({ value, onChangeText, placeholder, type }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const getIconName = () => {
    switch (type) {
      case 'username':
        return 'person';
      case 'email':
        return 'email';
      case 'password':
        return 'key';
      default:
        return 'question'; // Icône par défaut si le type n'est pas reconnu
    }
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.inputContainer}>
      <Fontisto name={getIconName()} size={20} color="#707070" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={type === 'password' && secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#677294'}
      />
      {type === 'password' ? (
      secureTextEntry ? 
      <AntDesign name="eye" size={20} color="#677294" style={styles.icon} onPress={toggleSecureEntry}/> 
      :
      <Ionicons name="eye-off" size={20} color="#677294" style={styles.icon} onPress={toggleSecureEntry}/>
    ) : null}
    </View>
  );
};

export default TextInputComponent;
