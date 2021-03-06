import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment-timezone';
import styled from 'styled-components';
import Card from './';

const Container = styled.div`
  max-width: 400px;
`;

storiesOf('Card', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('minimum content', () => (
    <Card
      labels={['fun']}
      title="MariCar Kawaguchiko"
      location={{
        formattedAddress: 'Kawaguchiko, Japan',
        position: {
          lat: 1,
          lng: 1,
        },
      }}
      notes=""
      start={moment.tz('America/Los_Angeles')}
      duration={60}
    />
  ))
  .add('with everything maxed out', () => (
    <Card
      labels={['fun', 'accom', 'booked', 'need to book']}
      title="Grand Ultimate Sumo Wrestling Tournament in Tokyo"
      markerId={4}
      location={{
        formattedAddress: 'Ryogoku Kokugikan',
        position: {
          lat: 1,
          lng: 1,
        },
      }}
      notes="The sickers on the back of the ticket are for the bento boxes. The day starts at 9am but probably get there at 2am. See: https://buysumotickets.com/faq.html#day-of-the-event"
      start={moment.tz('America/Los_Angeles')}
      duration={30}
    />
  ))
  .add('different timezone', () => (
    <Card
      labels={['fun']}
      title="MariCar Kawaguchiko"
      location={{
        formattedAddress: 'Kawaguchiko, Japan',
        position: {
          lat: 1,
          lng: 1,
        },
      }}
      notes=""
      start={moment.tz('2018-01-30T11:55:00', 'America/Los_Angeles')}
      duration={60}
    />
  ));
