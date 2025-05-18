import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 50,
  },
  activeIcon: {
    backgroundColor: '#2dd27e',
  },
  inactiveIcon: {
    backgroundColor: '#ccc',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});


