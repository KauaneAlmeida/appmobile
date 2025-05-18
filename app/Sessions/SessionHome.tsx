import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';

export default function SessionHome() {
  const simulateNavigation = (screen: string) => {
    Alert.alert('Navegação simulada', `Você clicou em: ${screen}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>28-DAY PLAN</Text>

      {/* Plano de Dias */}
      <View style={styles.planContainer}>
        <TouchableOpacity onPress={() => simulateNavigation('Day 1 - Flexibility Awakening')}>
          <Image source={require('../../assets/images/day1.png')} style={styles.cardImage} />
          <View style={styles.cardOverlay}>
            <Text style={styles.dayBadge}>Day 1</Text>
            <Text style={styles.cardTime}>7 Mins</Text>
            <Text style={styles.cardTitle}>Flexibility Awakening</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => simulateNavigation('Day 2 - Upper Body Stretch')}>
          <Image source={require('../../assets/images/day2.png')} style={styles.cardImage} />
          <View style={styles.cardOverlay}>
            <Text style={styles.dayBadge}>Day 2</Text>
            <Text style={styles.cardTime}>6 Mins</Text>
            <Text style={styles.cardTitle}>Upper Body Stretch</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Wellness Labs */}
      <Text style={styles.sectionTitle}>Wellness Labs</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.labCardPink} onPress={() => simulateNavigation('Workout Stretch')}>
          <Text style={styles.labText}>Workout Stretch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labCardBlue} onPress={() => simulateNavigation('Pain Relief')}>
          <Text style={styles.labText}>Pain Relief</Text>
        </TouchableOpacity>
      </View>

      {/* Browse By Category */}
      <Text style={styles.sectionTitle}>Browse By Category</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Stretch for Men')}>
          <Text style={styles.categoryText}>Stretch for Men</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Pain Relief')}>
          <Text style={styles.categoryText}>Pain Relief</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('After Exercise')}>
          <Text style={styles.categoryText}>After Exercise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Morning Wake-up')}>
          <Text style={styles.categoryText}>Morning Wake-up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Before Bedtime')}>
          <Text style={styles.categoryText}>Before Bedtime</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Target Area')}>
          <Text style={styles.categoryText}>Target Area</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Full Body Stretch')}>
          <Text style={styles.categoryText}>Full Body Stretch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('For Beginner')}>
          <Text style={styles.categoryText}>For Beginner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Posture')}>
          <Text style={styles.categoryText}>Posture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Office Pain Relief')}>
          <Text style={styles.categoryText}>Office Pain Relief</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Touch Feet Challenge')}>
          <Text style={styles.categoryText}>Touch Feet Challenge</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => simulateNavigation('Core Strength')}>
          <Text style={styles.categoryText}>Core Strength</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
