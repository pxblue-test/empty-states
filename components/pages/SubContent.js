import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { EmptyState, wrapIcon } from '@pxblue/react-native-components';

import * as Colors from '@pxblue/colors';

const DevicesIcon = wrapIcon({IconClass: Icon, name:'devices'});

const devices = [
  {
    name: 'Device 101',
  },
  {
    name: 'Device 201',
    performance: 'Poor',
    batteryLife: '20%',
  },
  {
    name: 'Device 202',
    performance: 'Average',
    batteryLife: '15%',
  },
  {
    name: 'Device 203',
    performance: 'Excellent',
    batteryLife: '96%',
  },
];

export default class Other extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 20}}>
        {devices.map((device, index) => (
          <Card
            key={index}
            containerStyle={StyleSheet.flatten([styles.card, index === devices.length - 1 ? {marginBottom: 0} : {}])}
            title={device.name}
            titleStyle={StyleSheet.flatten([styles.title, {backgroundColor: device.performance ? Colors.blue[500] : Colors.orange[500]}])}
            dividerStyle={{marginBottom: 0}}>
            {device.performance ? (
              <View>
                <View style={styles.row}>
                  <Text style={styles.text}>Performance</Text>
                  <Text style={styles.text}>{device.performance}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>Battery Life</Text>
                  <Text style={styles.text}>{device.batteryLife}</Text>
                </View>
                <View style={styles.actions}>
                  <Button title="REPORT" type="clear" />
                  <Button title="LEARN MORE" type="clear" />
                </View>
              </View>
            ) : (
              <EmptyState
                IconClass={DevicesIcon}
                title={'No Data'}
              />
            )}
          </Card>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 0,
    marginBottom: 20
  },
  title: {
    color: Colors.white[50],
    textAlign: 'left',
    marginBottom: 0,
    height: 40,
    padding: 10,
  },
  row: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  actions:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: Colors.gray[500],
    fontSize: 14,
    fontWeight: '400',
  }
});
