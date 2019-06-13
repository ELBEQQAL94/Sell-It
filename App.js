import React, { Component } from 'react';
import  Navigator   from './routers';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { ActivityIndicator, StyleSheet } from 'react-native';

// STORE
import  configStore  from './src/Components/store/config';

const store = configStore();

//const Navigator = createAppContainer(AppStackNavigator);

class App extends Component{
  
  state = {
    fontsLoaded: false
  };

  async componentDidMount(){
    await Font.loadAsync({
        font1: require('./assets/fonts/Roboto-Medium.ttf'),
        font2: require('./assets/fonts/Suwannaphum-Regular.ttf')
    });
    this.setState({fontsLoaded: true});
  };


  render(){

    if(this.state.fontsLoaded)

    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    else return <ActivityIndicator 
                  style={styles.container} 
                  size="large" 
                /> 
  };

};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;



