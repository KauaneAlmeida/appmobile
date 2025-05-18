import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  optionButtonSelected: {
    backgroundColor: '#d0f0e0',
    borderColor: '#4CAF50',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  optionTextSelected: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },
  continueButton: {
  marginTop: 24,
  padding: 16,
  backgroundColor: '#4CAF50',
  borderRadius: 8,
  alignItems: 'center',
},
continueButtonDisabled: {
  backgroundColor: '#BDBDBD',
},
continueText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

});
