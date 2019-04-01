import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'FastBuild',
        headerStyle: {
            backgroundColor: '#FFCB31',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>FastBuild</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFCB31',
    },
    welcome: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
  });