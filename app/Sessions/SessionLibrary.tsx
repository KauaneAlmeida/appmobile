import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './SessionLibrary.styles';

const categories = [
  { name: 'Full Body', image: require('../../assets/img/fullbody.png') },
  { name: 'Neck', image: require('../../assets/img/neck.png') },
  { name: 'Shoulders', image: require('../../assets/img/shoulders.png') },
  { name: 'Arms', image: require('../../assets/img/arms.png') },
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
        title: '',
        time: '',
        image: require('../../assets/img/split1.png'),
      },
      {
        title: '',
        time: '',
        image: require('../../assets/img/split2.png'),
      },
    ],
  },
];

const SessionLibrary = () => {
  return (
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

      {/* Duration Filters - agora em coluna */}
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

  );
};

export default SessionLibrary;
