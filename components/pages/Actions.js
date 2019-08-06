import * as React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import EmptyState from '../emptystate/Empty';
import * as Colors from '@pxblue/colors';

export default class Devices extends React.Component {
  render() {
    return (
        <EmptyState
          icon={<Icon name="devices" size={100} color={Colors.gray[500]} />}
          title={'No Devices'}
          actions={
            <Button
              icon={<Icon name="add-circle-outline" color={Colors.white[500]} />}
              title=" Add Device"
            />
          }
        />
    );
  }
}
