import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  row: {
    padding: 20
  }
});

export default class Row extends React.Component {
  press = () => {
    this.props.press(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.press}>
        <View style={styles.row}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
