import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }

  validateForm = () => {
    const names = this.state.name.split(' ');
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handlePhoneChange = phone => {
    this.setState({ phone });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    console.log('This is a warning.');
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button
          title="Submit"
          disabled={!this.state.isFormValid}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}