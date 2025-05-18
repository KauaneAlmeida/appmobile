import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { styles } from './styles/perfil';

const levels = [
  { label: 'Beginner', image: require('../assets/images/beginner.png') },
  { label: 'Intermediate', image: require('../assets/images/intermediate.png') },
  { label: 'Expert', image: require('../assets/images/expert.png') },
];

export default function Perfil() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOW FLEXIBLE ARE YOU?</Text>

      {levels.map((level) => (
        <TouchableOpacity
          key={level.label}
          style={[
            styles.levelButton,
            selectedLevel === level.label && styles.levelButtonSelected,
          ]}
          onPress={() => setSelectedLevel(level.label)}
        >
          <Text
            style={[
              styles.levelText,
              selectedLevel === level.label && styles.levelTextSelected,
            ]}
          >
            {level.label}
          </Text>
          <Image source={level.image} style={styles.image} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedLevel && styles.continueButtonDisabled,
        ]}
        disabled={!selectedLevel}
        onPress={() => router.push('/calendario')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}
