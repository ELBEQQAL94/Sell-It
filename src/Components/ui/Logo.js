import React, { Component } from 'react';

// COMPONENTS
import { 
    View, 
    Text, 
    StyleSheet, 
    Animated, 
    Easing } from 'react-native';

class Logo extends Component {
    state={
        sellAnim: new Animated.Value(0),
        itAnim: new Animated.Value(0)
    };

    componentWillMount(){
        const sellAnim = this.state.sellAnim;
        const itAnim   = this.state.itAnim;
       Animated.sequence([
           Animated.timing(sellAnim, {
               toValue:1,
               duration: 1000,
               easing: Easing.easeOutCubic
           }),
           Animated.timing(itAnim, {
            toValue:1,
            duration: 1000,
            easing: Easing.easeOutCubic
        })
       ]).start(() => {
           this.props.showLogin();
       });
    };

    render(){
        console.log(this.props.orientation)
        return(
        <View>
            <View style={
                this.props.orientation === "portrait"
                ?
                styles.logoStylePortrait
                :
                styles.logoStyleLandscape
            }>

               <Animated.View 
               style={{
                   opacity: this.state.sellAnim,
                   top: this.state.sellAnim.interpolate({
                           inputRange:[0,1],
                           outputRange: [100,0]
                       })
                    }}
               >
                    <Text style={styles.logo}>Sell</Text>
               </Animated.View>   

               <Animated.View 
               style={{
                   opacity: this.state.itAnim,
                   top: this.state.itAnim.interpolate({
                           inputRange:[0,1],
                           outputRange: [100,0]
                       })
                    }}
               >
                    <Text>It</Text>
               </Animated.View>            
  
            </View>
        </View>
        );
    };
};

const styles = StyleSheet.create({
    logoStylePortrait:{
        marginTop:50,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100
    },
    logoStyleLandscape:{
        marginTop:20,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50
    },
    logo:{
        fontSize: 40,
        color: 'blue',
    }
});

export default Logo;