import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
  },
  content: {
    marginBottom: 20,
  },
  question: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  highlight: {
    color: '#FFD700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  buttonNo: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonYes: {
    flex: 1,
    backgroundColor: '#4BE38C',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonTextNo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextYes: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
