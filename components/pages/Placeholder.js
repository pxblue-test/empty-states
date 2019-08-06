import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as Colors from '@pxblue/colors';
import EmptyState from '../emptystate/Empty';

export class Alarms extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <EmptyState
          icon={
            <Icon name="notifications" size={100} color={Colors.gray[500]} />
          }
          title={'No Alarms Found'}
        />
      </View>
    );
  }
}

export default class Placeholder extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }}
        style={{ flex: 1, padding: 20 }}
        imageStyle={{ opacity: .2}}
      >
          <EmptyState
            icon={
              <Icon name="trending-up" size={100} color={Colors.gray[500]} />
            }
            title={'Predictions Page Coming Soon'}
            description={'A fully redesigned predictions page is coming in our next release!'}
            actions={ <Button title="LEARN MORE" type={'outline'} /> }
          />
      </ImageBackground>
    );
  }
}
