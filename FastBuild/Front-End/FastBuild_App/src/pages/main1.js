import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import api from '../services/api';


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

    componentWillMount(){
      this.loadUser();
    }

    loadUser = async () => {
      await api.get('/Clientes').then(response => {console.log(response.data);})
              .catch(erro => {console.log('Erro ao carregar! ' + erro)});
      // const response = await api.get('/Clientes');
      // const { docs } = response.data;
      // console.log(docs);
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