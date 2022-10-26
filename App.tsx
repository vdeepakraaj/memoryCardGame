import React, {useEffect, useState} from 'react';
import {Text, View, Button, ScrollView, StyleSheet, Alert} from 'react-native';
import {CARD_PAIRS_VALUE, generateAndShuffleDeck} from './data/Deck';
import Card from './component/Card';
import {ONE, TWO} from './Constants';

export default App = () => {
  const [cardsShowing, setCardsShowing] = useState<number[]>([]);
  const [steps, setSteps] = useState<number>(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [shuffleDeck, setShuffleDeck] = useState<boolean>(false);

  useEffect(() => {
    if (shuffleDeck) {
      generateAndShuffleDeck();
      setShuffleDeck(false);
      setSteps(0);
    }
  }, [shuffleDeck]);

  useEffect(() => {
    if (cardsShowing.length >= ONE) {
      setSteps(steps + 1);
    }
    if (cardsShowing.length === TWO) {
      const isMatch =
        CARD_PAIRS_VALUE[cardsShowing[0]] === CARD_PAIRS_VALUE[cardsShowing[1]];
      if (isMatch) {
        setFlippedCards(prev => [...prev, ...cardsShowing]);
        setCardsShowing([]);
      } else {
        setCardsShowing([]);
      }
    }
  }, [cardsShowing]);

  if (flippedCards.length === CARD_PAIRS_VALUE.length) {
    Alert.alert(`Congratulations`, `You win this round by ${steps} steps`, [
      {
        text: 'Try another round',
        onPress: () => {
          setFlippedCards([]);
          setShuffleDeck(true);
        },
      },
    ]);
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.buttonStyle}>
        <View style={styles.buttonContainer}>
          <Button
            title="Retry"
            onPress={() => {
              setFlippedCards([]);
              setShuffleDeck(true);
            }}
          />
        </View>
        <View style={styles.stepsContainer}>
          <Text style={styles.stepsText}>{`STEPS:`}</Text>
          <Text style={styles.steps}>{` ${steps} `}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {CARD_PAIRS_VALUE.map((number, idx) => (
          <Card
            key={idx}
            id={idx}
            flippedCards={cardsShowing}
            isFlipped={flippedCards.includes(idx)}
            onCardFlip={() => {
              setCardsShowing(prev => [...prev, idx]);
            }}
            number={number}
            disabledFlip={cardsShowing.length > ONE}>
            <Text style={styles.cardText}>{number}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 20,
    justifyContent: 'center',
  },

  restartButton: {
    alignItems: 'baseline',
    margin: 20,
  },

  buttonStyle: {
    alignItems: 'baseline',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    margin: 10,
  },
  stepsContainer: {
    margin: 10,
    flexDirection: 'row',
  },
  endGameText: {
    padding: 10,
  },
  steps: {
    color: 'steelblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepsText: {
    color: 'black',
    fontSize: 20,
  },
  cardText: {
    textAlign: 'center',
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
});
