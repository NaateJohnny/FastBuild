import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFCB31;
`;

const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;

const PageTitle = styled.Text`
  color: #333;
  fontWeight: bold;
  fontSize: 50px;
  textAlign: center;
  marginBottom: 50px;
  marginTop: 70px;
  paddingHorizontal: 20px;
  paddingVertical: 15px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderWidth: 1;
  borderRadius: 40px;
  borderColor: #333;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 40px;
  backgroundColor: #333;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #707070;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, Logo, PageTitle, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText };