import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // evita que o texto encoste nas bordas
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
          textAlign: 'center', // garante centralização do texto
        }}
      >
        Bem-vinda ao App de Alongamento!
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/screens/Onboarding/metas')}
        style={{
          backgroundColor: '#2dd27e',
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}
