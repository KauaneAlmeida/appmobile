import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  option: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionSelected: {
    backgroundColor: '#d0f0c0',
    borderColor: '#66bb6a',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#66bb6a',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  nextText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
