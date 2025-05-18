import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles/posture';
import { router } from 'expo-router';

const postures = [
  {
    label: 'Hunchback',
    image: require('../assets/images/hunchback.png'),
  },
  {
    label: 'Leaning Tower',
    image: require('../assets/images/leaning-tower.png'),
  },
  {
    label: 'Anterior Pelvic Tilt',
    image: require('../assets/images/anterior-pelvic-tilt.png'),
  },
  {
    label: 'None',
    image: require('../assets/images/none-back.png'),
  },
];

export default function Posture() {
  const [selectedPosture, setSelectedPosture] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WHICH POSTURE BOTHERS YOU?</Text>

      {postures.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={[
            styles.optionButton,
            selectedPosture === item.label && styles.optionButtonSelected,
          ]}
          onPress={() => setSelectedPosture(item.label)}
        >
          <Text
            style={[
              styles.optionText,
              selectedPosture === item.label && styles.optionTextSelected,
            ]}
          >
            {item.label}
          </Text>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedPosture && styles.continueButtonDisabled,
        ]}
        disabled={!selectedPosture}
        onPress={() => router.push('/gender')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}
