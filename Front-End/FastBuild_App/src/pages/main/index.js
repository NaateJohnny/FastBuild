import React, { Component } from 'react';

import { View, Text } from 'react-native';

import api from '../../services/api';

import {
  Container,
  CardContainer,
  CardServices,
  ButtonText,
  Input,
} from './styles';

// import styles from './styles';

// const Main = () => (
//   <View />
// );

// export default Main;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }
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

  // state = {
  //   data: []
  // };

  componentDidMount() {
    console.log('main');
    // console.log(data);
    // console.log(this.props);
    // const params = this.props.navigation;
    // this.setState({docs: data});
    this.state.docs = data;
    console.log(this.state.docs);
    // console.log(this.state);
    // console.log({...state.data});
  }

  handleProviderListPress = () => {
    this.props.navigation.navigate('ProviderList');
  };

  render() {
    return (
      <Container>
        <Input
          placeholder="Tipo de Serviço"
          // value={this.state.username}
          // onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CardContainer>
          <CardServices onPress={this.handleProviderListPress}>
            <ButtonText>Eletricista</ButtonText>
          </CardServices>
          <CardServices>
            <ButtonText>Marceneiro</ButtonText>
          </CardServices>
        </CardContainer>
        <CardContainer>
          <CardServices>
            <ButtonText>Chaveiro</ButtonText>
          </CardServices>
          <CardServices>
            <ButtonText>Bomb. Hidraúlico</ButtonText>
          </CardServices>
        </CardContainer>
      </Container>
    );
  }
}