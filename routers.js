// usin react navigation 
import { 
    createStackNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator,
    createAppContainer } from 'react-navigation';

// SCREENS
import Home    from './src/Components/Views/Home';
import Login   from './src/Components/Views/Auth/Login';
import Register   from './src/Components/Views/Auth/Register';
import AddPost from './src/Components/Views/Admin/AddPost';



const TabScreen = createMaterialTopTabNavigator(
  
    {
      Login: { 
        screen: Login 
      },
      Register: { 
        screen: Register
       },
      Home:{
        screen: Home
      }
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#18558c',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      },
    }
  );

  const TabMainScreens = createMaterialTopTabNavigator(
    // Public Screens
      {
        AddPost: { 
          screen: AddPost 
        },
        Home:{
          screen: Home
        }
      },
      {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#18558c',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        },
      }
    );

    // Public Screens
const AuthStack = createStackNavigator({ 
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f49222',
      },
      headerTintColor: '#EEE',
      title: 'My App',
    },
}
});

// Private Screen
const AppStack = createStackNavigator({
  TabScreen: {
    screen: TabMainScreens,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f49222',
      },
      headerTintColor: '#EEE',
      title: 'My App',
    },
}
});
   
const AppStackNavigator = createSwitchNavigator({
   Auth: AuthStack,
   App: AppStack
  },
{
  initialRouteName: 'Auth'
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;
