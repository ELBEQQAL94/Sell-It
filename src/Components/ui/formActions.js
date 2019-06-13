import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

// Update Form
export const updateForm = (name, value, formdata) => {

    let currentForm = {
        ...formdata
    };

    currentForm[name].value = value;

    return currentForm;
};


const validateRequired = value => {
    if(value !== "")return true; 
    return false;
};


// Check Email
const validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


// Validation Length of Value
const validateMinLength = (value, number) => {
    if(value.length < number)return false;
    return true;
};


// Identifier Password
const confirmPassword = (
    confirmPass, 
    password) => {
      return confirmPass === password;
};


// VALIDATION FORM
export const validation = (rules, value, form) => {

    let valid = true;
    
    for(let rule in rules){

        switch(rule){

            case "isRequired":
               valid = valid && validateRequired(value);
               break;

            case "isEmail":
               valid = valid && validateEmail(value);
               break;

            case "minLength":
               valid = valid && validateMinLength(value, rules[rule]);
               break;

            case "confirmPassword":
               valid = valid && confirmPassword(value, form[rules.confirmPassword].value);
               break;

            default: valid = true;

        }
    }

    return valid;
};

// SUBMIT FORM
export const SubmitForm = formdata => {

    let isValid = true;

    let submitData = {};

    let form = {
        ...formdata
    };


    for(let key in form){
            
        isValid = isValid && form[key].valid;

        // grab data in to data to submit by user
        submitData[key] = form[key].value;

    };

    return [isValid, submitData];
        

};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5
    },
    textError:{
        color: 'red'
    }
});

// Show Error
export const showError = (error) => (
    error ?
    <View style={{marginTop: 5, marginBottom: 5}}>
        <Text style={{color: 'red'}}>
            Something went wrong, check your data please.
        </Text>
    </View>
    : null
);