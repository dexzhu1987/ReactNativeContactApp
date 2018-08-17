import React from "react";
import { SectionList, Text } from "react-native";
import Row from "./Row";

var item = [];

export default class SectionListContacts extends React.Component {
  press = item => {
    this.props.press(item);
  };

  renderItem = ({ item }) => <Row {...item} press={this.press} />;
  renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;
  contactsByLetter = this.props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact]
    };
  }, {});
  // sections => [{data: [...] , title: "A"}, {data: ,title: "B"}, ... ]
  sections = Object.keys(this.contactsByLetter)
    .sort()
    .map(letter => ({
      data: this.contactsByLetter[letter],
      title: letter
    }));

  render() {
    return (
      <SectionList
        sections={this.sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}
