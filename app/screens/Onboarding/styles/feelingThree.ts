import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width,
    height,
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    width,
    height,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  highlight: {
    color: '#FFFF00',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    backgroundColor: '#4ADE80',
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
