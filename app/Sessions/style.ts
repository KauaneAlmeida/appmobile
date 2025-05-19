import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 70, // espaço para a navbar fixa
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  cardImage: {
    width: 170,
    height: 200,
    borderRadius: 12,
  },

  cardOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

dayBadge: {
  position: 'absolute',
  top: -110,
  left: -2,
  backgroundColor: '#00c676',
  color: '#fff',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 8,
  fontWeight: 'bold',
  fontSize: 14,
  zIndex: 1,
},
  
  cardTime: {
    color: '#fff',
    marginTop: 4,
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  cardTitle: {
    color: '#FFFFFF', 
    fontWeight: '900',
    fontSize: 20,
    marginTop: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
 

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  


  labCardPink: {
    backgroundColor: '#f8b6b6',
    borderRadius: 12,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  labCardBlue: {
    backgroundColor: '#b6d9f8',
    borderRadius: 12,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },


  categoryButton: {
    backgroundColor: '#e0f8e9',
    borderRadius: 12,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  navItem: {
    alignItems: 'center',
  },

  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 2,
    tintColor: 'rgba(100, 100, 100, 0.6)',
  },

  navLabel: {
    fontSize: 12,
    color: '#aaa',
  },

  navLabelActive: {
    fontSize: 12,
    color: '#00C282',
    fontWeight: '600',
  },

  labCard: {
  width: 160,
  height: 120,
  borderRadius: 12,
  overflow: 'hidden',
  margin: 8,
},

imageCard: {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',

},

imageCardRadius: {
  borderRadius: 12,
},

labText: {
  color: '#FFFFFF', 
  fontWeight: '900', 
  fontSize: 20,
  textAlign: 'center',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 8,
  textShadowColor: 'rgba(0, 0, 0, 0.7)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 4,
},

  categoryImageCard: {
  width: '48%',
  height: 140, 
  borderRadius: 12,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 12,
  backgroundColor: '#ccc',
},

  categoryImageText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  playIcon: {
  width: 40,
  height: 40,
  position: 'absolute',
  bottom: 10,
  right: 10,
  tintColor: 'white', 
},



lockedOverlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12,
},

lockIcon: {
  width: 40,
  height: 40,
  tintColor: '#fff',
},

progressBarContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 6,
  backgroundColor: '#555',
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  overflow: 'hidden',
},

progressBar: {
  height: '100%',
  backgroundColor: '#00C676',
},


});
