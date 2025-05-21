import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Corrigido para usar useRouter
import styles from './SessionLibrary.styles';

const categories = [
  { name: 'Full Body', image: require('../../assets/img/fullbody.png') },
  { name: 'Neck', image: require('../../assets/img/neck.png') },
  { name: 'Shoulders', image: require('../../assets/img/shoulders.png') },
  { name: 'Arms', image: require('../../assets/img/arms.png') },
  { name: 'Chest', image: require('../../assets/img/Chest.png') },
  { name: 'Abdomen', image: require('../../assets/img/Abdomen.png') },
  { name: 'Lower Back', image: require('../../assets/img/lower-back.png') },
  { name: 'Legs', image: require('../../assets/img/Legs.png') },
  { name: 'Hips', image: require('../../assets/img/Hips.png') },

];

const durations = ['0–5 min', '6–10 min', '11–15 min', '>15 min'];

const stretches = [
  {
    section: 'Try Some Stretch for Men',
    data: [
      {
        title: 'Full Body Quick Stretching',
        time: '5 Mins',
        image: require('../../assets/img/stretch1.png'),
      },
      {
        title: 'Bedtime Release Stretch',
        time: '5 Mins',
        image: require('../../assets/img/stretch2.png'),
      },
    ],
  },
  {
    section: 'Split Challenge',
    data: [
      {
        title: 'Hip-Opening Warm-Up for Flexibility',
        time: '5 Mins',
        image: require('../../assets/img/split1.png'),
      },
      {
        title: "Beginner’s Split: Getting Closer",
        time: '11 Mins',
        image: require('../../assets/img/split2.png'),
      },
    ],
  },
  {
    section: 'Build Core Strength',
    data: [
      {
        title: 'Core and Leg Activation',
        time: '5 Mins',
        image: require('../../assets/img/core1.png'),
      },
      {
        title: 'Abdominal and Hip Relaxation',
        time: '5 Mins',
        image: require('../../assets/img/core2.png'),
      },
    ],
  },
  {
    section: 'Quick & Easy',
    data: [
      {
        title: 'Quick Chair Stretch',
        time: '6 Mins',
        image: require('../../assets/img/quick1.png'),
      },
      {
        title: 'Neck and Shoulder Reset',
        time: '14 Mins',
        image: require('../../assets/img/quick2.png'),
      },
    ],
  },
  {
    section: 'Full Body Easy Stretch',
    data: [
      {
        title: 'Dynamic Endurance Boost',
        time: '17 Mins',
        image: require('../../assets/img/fullbody1.png'),
      },
      {
        title: 'Full Body Relaxation',
        time: '11 Mins',
        image: require('../../assets/img/fullbody2.png'),
      },
    ],
  },
  {
    section: 'Lower Back Healing',
    data: [
      {
        title: 'Lower Back & Spine Release',
        time: '5 Mins',
        image: require('../../assets/img/back1.png'),
      },
      {
        title: 'Spine Twists',
        time: '5 Mins',
        image: require('../../assets/img/back2.png'),
      },
    ],
  },
  {
    section: '5 min Easy Stretch',
    data: [
      {
        title: 'Quick Hamstruing Activantion',
        time: '5 Mins',
        image: require('../../assets/img/easy1.png'),
      },
      {
        title: 'Lower Back & Spine Release',
        time: '5 Mins',
        image: require('../../assets/img/easy2.png'),
      },
    ],
  },

  {
    section: 'Relieve Shoulders Stress',
    data: [
      {
        title: 'Shoulder & Neck Stretch',
        time: '5 Mins',
        image: require('../../assets/img/shoulder1.png'),
      },
      {
        title: 'Shoulder, Chest & Back Relaxation',
        time: '5 Mins',
        image: require('../../assets/img/shoulder2.png'),
      },
    ],
  },
  {
    section: 'Before & After Running',
    data: [
      {
        title: 'Lower Limb Mobility Activation',
        time: '10 Mins',
        image: require('../../assets/img/running1.png'),
      },
      {
        title: 'Calf Relaxation and Hamstring Release',
        time: '10 Mins',
        image: require('../../assets/img/running2.png'),
      },
    ],
  },
  {
    section: 'Free Arms and Shoulders',
    data: [
      {
        title: 'Shoulder & Chest Relaxation',
        time: '5 Mins',
        image: require('../../assets/img/arms1.png'),
      },
      {
        title: 'Upper Limb Stretch & Release',
        time: '5 Mins',
        image: require('../../assets/img/arms2.png'),
      },
    ],
  },
    
   {
    section: 'Touch Feet Challenge',
    data: [
       {
        title: 'Lower Back & Spine Release',
        time: '5 Mins',
        image: require('../../assets/img/easy2.png'),
      },
      {
        title: 'Joint & Leg Relaxation',
        time: '5 Mins',
        image: require('../../assets/img/feet2.png'),
      },
    ],
  },  
   {
    section: 'Feel Chest Opening',
    data: [
      {
        title: 'Chest and Spine Expansio',
        time: '5 Mins',
        image: require('../../assets/img/chest1.png'),
      },
      {
        title: 'Thoracic Spine and Chest Stretch',
        time: '5 Mins',
        image: require('../../assets/img/chest2.png'),
      },
    ],
  },
    
   {
    section: 'Feel Hips Stretching',
    data: [
      {
        title: 'Hip & Core Stretch',
        time: '5 Mins',
        image: require('../../assets/img/hips1.png'),
      },
      {
        title: 'Morning Hip Awakening',
        time: '5 Mins',
        image: require('../../assets/img/hips2.png'),
      },
    ],
  },
 
   {
    section: 'Take a Break from Sitting',
    data: [
       {
        title: 'Lower Back & Spine Release',
        time: '5 Mins',
        image: require('../../assets/img/back1.png'),
      },
      {
        title: 'Spine Twists',
        time: '5 Mins',
        image: require('../../assets/img/back2.png'),
      },
    ],
  },

    {
    section: 'Quick & Easy',
    data: [
       {
        title: 'Upper Body Stretch',
        time: '6 Mins',
        image: require('../../assets/img/upper1.png'),
      },
      {
        title: 'Shoulder & Neck Flexibility',
        time: '14 Mins',
        image: require('../../assets/img/flexibility.png'),
      },
    ],
  },

    {
    section: 'Hot & New',
    data: [
      {
        title: 'Chest and Shoulder Unlock',
        time: '5 Mins',
        image: require('../../assets/img/flexibility.png'),
      },
       {
        title: 'Upper Body Stretch',
        time: '6 Mins',
        image: require('../../assets/img/flexibility2.png'),
      },
    ],
  },

];

