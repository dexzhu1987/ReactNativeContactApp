import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, createStackNavigator} from 'react-navigation';
import { compareNames } from './contacts';
import ContactListScreen from './ContactListScreen';
import AddContactScreen from './AddContactScreen';
import {fetchUsers} from './API';
import LoginScreen from './LoginScreen'
import DetailsScreen from './DetailsScreen'

const AppNavigator = StackNavigator(
  {
    ContactList: {
      screen: ContactListScreen,
    },
    AddContact: {
      screen: AddContactScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  state = {
    contacts:[],
    details:[]
  };

  componentDidMount(){
      this.getUsers();
  }

  getUsers = async() =>{
      const contact = await fetchUsers();
      this.setState({contacts: contact});     
  } 
  
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  showDetails = item => {
    this.setState({
      details: item
    });
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
          getDetails: this.state.details,
          showDetails: this.showDetails
        }}
      />
    );
  }
}