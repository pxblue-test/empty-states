import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { EmptyState, wrapIcon } from '@pxblue/react-native-components';
const TrendIcon = wrapIcon({IconClass: Icon, name:'trending-up'});


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
            IconClass={TrendIcon}
            title={'Predictions Page Coming Soon'}
            description={'A fully redesigned predictions page is coming in our next release!'}
            actions={ <Button title="LEARN MORE" type={'outline'} /> }
          />
      </ImageBackground>
    );
  }
}
