import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';

export default function SessionHome() {
  const simulateNavigation = (screen: string) => {
    Alert.alert('Navegação simulada', `Você clicou em: ${screen}`);
    // Exemplo futuro:
    // router.push('/screens/Sessions/Day1')
  };

  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>28-DAY PLAN</Text>

      {/* Plano de Dias */}
      <View style={styles.planContainer}>
        {/* Dia 1 */}
        <TouchableOpacity onPress={() => simulateNavigation('Day 1 - Flexibility Awakening')}>
          <Image source={require('../../assets/images/day1.png')} style={styles.cardImage} />
          <View style={styles.cardOverlay}>
            <Text style={styles.dayBadge}>Day 1</Text>
            <Text style={styles.cardTime}>7 Mins</Text>
            <Text style={styles.cardTitle}>Flexibility Awakening</Text>
          </View>
        </TouchableOpacity>

        {/* Dia 2 */}
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
      </View>
    </ScrollView>
  );
}
