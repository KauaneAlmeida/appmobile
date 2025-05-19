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
    marginBottom: 62,
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
    backgroundColor: '#f0f0f0',
  },
  cardSelected: {
    borderColor: '#0077c2',
    backgroundColor: '#b3e5fc',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardTextSelected: {
    color: '#0077c2',
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
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
