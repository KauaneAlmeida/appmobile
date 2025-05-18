import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles/duration';

const options = [
  'Up To 5 Minutes',
  '6–10 Minutes',
  '11–15 Minutes',
  'More Than 15 Minutes'
];

export default function Duration() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>HOW LONG DO YOU TYPICALLY EXERCISE EACH SESSION?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selected === option && styles.optionSelected
          ]}
          onPress={() => setSelected(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
