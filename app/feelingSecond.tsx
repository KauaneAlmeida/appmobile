import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles/feelingTwo';

export default function FeelingSecond() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/feelingtwo.png')}
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
            <Text style={styles.buttonTextNo}>BAD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonYes}
            onPress={() => router.push('/feelingThree')}
          >
            <Text style={styles.buttonTextYes}>GOOD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
