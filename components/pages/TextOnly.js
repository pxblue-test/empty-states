import * as React from 'react';
import { Icon } from 'react-native-elements';
import { EmptyState, wrapIcon } from '@pxblue/react-native-components';
const AlarmsIcon = wrapIcon({IconClass: Icon, name:'notifications'});

export default class TextOnly extends React.Component {
  render() {
    return (
      <EmptyState
        IconClass={AlarmsIcon}
        title={'No Alarms Found'}
      />
    );
  }
}
