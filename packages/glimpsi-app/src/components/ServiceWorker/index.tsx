import * as React from 'react';
import { withAnalyticsEvents, InjectedAnalyticsProps } from '@atlaskit/analytics-next';
import { register, unregister } from './registerServiceWorker';
import withNotifier, { InjectedProps } from '../../decorators/notifier';
import NewVersionAvailable from './NewVersionAvailable';

type Props = InjectedAnalyticsProps & InjectedProps;

export default withAnalyticsEvents()(
  withNotifier(
    class ServiceWorker extends React.Component<Props> {
      componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
          // Clear the serviceworker in anything other than production mode
          // So we can see the ready for offline usage.
          unregister();
        }

        register({
          onContentCached: () => {
            this.props
              .createAnalyticsEvent({
                action: 'Cached for Offline Use',
                category: 'Service Worker',
                nonInteraction: true,
              })
              .fire();

            this.props.notify('glimpsi is ready for offline usage.', {
              type: 'info',
              autoCloseMs: 4000,
            });
          },

          onNewContentAvailable: () => {
            this.props
              .createAnalyticsEvent({
                action: 'New Version Available',
                category: 'Service Worker',
                nonInteraction: true,
              })
              .fire();

            this.props.notify(<NewVersionAvailable />, { type: 'default', hideCloseButton: true });
          },

          // tslint:disable-next-line no-empty
          onRegistrationError: () => {},
        });
      }

      render() {
        return null;
      }
    }
  )
);
