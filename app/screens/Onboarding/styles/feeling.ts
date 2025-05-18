import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
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
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  question: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  yesButton: {
    backgroundColor: '#00FF99',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
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
