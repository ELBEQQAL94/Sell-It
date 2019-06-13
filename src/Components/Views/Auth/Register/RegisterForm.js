import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../ui/Input";
import { 
  updateForm,
  validation, 
  SubmitForm, 
  showError } from '../../ui/formActions';

class RegisterForm extends Component {

  state = {

    hasErrors: false,

    form: {

      email: {

        value: "",
        valid: false,
        type: "text",
        id:"email",
        rules: {
          isRequired: true,
          isEmail: true
        }

      },

      password: {
        value: "",
        valid: false,
        type: "text",
        id:"password",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },

      confirmPassword: {
        value: "",
        id:"confirmPassword",
        valid: false,
        type: "text",
        rules: {
          confirmPassword: "password"
        }
      }

    }

  };

  // UPDATE FORM 
  updateInput = (name, value) => {

    this.setState({
        hasErrors: false
    });

    currentForm = updateForm(name, value, this.state.form);

    let rules = currentForm[name].rules;

    let valid = validation(rules, value, currentForm);

    currentForm[name].valid = valid;

    this.setState({
        form: currentForm
    });

  };

  // SUBMIT 
  submit = () => {

    let info = SubmitForm(this.state.form);

    if(info[0]){

      // go to AddPost screen
      this.props.navigate()

    } else {

      this.setState({
        hasErrors: true
      });

    }

  };


  render() {

    const email    = this.state.form.email;

    const password = this.state.form.password; 

    const confirmPassword = this.state.form.confirmPassword;

    return (
    
      <View style={styles.container}>

        <Input
          placeholder="Enter your email"
          type={email.type}
          value={email.value}
          onChangeText={value => 
            this.updateInput(email.id, value)
          }
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          overrideStyle={styles.input}
          multiline={true}
        />

        <Input
          placeholder="Enter your password"
          type={password.type}
          value={password.value}
          onChangeText={value => 
              this.updateInput(password.id, value)
          }
          overrideStyle={styles.input}
          secureTextEntry= {true}
          multiline={true}
        />

        <Input
            placeholder="confirm password"
            type={confirmPassword.type}
            value={confirmPassword.value}
            onChangeText={value => 
              this.updateInput(confirmPassword.id, value)
            }
            overrideStyle={styles.input}
            secureTextEntry= {true}
            multiline={true}
        />

        {showError(this.state.hasErrors)}


        <TouchableOpacity
            style={styles.button}
            onPress={() => 
                this.submit()
        }>
            <Text style={styles.textButton}>
                Register
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 5
  },

  input: {
    borderBottomColor: "orange",
    marginBottom: 15
  },

  button:{
      backgroundColor: "orange",
      alignItems: 'center',
      padding: 10,
      marginBottom: 15,
      width: 400
  },

  textButton:{
     color:"#EEE", 
     fontSize:20
  }
  
});

export default RegisterForm;
