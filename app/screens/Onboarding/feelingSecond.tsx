import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/feelingTwo';

export default function FeelingSecond() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../../assets/images/feelingtwo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.question}>
            Want to enjoy a life <Text style={styles.highlight}>free from tension and stress?</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonNo}>
            <Text style={styles.buttonTextNo}>NO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonYes}
            onPress={() => router.push('/screens/Onboarding/feelingThree')}
          >
            <Text style={styles.buttonTextYes}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
