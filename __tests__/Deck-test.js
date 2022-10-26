import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../component/Card';
import {generateAndShuffleDeck} from '../data/Deck';

test('renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('test generate & shuffle nums', () => {
  const number = generateAndShuffleDeck();
  expect(number.length).toEqual(12);
});
