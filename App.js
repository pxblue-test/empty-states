import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Header } from 'react-native-elements';
import TabNavigator from './components/navigation/TabNavigator';
import * as Colors from '@pxblue/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={Colors.blue[500]}
          centerComponent={{ text: 'Empty States', style: { color: '#fff', fontSize: 16, } }}
        />
        <TabNavigator />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: 18,
  },
});

