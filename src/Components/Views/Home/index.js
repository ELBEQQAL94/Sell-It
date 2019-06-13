import React, { Component } from 'react';

// COMPONENTS
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView} from 'react-native';

class Home extends Component {

    render(){
        
        return(
            <ScrollView >
                <View style={styles.container}>
                   <Text >Home</Text>
                </View>
            </ScrollView>
        );
    };
};

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: "#EEE"
    },
    
});

export default Home;