import React, {PropsWithChildren, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {FLIP_TIMEOUT} from '../../Constants';

import styles from './Card.styles';

interface CardProps {
  id: number;
  isFlipped?: boolean;
  flippedCards: number[];
  disabledFlip?: boolean;
  onCardFlip(): void;
  number: number;
}

function Card(props: PropsWithChildren<CardProps>): React.ReactElement | null {
  const {
    children,
    disabledFlip,
    id,
    flippedCards,
    onCardFlip,
    isFlipped: showEmpty,
    number,
  } = props;

  const [isFlipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (flippedCards.includes(id) && !isFlipped) {
        setFlipped(true);
      } else if (!flippedCards.includes(id) && isFlipped) {
        setFlipped(false);
      }
    }, FLIP_TIMEOUT);
  }, [id, flippedCards, isFlipped]);

  if (showEmpty) {
    return (
      <View style={[styles.cardContainer]}>
        <Text style={styles.cardText}>{number}</Text>
      </View>
    );
  }
  if (!isFlipped) {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, styles.backSide]}
        disabled={disabledFlip}
        onPress={() => {
          setFlipped(true);
          onCardFlip();
        }}
      />
    );
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      disabled={disabledFlip}
      onPress={() => setFlipped(false)}>
      {children}
    </TouchableOpacity>
  );
}

export default Card;
