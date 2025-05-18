import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
  },
  selected: {
    backgroundColor: '#d0f0d0',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    marginTop: 32,
    padding: 18,
    borderRadius: 24,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
