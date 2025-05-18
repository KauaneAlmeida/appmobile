import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eee',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'flex-start',
    gap: 16,
  },
  cardSelected: {
    borderColor: '#6C63FF',
    backgroundColor: '#f0f0ff',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardTextSelected: {
    color: '#6C63FF',
  },
  icon: {
    width: 32,
    height: 32,
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
