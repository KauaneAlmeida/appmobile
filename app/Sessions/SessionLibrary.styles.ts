import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: 72, // maior que antes
    height: 72,
    borderRadius: 36,
  },
  categoryLabel: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
  },
  // NOVO: Coluna para durations
  durationWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#E6FFF3',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 10,
  },
  filterText: {
    color: '#00B77F',
    fontWeight: '500',
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionAll: {
    color: '#00B77F',
    fontWeight: '500',
  },
  card: {
    marginRight: 12,
    width: 180, // maior
  },
  cardImage: {
    width: '100%',
    height: 110,
    borderRadius: 12,
  },
  cardTime: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#00000080',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 10,
    borderRadius: 4,
  },
  cardTitle: {
    marginTop: 8,
    fontWeight: '500',
  },

durationScroll: {
  flexDirection: 'row',
  marginTop: 8,
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

});


export default styles;

