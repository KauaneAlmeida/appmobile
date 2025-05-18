import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  image: {
    width,
    height,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // leve escurecimento se desejar
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    marginTop: 4,
  },
  button: {
  marginTop: 30,
  backgroundColor: '#6EE7B7',
  paddingVertical: 14,
  paddingHorizontal: 40,
  borderRadius: 30,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

  },
);
