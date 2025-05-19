import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native';
import { styles } from './style'; // ajusta o caminho se necessário

export default function SessionHome() {
  const simulateNavigation = (screen: string) => {
    Alert.alert('Navegação simulada', `Você clicou em: ${screen}`);
  };

  
  return (
    <View style={{ flex: 1 }}>
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
  <TouchableOpacity style={styles.labCard} onPress={() => simulateNavigation('Workout Stretch')}>
    <ImageBackground source={require('../../assets/images/workout-stretch.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Workout Stretch</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.labCard} onPress={() => simulateNavigation('Pain Relief')}>
    <ImageBackground source={require('../../assets/images/pain-relief.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Pain Relief</Text>
    </ImageBackground>
  </TouchableOpacity>
</View>

        {/* Browse By Category */}
        <Text style={styles.sectionTitle}>Browse By Category</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Stretch for Men')}>
            <ImageBackground
              source={require('../../assets/images/stretch-for-men.png')}
              style={styles.imageCard}
              resizeMode="cover"
              imageStyle={styles.imageCardRadius}
            >
              <Text style={styles.categoryImageText}>Stretch for Men</Text>
            </ImageBackground>
          </TouchableOpacity>
        <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Pain Relief')}>
    <ImageBackground source={require('../../assets/images/pain-relief-men.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Pain Relief</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('After Exercise')}>
    <ImageBackground source={require('../../assets/images/after-exercise.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>After Exercise</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Morning Wake-up')}>
    <ImageBackground source={require('../../assets/images/morning-wakeup.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Morning Wake-up</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Before Bedtime')}>
    <ImageBackground source={require('../../assets/images/before-bedtime.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Before Bedtime</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Target Area')}>
    <ImageBackground source={require('../../assets/images/target-area.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Target Area</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Full Body Stretch')}>
    <ImageBackground source={require('../../assets/images/full-body.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Full Body Stretch</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('For Beginner')}>
    <ImageBackground source={require('../../assets/images/for-beginner.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>For Beginner</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Posture')}>
    <ImageBackground source={require('../../assets/images/posture.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Posture</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Office Pain Relief')}>
    <ImageBackground source={require('../../assets/images/office-relief.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Office Pain Relief</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Touch Feet Challenge')}>
    <ImageBackground source={require('../../assets/images/feet-challenge.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Touch Feet Challenge</Text>
    </ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={styles.categoryImageCard} onPress={() => simulateNavigation('Core Strength')}>
    <ImageBackground source={require('../../assets/images/core-strength.png')} style={styles.imageCard} imageStyle={styles.imageCardRadius}>
      <Text style={styles.labText}>Core Strength</Text>
    </ImageBackground>
  </TouchableOpacity>
</View>
      </ScrollView>

      {/* Navbar inferior fixa */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => simulateNavigation('Home')} style={styles.navItem}>
          <Image source={require('../../assets/images/home.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => simulateNavigation('Library')} style={styles.navItem}>
          <Image source={require('../../assets/images/library.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => simulateNavigation('Custom')} style={styles.navItem}>
          <Image source={require('../../assets/images/custom.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Custom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => simulateNavigation('Profile')} style={styles.navItem}>
          <Image source={require('../../assets/images/profile.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
