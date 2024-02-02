import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { styles } from '../styles';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface TextInputEditableProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type: string;
  editable?: boolean;
}

const TextInputEditableComponent: React.FC<TextInputEditableProps> = ({ value, onChangeText, placeholder, type, editable }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const getIconName = () => {
    switch (type) {
      case 'username':
        return 'person';
      case 'email':
        return 'email';
      case 'password':
        return 'key';
      case 'phone':
        return 'phone';
      case 'date':
        return 'calendar';
      default:
        return 'question'; // Icône par défaut si le type n'est pas reconnu
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.bigInputContainer}>
      <Text style={{color: '#0EBE7F'}}>{placeholder}</Text>
      <View style={styles.inputContainerEditableText}>
        <Fontisto name={getIconName()} size={20} color="#707070" style={styles.icon} />
        <TextInput
          style={styles.input}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          autoCapitalize="none"
          secureTextEntry={type === 'password' && secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#677294'}
        />
        {type === 'password' ? (
          <TouchableOpacity onPress={toggleSecureEntry}>
            {secureTextEntry ? (
              <AntDesign name="eye" size={20} color="#677294" style={styles.icon} />
            ) : (
              <Ionicons name="eye-off" size={20} color="#677294" style={styles.icon} />
            )}
          </TouchableOpacity>
        ) : (
         editable ? (
           // Ajoutez ici l'icône d'édition à droite
            <TouchableOpacity onPress={() => console.log('Edit pressed')}>
              <MaterialIcons name="edit" size={25} color="#677294" style={styles.icon} />
            </TouchableOpacity>
         ) : null
        )}
      </View>
    </View>
  );
};

export default TextInputEditableComponent;
