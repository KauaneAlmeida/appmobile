import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { styles } from './styles/calendario';

const injuries = [
  { label: 'None', key: 'none', icon: require('../assets/images/none.png') },
  { label: 'Spine', key: 'spine', icon: require('../assets/images/spine.png') },
  { label: 'Wrist', key: 'wrist', icon: require('../assets/images/wrist.png') },
  { label: 'Knee', key: 'knee', icon: require('../assets/images/knee.png') },
  { label: 'Ankle', key: 'ankle', icon: require('../assets/images/ankle.png') },
];

export default function Calendario() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInjury = (key: string) => {
    if (key === 'none') {
      setSelected(['none']);
    } else {
      const updated = selected.includes(key)
        ? selected.filter((item) => item !== key)
        : [...selected.filter((item) => item !== 'none'), key];
      setSelected(updated);
    }
  };

  const isSelected = (key: string) => selected.includes(key);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WHICH AREAS HAVE YOU INJURED?</Text>

      {injuries.map((injury) => (
        <TouchableOpacity
          key={injury.key}
          style={[
            styles.card,
            isSelected(injury.key) && styles.cardSelected,
          ]}
          onPress={() => toggleInjury(injury.key)}
        >
          <Image source={injury.icon} style={styles.icon} />
          <Text
            style={[
              styles.cardText,
              isSelected(injury.key) && styles.cardTextSelected,
            ]}
          >
            {injury.label}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.continueButton,
          selected.length === 0 && styles.continueButtonDisabled,
        ]}
        disabled={selected.length === 0}
        onPress={() => router.push('/posture')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}
