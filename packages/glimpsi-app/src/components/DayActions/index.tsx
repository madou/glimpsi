import * as React from 'react';
import { Moment } from 'moment-timezone';
import { Button } from './styles';

type Callback = (options: { start: Moment }) => void;

const block = (cb: Callback, start: Moment) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb({ start });
};

interface Props {
  newCard: (options: { start: Moment }) => void;
  start: Moment;
}

const DayActions: React.StatelessComponent<Props> = ({ newCard, start }) => (
  <Button appearance="transparent" onClick={block(newCard, start)} key="button">
    Add more for {start.format('dddd Do MMMM')}
  </Button>
);

export default DayActions;
