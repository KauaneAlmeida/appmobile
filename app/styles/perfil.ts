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
    marginBottom: 32,
  },
  levelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  levelButtonSelected: {
    borderColor: '#6C63FF',
    backgroundColor: '#f0f0ff',
  },
  levelText: {
    fontSize: 18,
    fontWeight: '600',
  },
  levelTextSelected: {
    color: '#6C63FF',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  continueButtonDisabled: {
    backgroundColor: '#ccc',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
