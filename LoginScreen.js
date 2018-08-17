import React from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Text,
  View
} from "react-native";
import { Constants } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    minWidth: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3
  }
});

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Login"
    };
  };

  state = {
    name: "",
    pw: "",
    response: "",
    error: true
  };

  callApi = async () => {
    const username = this.state.name;
    const password = this.state.pw;
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    });
    // const response = await fetch("http://localhost:8000/api/hello");
    const body = await response.text();
    console.log(body);
    if (response.ok) {
      this.props.navigation.navigate("ContactList");
    } else {
      this.setState({ response: body, error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
    }
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handlePwChange = pw => {
    this.setState({ pw });
  };

  handleSubmit = () => {
    this.callApi();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="UserName"
          autoCapitalize="none"
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePwChange}
          placeholder="Password"
        />

        {this.state.error && (
          <Text style={{ textAlignVertical: "center", textAlign: "center" }}>
            {this.state.response}
          </Text>
        )}
        <Button title="Login" onPress={this.handleSubmit} />
      </KeyboardAvoidingView>
    );
  }
}
