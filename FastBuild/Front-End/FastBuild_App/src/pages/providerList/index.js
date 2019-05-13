import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

import {
    Container,
    PageTitle,
    CardContainer,
    CardServices,
    ButtonText,
    Input,
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: '',
            docs: [],
            docsRes: {
                descricao: '',
                idPrestador: 0,
                idTipoServico: 0,
                nomeCompleto: '',
                preco: 0,
                horarios: '',
            },
            docsEnv: {
                idCliente: 0,
                nomeCliente: '',
                idPrestador: 0,
                nomePrestador: '',
                idTipoServico: 0,
                precoServico: 0,
                horarios: '',
            }

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
        // console.log('ProviderList');
        // console.log(data);
        // console.log(this.props);
        // const params = this.props.navigation;
        // this.setState({docs: data});
        this.state.docs = data;
        this.state.docsEnv.idCliente = data.idCliente;
        this.state.docsEnv.nomeCliente = data.nomeCliente;
        // console.log(this.state);

        this.loadProvider();
    }

    handleServiceContractPress = (itemA, itemB, itemC, itemD) => {

        // console.log(itemA);
        this.state.docsEnv.idPrestador = itemA
        this.state.docsEnv.nomePrestador = itemB
        this.state.docsEnv.precoServico = itemC
        this.state.docsEnv.horarios = itemD
        // console.log(this.state);
        this.props.navigation.navigate('ProviderContractServices', (this.state.docsEnv));
    };

    loadProvider = async () => {
        const response = await api.get("/PrestadorServicos/2");

        const { dados } = response.data;
        // console.log(response.data);
        this.state.docsRes = response.data;
        this.state.pageTitle = response.data[0].descricao;
        this.state.docsEnv.idTipoServico = response.data[0].idTipoServico;
        this.setState({ dados });
    }

    
    renderItem = ({ item }) => (
        // <View onPress={() => {}}>
        //     <ButtonText>{item.nomeCompleto}</ButtonText>
        //     <ButtonText>R$ {item.preco}</ButtonText>
        // </View>

        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.nomeCompleto}</Text>
            <Text style={styles.productPreco}>R$ {item.preco}</Text>

            <TouchableOpacity style={styles.productButton} onPress={() => 
                this.handleServiceContractPress(item.idPrestador, item.nomeCompleto, item.preco, item.horarios)}>
                    <Text style={styles.productButtonText}>Contratar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        // console.log(this.props);
        return (
            <Container>
                <PageTitle>{this.state.pageTitle}</PageTitle>
                {
                    // this.state.docsRes.map(item => (
                    //     // <PageTitle key={item.idPrestador}>{item.descricao}</PageTitle>
                    //     <View key={item.idPrestador} style={styles.productContainer}>
                    //         <Text style={styles.productTitle}>{item.nomeCompleto}</Text>
                    //         <Text style={styles.productPreco}>R$ {item.preco}</Text>

                    //         <TouchableOpacity style={styles.productButton} onPress={this.handleServiceContractPress(item.idPrestador)}>
                    //             <Text style={styles.productButtonText}>Contratar</Text>
                    //         </TouchableOpacity>
                    //     </View>
                    // ))
                }
                <FlatList
                    contentContainerStyle={styles.container}
                    data={this.state.docsRes}
                    keyExtractor={item => item.idPrestador.toString()}
                    renderItem={this.renderItem}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        // paddingHorizontal: 20,
        // paddingVertical: 15
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productPreco: {
        fontSize: 16,
        color: "#707070",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#333",
        backgroundColor: "#FFCB31",
        width: 75,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",

    }
});