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
  textRight: {
    minWidth: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textLeft: {
    minWidth: 10,
    marginTop: 20,
    paddingLeft: 20,
    paddingVertical: 5
  }
});

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Login"
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      detail: this.props.screenProps.getDetails
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.textLeft}>Name</Text>
          </View>
          <View>
            <Text style={styles.textRight}>{this.state.detail.name} </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
