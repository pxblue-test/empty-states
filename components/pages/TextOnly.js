import * as React from 'react';
import { Icon } from 'react-native-elements';
import * as Colors from '@pxblue/colors';
import EmptyState from '../emptystate/Empty';

export default class TextOnly extends React.Component {
  render() {
    return (
      <EmptyState
        icon={<Icon name="notifications" size={100} color={Colors.gray[500]} />}
        title={'No Alarms Found'}
      />
    );
  }
}
