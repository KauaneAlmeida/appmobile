import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32, // aumentado
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28, // aumentado
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16, // aumentado
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24, // aumentado
  },
  genderOption: {
    alignItems: 'center',
    width: '42%',
  },
  genderOptionFull: {
    alignItems: 'center',
    paddingVertical: 18, // aumentado
    marginVertical: 16, // aumentado
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    width: '100%',
  },

  genderImage: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
  genderLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    top: 1,
  },
  genderLabelSelected: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  genderSelected: {
    borderColor: '#4CAF50',
  },
  continueButton: {
    marginTop: 32, // aumentado
    paddingVertical: 20, // aumentado
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#BDBDBD',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18, // aumentado
  },
});
