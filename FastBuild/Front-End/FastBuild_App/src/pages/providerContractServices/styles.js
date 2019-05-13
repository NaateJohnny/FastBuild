import styled from 'styled-components';

import { Dimensions } from 'react-native';

// backgroundColor: #F7FCEE; F1F1FF; F1EEF5; F5FAF3;

export const Container = styled.View`
  flex: 1;
  alignItems: flex-start;
  justifyContent: flex-start;
  backgroundColor: #FFF;
`;

export const ContainerPrestador = styled.View`
  height: 25%;
  width: 100%;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
  backgroundColor: #F1F1F1;
`;

export const ContainerTextPrestador = styled.View`
  height: 60%;
  width: 60%;
  alignItems: flex-start;
  justifyContent: center;
`;

export const NotaPrestador= styled.Text` 
    fontSize: 18px;
    color: #707070;
    marginTop: 5;
    lineHeight: 24;
`;

export const SessionText = styled.Text`
  color: #333;
  fontSize: 20px;
  textAlign: left;
  marginTop: 10;
  fontWeight: bold;
`;

export const ContainerSession = styled.View`
  height: 25%;
  width: 100%;
  marginTop: -25;
  paddingLeft: 25px;
  alignItems: flex-start;
  justifyContent: center;
`;

export const ContainerConfimacaoSession = styled.View`
  height: 25%;
  width: 100%;
  alignItems: center;
  justifyContent: center;
`;

export const PrecoServico = styled.Text` 
    fontSize: 18px;
    color: #707070;
    paddingLeft: 20px;
    marginTop: 5;
    lineHeight: 24;
`;

export const FotoPrestador = styled.Image`
  height: 45%;
  width: 30%;
`;

export const ConfirmacaoText = styled.Text`
  color: #333;
  fontSize: 20px;
  textAlign: left;
  marginTop: 15;
  fontWeight: bold;
`;

export const PageTitle = styled.Text`
  color: #333;
  fontWeight: bold;
  fontSize: 30px;
  textAlign: center;
  marginBottom: 20px;
  marginTop: 30px;
  paddingHorizontal: 20px;
  paddingVertical: 15px;
`;

export const CardContainer = styled.View`
  flexDirection: row;
  height: 25%;
  width: 100%;
  alignItems: center;
  justifyContent: center;
`;

export const ContratoButton = styled.TouchableOpacity`
    height: 42;
    borderRadius: 10;
    borderWidth: 2;
    borderColor: #333;
    backgroundColor: #FFCB31;
    width: 75;
    height: 30;
    justifyContent: center;
    alignItems: center;
    marginTop: 10;
`;

export const ContainerHorario = styled.View`
  height: 40%;
  width: 90%;
  paddingLeft: 5px;
  paddingRight: 5px;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
  flexWrap: wrap;
`;

export const HorarioButton = styled.TouchableOpacity`
    borderRadius: 10;
    borderWidth: 2;
    borderColor: #333;
    backgroundColor: #FFF;
    width: 75;
    height: 30;
    justifyContent: center;
    alignItems: center;
    marginTop: 10;
    marginLeft: 5;
    marginRight: 5;
`;

export const HorarioText = styled.Text`
  color: #333;
  fontSize: 16px;
  textAlign: center;
  fontWeight: bold;
`;

export const ConfirmacaoButton = styled.TouchableOpacity`
    height: 42;
    width: 120;
    borderRadius: 15
    borderWidth: 2;
    borderColor: #FFCB31;
    backgroundColor: #333;
    justifyContent: center;
    alignItems: center;
    marginTop: 10;
    marginLeft: 5;
    marginRight: 5;
`;

export const ConfirmacaoButtonText = styled.Text`
  color: #FFF;
  fontSize: 16px;
  textAlign: center;
  fontWeight: bold;
`;

export const CardServices = styled.TouchableHighlight`
  borderRadius: 10;
  backgroundColor: #808080;
  borderWidth: 1;
  borderColor: #DDD;
  width: 35%;
  height: 70%;
  marginTop: 5px;
  marginBottom: 5px;
  marginRight: 20px;
  marginLeft: 15px;
  justifyContent: center;

`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderWidth: 1;
  borderRadius: 40px;
  borderColor: #DDD;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

export const ButtonText = styled.Text`
  color: #333;
  fontSize: 16px;
  textAlign: left;
  fontWeight: bold;
`;

export const PrestadorNameText = styled.Text`
  color: #333;
  fontSize: 20px;
  textAlign: left;
  fontWeight: bold;
`;

export const AnnotationContainer = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #fc6663;
  borderRadius: 5;
  padding: 5px;
`;

export const AnnotationText = styled.Text`
  fontSize: 14px;
  color: #fff;
`;

export const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
  alignSelf: center;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

export const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
`;

export const CancelButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #555;
  marginTop: 20px;
`;

export const SelectButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

export const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  alignSelf: center;
  top: ${(Dimensions.get('window').height / 2) - 60};
`;

export const ModalContainer = styled.View`
  flex: 1;
  backgroundColor: #FFF;
`;

export const ModalImagesListContainer = styled.View``;

export const ModalImagesList = styled.ScrollView`
  paddingHorizontal: 20px;
  paddingTop: 20px;
`;

export const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  marginRight: 10px;
`;

export const ModalButtons = styled.View`
  paddingHorizontal: 10px;
  paddingVertical: 5px;
  flexDirection: row;
  justifyContent: space-between;
`;

export const CameraButtonContainer = styled.TouchableHighlight`
  paddingVertical: 20px;
  paddingHorizontal: 40px;
`;

export const CancelButtonText = styled.Text`
  color: #333;
  fontSize: 18px;
  fontWeight: bold;
`;

export const ContinueButtonText = styled.Text`
  color: #fc6663;
  fontSize: 18px;
  fontWeight: bold;
`;

export const TakePictureButtonContainer = styled.TouchableHighlight`
  position: absolute;
  alignSelf: center;
  bottom: 20;
  width: 60px;
  height: 60px;
  backgroundColor: #FFF;
  borderRadius: 30px;
  alignItems: center;
  justifyContent: center;
`;

export const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  borderRadius: 26px;
  backgroundColor: #fc6663;
`;

export const DataButtonsWrapper = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  paddingHorizontal: 20px;
`;

export const MarkerContainer = styled.View`
  width: 30px;
  height: 30px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFF;
  borderRadius: 15px;
`;

export const MarkerLabel = styled.View`
  width: 24px;
  height: 24px;
  borderRadius: 12px;
  backgroundColor: #7159C1;
`;

export const Form = styled.View`
  flex: 1;
  marginTop: 20px;
`;

export const DetailsModalFirstDivision = styled.View`
  flex: 3;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalSecondDivision = styled.View`
  flex: 4;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalThirdDivision = styled.View`
  flex: 3;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalBackButton = styled.Text`
  color: #fc6663;
  fontSize: 18px;
  fontWeight: bold;
`;

export const DetailsModalRealtyTitle = styled.Text`
  fontSize: 28px;
  fontWeight: bold;
  textAlign: center;
  marginBottom: 15px;
  marginHorizontal: 40px;
`;

export const DetailsModalRealtySubTitle = styled.Text`
  fontSize: 22px;
  textAlign: center;
  marginBottom: 15px;
  marginHorizontal: 40px;
`;

export const DetailsModalRealtyAddress = styled.Text`
  fontSize: 18px;
  color: #999;
  textAlign: center;
  marginHorizontal: 60px;
`;

export const DetailsModalPrice = styled.Text`
  color: #fc6663;
  fontSize: 28px;
  fontWeight: bold;
`;