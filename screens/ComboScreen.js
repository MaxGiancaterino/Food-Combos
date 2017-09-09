import React from 'react';
import { AppRegistry, ScrollView, FlatList, StyleSheet, Image, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import SwipeComponent from '../navigation/swipe.js';

export default class ComboScreen extends React.Component {
  static navigationOptions = {
    title: 'Combos',
  };

  render() {
    return (
        <SwipeComponent>
        <ScrollView style={styles.container}>
          <Text style={{fontSize:20}}>Apple says hi</Text>
          <Image style={{width: 50, height: 50}} source={require('./pics/app-icon.png')} />
        </ScrollView>
        </SwipeComponent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

