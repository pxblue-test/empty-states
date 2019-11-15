import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Header, ThemeProvider, wrapIcon } from '@pxblue/react-native-components';
import TabNavigator from './components/navigation/TabNavigator';

import { ReactNativeThemes } from '@pxblue/themes';
import * as Font from 'expo-font';

import { Icon } from 'react-native-elements';
const MenuIcon = wrapIcon({ IconClass: Icon, name: 'menu' });

export default class App extends React.Component {
  /*
   * This componentDidMount method is used to asynchronously load the open sans font into
   * this expo application. This is needed to use the PX Blue themes. Make sure that the
   * fonts have been copied into the assets/fonts folder for loading.
  */
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (this.state.fontLoaded ?
      <ThemeProvider theme={ReactNativeThemes.blue}>
        <View style={styles.container}>
          <Header
            navigation={{ icon: MenuIcon, onPress: () => { } }}
            title={'Empty States'}
          />
          <TabNavigator />
        </View>
      </ThemeProvider> : null);
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: 18,
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
});

