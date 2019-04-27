import styled from 'styled-components';

// alignItems: center;

const Container = styled.View`
  flex: 1;
  width: 100%;
  justifyContent: center;
  backgroundColor: #FFCB31;
`;

const Logo = styled.Image`
  height: 10%;
  marginBottom: 20px;
`;

const PageTitle = styled.Text`
  color: #707070;
  fontWeight: bold;
  fontSize: 50px;
  textAlign: center;
  marginBottom: 50px;
  marginTop: 70px;
  paddingHorizontal: 20px;
  paddingVertical: 15px;
`;

const SuccessMessage = styled.Text`
  textAlign: center;
  color: #08a092;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderWidth: 1;
  borderRadius: 40px;
  borderColor: #DDD;
  backgroundColor: #fff;
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
  backgroundColor: #707070;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignInLinkText = styled.Text`
  color: #707070;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
  marginBottom: 25px;
`;

export { Container, Logo, PageTitle, SuccessMessage, Input, ErrorMessage, Button, ButtonText, SignInLink, SignInLinkText };