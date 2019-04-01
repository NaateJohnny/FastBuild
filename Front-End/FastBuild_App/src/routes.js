import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

// export default createStackNavigator ({
//     Main
// });

const AppNavigator = createStackNavigator({
    Home: {
      screen: Main
    }, 
  });
  
  export default createAppContainer(AppNavigator);