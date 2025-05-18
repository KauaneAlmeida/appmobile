import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles/duration';
import { useRouter } from 'expo-router';

const options = [
  'Up To 5 Minutes',
  '6–10 Minutes',
  '11–15 Minutes',
  'More Than 15 Minutes'
];

export default function Duration() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (option: string) => {
    setSelected(option);
    router.push('/StretchTime'); // Certifique-se de que StretchTime.tsx está em `app/`
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>HOW LONG DO YOU TYPICALLY EXERCISE EACH SESSION?</Text>
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              selected === option && styles.optionSelected
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
