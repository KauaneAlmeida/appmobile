import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vinda ao App de Alongamento!</Text>
      <TouchableOpacity
        onPress={() => router.push('/metas')}
        style={{ backgroundColor: '#2dd27e', padding: 15, borderRadius: 12 }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}
