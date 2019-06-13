import React, { Component } from 'react';

// COMPONENTS
import { View, StyleSheet } from 'react-native';
import { getOrientation, 
    setOrientationListener 
} from '../../ui/misc';
import Logo from '../../ui/Logo';
import LoginForm from './LoginForm';

class Login extends Component {

    constructor(props){

        super(props);

            this.state = {
                orientation: getOrientation(500),
                logoAnimation: false
            }

        setOrientationListener(this.changeOrientation);

    }

    changeOrientation = () => {

      this.setState({
          orientation: getOrientation(500)
      })

    };

    showLogin = () => {

        this.setState({ logoAnimation : true });

    };

    navigateTo = () => {
        return this.props.navigation.navigate("Register")
    }

    render(){

        const {navigate} = this.props.navigation;

        return(

            <View style={styles.container}>

                <Logo 
                    orientation={this.state.orientation}
                    showLogin = {this.showLogin}
                />

                <LoginForm 
                    navigate={() => navigate("AddPost")}
                />

            </View>
        );
    };
};

// STYLES
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    }
    
});

export default Login;