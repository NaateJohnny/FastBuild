import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import {
    Container,
    CardContainer,
    CardServices,
    ButtonText,
    Input,
  } from './styles';

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

    componentDidMount() {
        console.log('ProviderList');
        // console.log(data);
        console.log(this.props);
        // const params = this.props.navigation;
        // this.setState({docs: data});
        this.state.docs = data;
        console.log(this.state.docs);
        // console.log(this.state);
        // console.log({...state.data});
    }

    render() {
        return (
            <Container>
                <CardContainer>
                    <CardServices onPress={this.handleProviderListPress}>
                        <ButtonText>Antônio</ButtonText>
                    </CardServices>
                    <CardServices>
                        <ButtonText>Francisco</ButtonText>
                    </CardServices>
                </CardContainer>
                <CardContainer>
                    <CardServices>
                        <ButtonText>Marcelo</ButtonText>
                    </CardServices>
                    <CardServices>
                        <ButtonText>Pedro</ButtonText>
                    </CardServices>
                </CardContainer>
            </Container>
        );
    }
}