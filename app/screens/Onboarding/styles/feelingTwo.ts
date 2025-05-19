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
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
    marginBottom: 30,
  },
  highlight: {
    color: '#FFD700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonNo: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
  },
  buttonYes: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: '#00FF99',
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
