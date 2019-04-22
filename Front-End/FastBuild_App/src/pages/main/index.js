import React, { Component } from 'react';

import { View, Text } from 'react-native';

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
  constructor(props){
    super(props);
    state = {
    data: []
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
    console.log(data);
    // console.log(this.props);
    // const params = this.props.navigation;
    // this.setState(data = data);
    // console.log(this.state);
    // console.log({...state.data});
  }

  render() {
    return (
        <Container>
          <Input
            placeholder="Nome Completo"
            // value={this.state.username}
            // onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <CardContainer>
          <CardServices>
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