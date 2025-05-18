import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles/feeling';


export default function FeelingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/feeling.png')} // substitua pelo caminho da sua imagem real
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.question}>
          Do you want to feel more{' '}
          <Text style={styles.highlightYellow}>flexible</Text> and{' '}
          <Text style={styles.highlightYellow}>energetic</Text>?
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.noButton} onPress={() => router.push('/feelingSecond')}>
            <Text style={styles.noText}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton} onPress={() => router.push('/feelingSecond')}>
            <Text style={styles.yesText}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
