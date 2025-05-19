import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  image: {
  width: '100%',
  height: '100%',
  position: 'absolute',
  },

  overlay: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  question: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
    marginBottom: 57,
  },
  highlightYellow: {
    color: '#FFD600',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  noButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 62,
  },
  yesButton: {
    backgroundColor: '#00FF99',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 62,
  },
  noText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  yesText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
