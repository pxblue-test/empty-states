import * as React from 'react';
import { Button, Icon } from 'react-native-elements';
import { EmptyState, wrapIcon } from '@pxblue/react-native-components';
import * as Colors from '@pxblue/colors';
const DevicesIcon = wrapIcon({IconClass: Icon, name:'devices'});

export default class Devices extends React.Component {
  render() {
    return (
        <EmptyState
          IconClass={DevicesIcon}
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
