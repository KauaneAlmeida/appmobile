import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  content: {
    marginBottom: 40,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  highlight: {
    color: '#FFFF00',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonNo: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
  },
  buttonTextNo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonYes: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#4ADE80',
    alignItems: 'center',
  },
  buttonTextYes: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
