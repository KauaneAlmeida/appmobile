import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles/finalStep';
import { useRouter } from 'expo-router';

export default function FinalStep() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/background.png')} style={styles.image} resizeMode="cover" />

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
        <TouchableOpacity style={styles.button} onPress={() => router.push('/AllAge')}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
