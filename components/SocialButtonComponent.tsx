import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

interface SocialButtonProps {
  textSocialBtn: string;
  sourceSocialBtn: number; // Utilisez le type correct pour le chemin de l'image
}

export const SocialButtonComponent: React.FC<SocialButtonProps> = ({ sourceSocialBtn, textSocialBtn }) => {
  return (
    <TouchableOpacity style={styles.socialBtnContainer}>
      <Image source={sourceSocialBtn} style={{ width: 18, height: 18, resizeMode: 'cover' }} />
      <Text style={styles.socialBtnText}>{textSocialBtn}</Text>
    </TouchableOpacity>
  );
}
