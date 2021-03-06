import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import cards from '../../state/timeline/exampleCards';
import Timeline from './';

const groups = [
  {
    date: moment(),
    cards: [
      {
        id: '1',
        start: moment(),
        duration: 400,
        title: 'Fly to Japan',
        time: moment('1970-01-01 00:30:00Z'),
        notes: '',
        location: {
          formattedAddress: 'Sydney Airport (SYD)',
          position: { lat: -33.9399228, lng: 151.1752764 },
        },
        labels: ['travel'],
      },
      {
        id: '2',
        start: moment(),
        duration: 400,
        notes: 'meh',
        title: 'Another  to Japan',
        time: moment('1970-01-01 00:30:00Z'),
        location: {
          formattedAddress: 'Sydney Airport (SYD)',
          position: { lat: -33.9399228, lng: 151.1752764 },
        },
        labels: ['travel'],
      },
    ],
  },
  {
    date: moment().add(1, 'day'),
    cards: cards.slice(2, 4),
  },
];

const commonProps = {
  newCard: action('newCard()'),
  saveCard: action('saveCard()'),
  focusDate: action('focusDate()'),
  undoDelete: action('undoDelete()'),
  removeCard: action('removeCard()'),
  editCard: action('editCard()'),
  highlightedCard: undefined,
  focusedCard: undefined,
};

storiesOf('Timeline', module)
  .add('default', () => (
    <Timeline {...commonProps} days={groups} filters={[moment(), moment().add(1, 'day')]} />
  ))
  .add('empty', () => (
    <Timeline {...commonProps} days={[]} filters={[moment(), moment().add(1, 'day')]} />
  ));
