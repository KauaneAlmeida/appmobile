import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
    paddingTop: 5,
    gap: 10,
  },
  goalButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
  },
  goalButtonSelected: {
    backgroundColor: '#b3e5fc',
  },
  goalText: {
    fontSize: 16,
    color: '#333',
  },
  goalTextSelected: {
    fontWeight: 'bold',
    color: '#0077c2',
  },
  continueButton: {
    marginTop: 5,
    backgroundColor: '#2dd27e',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
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
