import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const intialRegion={
    latitude: 58.0105,
    longitude: 56.2502,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default function Index() {
  return (
    <MapView
    initialRegion={intialRegion}
    style={styles.map}
    >
    <Marker
        coordinate={intialRegion}
    />
    
    </MapView>
  );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
