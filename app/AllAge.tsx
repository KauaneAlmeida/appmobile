import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles/allAge';

export default function AllAge() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/allAge-screen.png')} style={styles.image} resizeMode="cover" />

      <View style={styles.overlay}>
        <Text style={styles.title}>OUR APP IS DESIGNED FOR ALL AGE!</Text>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            Based on your info, we've tailored a plan specifically for you, aged{' '}
            <Text style={styles.highlight}>20–30</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/feeling')}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

