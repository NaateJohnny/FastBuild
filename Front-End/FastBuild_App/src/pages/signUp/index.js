import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, View, Text ,StyleSheet, Dimensions } from 'react-native';

import api from '../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';


import {
  Container,
  Logo,
  PageTitle,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './styles';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    email: '',
    celularPrin: '',
    celularSecu: '',
    password: '',
    descricaoEnd: '',
    complemento: '',
    cep: '',
    descricaoBairro: '',
    cidade: '',
    estado: '',
    error: '',
    success: '',
  };

  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handleCelularPrinChange = (celularPrin) => {
    this.setState({ celularPrin });
  };

  handleCelularSecuChange = (celularSecu) => {
    this.setState({ celularSecu });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  
  handleDescricaoEndChange = (descricaoEnd) => {
    this.setState({ descricaoEnd });
  };
  
  handleComplementoChange = (complemento) => {
    this.setState({ complemento });
  };
  
  handleCepChange = (cep) => {
    this.setState({ cep });
  };

  handleDescricaoBairroChange = (descricaoBairro) => {
    this.setState({ descricaoBairro });
  };

  handleCidadeChange = (cidade) => {
    this.setState({ cidade });
  };
 
  handleEstadoChange = (estado) => {
    this.setState({ estado });
  };

  handleBackToLoginPress = () => {
    this.props.navigation.goBack();
  };

  handleSignUpPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
      try {
        await api.post('/Clientes', {
          nomeCompleto: this.state.username,
          email: this.state.email,
          celularPrincipal: this.state.celularPrin,
          celularSecundario: this.state.celularSecu,
          senha: this.state.password,
          idEnderecoNavigation: {
            Descricao: this.state.descricaoEnd,
            Complemento: this.state.complemento,
            Cep: this.state.cep,
              idBairroNavigation: {
                Descricao: this.state.descricaoBairro,
                  Cidade: this.state.cidade,
                  Estado: this.state.estado
              }
            }
        });

        this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });

        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
        console.log(_err);
      }
    }
  };

  goToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'SignIn' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const screenHeight = Dimensions.get('window').height
    return (
      <Container>
        <StatusBar hidden />
        <View style={{height: screenHeight}}>
        <ScrollView /*contentContainerStyle={{ flexGrow: 1 }}*/>
        {/* <Logo source={require('../../images/logo_app.png')} resizeMode="contain" /> */}
        {this.state.success.length !== 0 && <SuccessMessage>{this.state.success}</SuccessMessage>}
        {/* <ScrollView 
            style={{flex: 1}}
            scrollEnabled={scrollEnabled}
        > */}
        <PageTitle>Cadastro</PageTitle>
        <Input
          placeholder="Nome Completo"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Endereço"
          value={this.state.descricaoEnd}
          onChangeText={this.handleDescricaoEndChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Complemento"
          value={this.state.complemento}
          onChangeText={this.handleComplementoChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Cep"
          value={this.state.cep}
          onChangeText={this.handleCepChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Bairro"
          value={this.state.descricaoBairro}
          onChangeText={this.handleDescricaoBairroChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Cidade"
          value={this.state.cidade}
          onChangeText={this.handleCidadeChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Estado"
          value={this.state.estado}
          onChangeText={this.handleEstadoChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Celular 1"
          value={this.state.celularPrin}
          onChangeText={this.handleCelularPrinChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Celular 2"
          value={this.state.celularSecu}
          onChangeText={this.handleCelularSecuChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {/* </ScrollView> */}
        {/* </FlatList> */}
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button onPress={this.handleSignUpPress}>
          <ButtonText>Criar conta</ButtonText>
        </Button>
        <Button onPress={this.handleBackToLoginPress}>
          <ButtonText>Voltar ao login</ButtonText>
        </Button>
        {/* <SignInLink onPress={this.handleBackToLoginPress}>
          <SignInLinkText>Voltar ao login</SignInLinkText>
        </SignInLink> */}
        </ScrollView>
        </View>
      </Container>
    );
  }
}