const SessionLibrary = () => {
  const router = useRouter();  // Hook para navegação

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>LIBRARY</Text>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View style={styles.categoryItem} key={index}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryLabel}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Duration Filters */}
        <View style={styles.durationWrapper}>
          <Text style={styles.sectionTitle}>Duration</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.durationScroll}>
            {durations.map((d, i) => (
              <TouchableOpacity style={styles.filterButton} key={i}>
                <Text style={styles.filterText}>{d}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Stretch Sections */}
        {stretches.map((section, i) => (
          <View key={i} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.section}</Text>
              <Text style={styles.sectionAll}>All ›</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {section.data.map((card, idx) => (
                <View style={styles.card} key={idx}>
                  <Image source={card.image} style={styles.cardImage} />
                  {card.time ? <Text style={styles.cardTime}>{card.time}</Text> : null}
                  {card.title ? <Text style={styles.cardTitle}>{card.title}</Text> : null}
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
 
      {/* Navbar inferior fixa */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push('/Sessions/SessionHome')} style={styles.navItem}>
         <Image source={require('../../assets/images/home.png')} style={styles.navIcon} />
       <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/Sessions/SessionLibrary')} style={styles.navItem}>
          <Image source={require('../../assets/images/library.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/Sessions/custom')} style={styles.navItem}>
          <Image source={require('../../assets/images/custom.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Custom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/Sessions/profile')} style={styles.navItem}>
          <Image source={require('../../assets/images/profile.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SessionLibrary;
