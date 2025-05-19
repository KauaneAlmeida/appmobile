import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/feelingThree';

export default function PosturePrompt() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../../assets/images/feelingThree.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.question}>
            Ready to improve <Text style={styles.highlight}>posture and relieve pain?</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonNo}>
            <Text style={styles.buttonTextNo}>NO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonYes}
            onPress={() => router.push('/Sessions/SessionHome')} // ou outra rota desejada
          >
            <Text style={styles.buttonTextYes}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
