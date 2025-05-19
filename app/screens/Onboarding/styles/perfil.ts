import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 82,
  },
  levelButton: {
    flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#ddd',
  borderRadius: 12,
  paddingVertical: 10, // Reduzido de 16
  paddingHorizontal: 16,
  marginBottom: 12, // Leve ajuste
  justifyContent: 'space-between',
  backgroundColor: '#ffff',
  },
  levelButtonSelected: {
    borderColor: '#0077c2',
    backgroundColor: '#b3e5fc',
  },
  levelText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  levelTextSelected: {
    color: '#0077c2',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: '#2dd27e',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  continueButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
