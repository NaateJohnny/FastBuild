import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';
import ProviderList from './pages/providerList';

// import Main from './pages/main';

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Main
  },
  ProviderList: {
    screen: ProviderList
  }
});

// export default createStackNavigator ({
//     Main
// });

// const AppNavigator = createStackNavigator({
//     Home: {
//       screen: Main
//     }, 
//   });
  
export default createAppContainer(AppNavigator);

// const Routes = createStackNavigator({
//   SignIn,
//   SignUp,
//   Main,
// });

// export default Routes;