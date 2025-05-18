import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
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
    backgroundColor: '#00c676',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  cardTime: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
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
  rowGap: 12, // se desejar espaçamento vertical entre as linhas
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
  labText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryCard: {
    backgroundColor: '#e0f8e9',
    borderRadius: 12,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
