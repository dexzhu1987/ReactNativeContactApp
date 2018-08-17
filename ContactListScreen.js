import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Constants } from "expo";
import SectionListContacts from "./SectionListContacts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight
  }
});

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerRight: (
        <Button onPress={navigation.getParam("increaseCount")} title="Add" />
      )
    };
  };

  state = {};

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this.goToAddContact });
  }

  showForm = () => {
    this.setState({ showForm: true });
  };

  goToAddContact = () => {
    this.props.navigation.navigate("AddContact");
  };

  gotoDetails = item => {
    this.props.navigation.navigate("Details");
    this.props.screenProps.showDetails(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionListContacts
          contacts={this.props.screenProps.contacts}
          press={this.gotoDetails}
        />
      </View>
    );
  }
}
