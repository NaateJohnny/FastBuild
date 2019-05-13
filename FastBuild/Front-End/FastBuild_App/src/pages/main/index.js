import React, { Component } from 'react';

import { View, Text } from 'react-native';

import api from '../../services/api';

import {
  Container,
  AreaAutacaoText,
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
      docs: {
         celularPrincipal: '',
         celularSecundario: '',
         email: '',
         idCliente: 0,
         idEndereco: 0,
         idEnderecoNavigation: null,
         nomeCompleto: '',
         senha: '',
         servicosContratado:[]
      },
      docsRes: [],
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

  componentWillMount() {
    // console.log('main');
    // console.log(data);
    // console.log(this.props);
    // const params = this.props.navigation;
    // this.setState({docs: data});
    // this.setState({
    //   docs: data
    // })
    this.state.docs = data;
    // console.log(this.state.docs);
    // console.log(this.state);
    // console.log({...state.data});
    this.loadTipoServico();
  }
  
  loadTipoServico = async () => {
    const response = await api.get("/TipoServicoes");

    this.state.docsRes = response.data;

    console.log(response.data);
    console.log(this.state.docsRes);
  };
  
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
        <AreaAutacaoText>Áreas de Autação</AreaAutacaoText>
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

// import React, { Component } from 'react';

// import { View, Text, FlatList } from 'react-native';

// import api from '../../services/api';

// import {
//   Container,
//   AreaAutacaoText,
//   CardContainer,
//   CardServices,
//   ButtonText,
//   Input,
// } from './styles';

// // import styles from './styles';

// // const Main = () => (
// //   <View />
// // );

// // export default Main;

// export default class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       docs: {
//          celularPrincipal: '',
//          celularSecundario: '',
//          email: '',
//          idCliente: 0,
//          idEndereco: 0,
//          idEnderecoNavigation: null,
//          nomeCompleto: '',
//          senha: '',
//          servicosContratado:[]
//       },
//       docsRes: [],
//       docsEnv: {
//         idTipoServico: 0,
//         descricaoServico: '',
//       },
//     };
//   }
//   static navigationOptions = {
//     title: 'FastBuild',
//     headerStyle: {
//       backgroundColor: '#FFCB31',
//     },
//     headerTintColor: '#000',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   };

//   // state = {
//   //   data: []
//   // };

//   componentWillMount() {
//     // console.log('main');
//     // console.log(data);
//     // console.log(this.props);
//     // const params = this.props.navigation;
//     // this.setState({docs: data});
//     // this.setState({
//     //   docs: data
//     // })
//     this.state.docs = data;
//     // console.log(this.state.docs);
//     // console.log(this.state);
//     // console.log({...state.data});
//     this.loadTipoServico();
//   }
  
//   loadTipoServico = async () => {
//     const response = await api.get("/TipoServicoes");

//     this.state.docsRes = response.data;
//     // console.log(this.state.docsRes);
//   };
  
//   handleProviderListPress = (itemA, itemB) => {
//     console.log(itemA);
//     console.log(itemB);
//     this.props.navigation.navigate('ProviderList');
//   };

//   renderItem = ({item}) => (
//     // console.log(item.descricao)
//     <View>
//       <Text>{item.descricao}</Text>
//     </View>
//     // <TouchableOpacity style={backgroundColor='#333'} onPress={() => 
//     //   this.handleProviderListPress(item.idTipoServico, item.descricao)}>
//     //       <Text style={backgroundColor='#FFF'}>{item.descricao}</Text>
//     // </TouchableOpacity>
//   );

//   render() {
//     return (
//       <Container>
//         {/* <Input
//           placeholder="Tipo de Serviço"
//           // value={this.state.username}
//           // onChangeText={this.handleUsernameChange}
//           autoCapitalize="none"
//           autoCorrect={false}
//         /> */}
//         {/* <AreaAutacaoText>Áreas de Autação</AreaAutacaoText> */}
//         {/* <CardContainer> */}
//           {/* {this.state.docsRes.map(item =>
//             <CardServices key={item.idTipoServico} onPress={() => 
//               this.handleProviderListPress(item.idTipoServico, item.descricao)}>
//               <ButtonText>{item.descricao}</ButtonText>
//             </CardServices>
//           )} */}
//           <FlatList
//             data={this.state.docsRes}
//             keyExtractor={item => item.idTipoServico.toString()}
//             renderItem={this.renderItem}
//           />
//         {/* </CardContainer> */}
//       </Container>
//     );
//   }
// }