import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  emptyCard: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  backSide: {
    backgroundColor: 'steelblue',
  },
  cardText: {
    textAlign: 'center',
    color: '#000',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#steelblue',
  },
  number: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  cardFront: {
    position: 'absolute',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
