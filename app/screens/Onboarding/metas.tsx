import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/metas';

const goals = [
  'Improve Flexibility',
  'Better Sleep',
  'Exercise Prep and Recovery',
  'Improve Posture',
  'Morning Power Up',
  'Pain Relief',
  'Achieve Splits',
  'Improve Sex Life',
];

export default function Metas() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(item => item !== goal) : [...prev, goal]
    );
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.goalButton,
        selectedGoals.includes(item) && styles.goalButtonSelected,
      ]}
      onPress={() => toggleGoal(item)}
    >
      <Text
        style={[
          styles.goalText,
          selectedGoals.includes(item) && styles.goalTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        WHAT ARE YOUR MAIN{'\n'}GOALS FOR STRETCHING?
      </Text>

      <FlatList
        data={goals}
        renderItem={renderItem}
        keyExtractor={item => item}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedGoals.length === 0 && styles.continueButtonDisabled,
        ]}
        disabled={selectedGoals.length === 0}
        onPress={() => router.push('/screens/Onboarding/perfil')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}


