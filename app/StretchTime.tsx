import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles/stretchTime';
import { useRouter } from 'expo-router';

const stretchOptions = [
  { label: 'After Waking Up', icon: require('../assets/images/sun.png') },
  { label: 'After Morning Coffee or Tea', icon: require('../assets/images/coffee.png') },
  { label: 'Before & After Exercising', icon: require('../assets/images/exercise.png') },
  { label: 'Before Bedtime', icon: require('../assets/images/bed.png') },
  { label: 'During Work Break', icon: require('../assets/images/break.png') },
  { label: 'No Preference', icon: require('../assets/images/no-preference.png') },
];

export default function StretchTime() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (option: string) => {
    setSelected(option);
    router.push('/FinalStep'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WHEN WOULD YOU LIKE TO STRETCH?</Text>
      {stretchOptions.map((option) => (
        <TouchableOpacity
          key={option.label}
          style={[
            styles.option,
            selected === option.label && styles.selected
          ]}
          onPress={() => handleSelect(option.label)}
        >
          <Image source={option.icon} style={styles.icon} />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
