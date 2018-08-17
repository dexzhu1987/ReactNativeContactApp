import React from 'react';
import AddContactFrom from './AddContactForm';

export default class AddContactScreen extends React.Component {
 static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Add",
    };
  };


  handleSubmit = formState => {
    this.props.screenProps.addContact(formState);
    this.props.navigation.navigate('ContactList');
  };


  render() {
    return <AddContactFrom onSubmit={this.handleSubmit} />;
  }
}