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
      <Text style={styles.subtitle}>
        This will help us make adjustments to customize your plan.
      </Text>

      <View style={styles.genderRow}>
        {genders.slice(0, 2).map((gender) => (
          <TouchableOpacity
            key={gender.key}
            style={[
              styles.genderOption,
              selected === gender.key && styles.genderSelected,
            ]}
            onPress={() => setSelected(gender.key)}
          >
            <View>
              {gender.icon && <Image source={gender.icon} style={styles.genderImage} />}
            </View>
            <Text
              style={[
                styles.genderLabel,
                selected === gender.key && styles.genderLabelSelected,
              ]}
            >
              {gender.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Prefer Not to Say */}
      <TouchableOpacity
        key="unspecified"
        style={[
          styles.genderOptionFull,
          selected === 'unspecified' && styles.genderSelected,
        ]}
        onPress={() => setSelected('unspecified')}
      >
        <Text
          style={[
            styles.genderLabel,
            selected === 'unspecified' && styles.genderLabelSelected,
          ]}
        >
          Prefer Not to Say
        </Text>
      </TouchableOpacity>

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
