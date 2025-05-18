import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/finalStep';

export default function FinalStep() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/background.png')} style={styles.image} resizeMode="cover" />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          WE UNDERSTAND YOUR GOALS AND ARE HERE TO HELP.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Our app offers:</Text>
          <Text style={styles.cardText}>
            ✅ Real-life video guides with clear and easy-to-follow instructions.
          </Text>
          <Text style={styles.cardText}>
            ✅ Personalized plans designed specifically for you.
          </Text>
        </View>

        {/* Botão CONTINUE */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/Onboarding/AllAge')}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
