import React, { Component } from 'react';

// COMPONENTS
import { View, Text, StyleSheet } from 'react-native';

class AddPost extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>AddPost</Text>
            </View>
        );
    };
};

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddPost;