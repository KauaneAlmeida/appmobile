import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/gender';

const genders = [
  { label: 'Male', key: 'male', icon: require('../../../assets/images/male.png') },
  { label: 'Female', key: 'female', icon: require('../../../assets/images/female.png') },
  { label: 'Prefer Not to Say', key: 'unspecified', icon: null }, // Ícone opcional
];

export default function GenderScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WHAT IS YOUR GENDER?</Text>
      <Text style={styles.subtitle}>This will help us make adjustments to customize your plan.</Text>

      {genders.map((gender) => (
        <TouchableOpacity
          key={gender.key}
          style={[styles.card, selected === gender.key && styles.cardSelected]}
          onPress={() => setSelected(gender.key)}
        >
          {gender.icon && <Image source={gender.icon} style={styles.icon} />}
          <Text
            style={[
              styles.cardText,
              selected === gender.key && styles.cardTextSelected,
            ]}
          >
            {gender.label}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selected && styles.continueButtonDisabled,
        ]}
        disabled={!selected}
        onPress={() => router.push('/screens/Onboarding/range')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}
