import React, { Component } from 'react';
// import { Icon } from 'react-native-elements'
import { View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

import {
  Container,
  ContainerPrestador,
  ContainerTextPrestador,
  NotaPrestador,
  ContainerSession,
  SessionText,
  ContratoButton,
  ContainerHorario,
  HorarioButton,
  HorarioText,
  PrecoServico,
  FotoPrestador,
  PrestadorNameText,
  ConfirmacaoText,
  ConfirmacaoButton,
  ConfirmacaoButtonText,
  ContainerConfimacaoSession,
  ButtonText,
  Input,
} from './styles';

export default class ProviderContractServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
      docs: {
        idCliente: 0,
        nomeCliente: '',
        idPrestador: 0,
        nomePrestador: '',
        idTipoServico: 0,
        precoServico: 0,
        horariosServicos: '',
      },
      docsRes: []
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


  componentWillMount() {
    this.state.docs.idCliente = this.props.navigation.state.params.idCliente
    this.state.docs.nomeCliente = this.props.navigation.state.params.nomeCliente
    this.state.docs.idPrestador = this.props.navigation.state.params.idPrestador
    this.state.docs.nomePrestador = this.props.navigation.state.params.nomePrestador
    this.state.docs.idTipoServico = this.props.navigation.state.params.idTipoServico
    this.state.docs.precoServico = this.props.navigation.state.params.precoServico
    this.state.docs.horariosServicos = this.props.navigation.state.params.horarios

    console.log(this.state);
  }

  handleContratar =  async () => {
    await api.post('/ServicosContratadoes', {
      idCliente: this.state.docs.idCliente,
      idPrestador: this.state.docs.idPrestador,
      idTipoServico: this.state.docs.idTipoServico,
    });
  }

  render() {
    // const screenHeight = Dimensions.get('window').height
    return (
      <Container>
        {/* <View style={{ height: screenHeight }}>
          <ScrollView > */}
            <ContainerPrestador>
              <FotoPrestador source={require('../../images/user_3.png')} resizeMode="contain" />
              <ContainerTextPrestador>
                <PrestadorNameText>{this.state.docs.nomePrestador}</PrestadorNameText>
                <NotaPrestador>&#x2B50; 4.7</NotaPrestador>
              </ContainerTextPrestador>
            </ContainerPrestador>
            <ContainerSession>
              <SessionText>Horários Disponivéis</SessionText>
              <ContainerHorario>
                {this.state.docs.horariosServicos.split(';').map(hr =>
                  <HorarioButton key={this.state.Count++}>
                    <HorarioText>{hr}</HorarioText>
                  </HorarioButton>
                )}
              </ContainerHorario>
            </ContainerSession>
            <ContainerSession>
              <SessionText>Pagemento à vista</SessionText>
              <PrecoServico>R$ {this.state.docs.precoServico},00</PrecoServico>
              <SessionText>Pagamento no cartão:</SessionText>
              <PrecoServico>R$ {this.state.docs.precoServico + ((this.state.docs.precoServico * 10) / 100)},00</PrecoServico>
            </ContainerSession>
            <ContainerConfimacaoSession>
              <ConfirmacaoText>Confirmar Serviço</ConfirmacaoText>
              <ConfirmacaoButton onPress={this.handleContratar}>
                <ConfirmacaoButtonText>Confirmar</ConfirmacaoButtonText>
              </ConfirmacaoButton>
            </ContainerConfimacaoSession>
          {/* </ScrollView>
        </View> */}
      </Container>
    );
  }
}