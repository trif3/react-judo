import React, { Component } from 'react';
import { TeacherDetails, TeacherList } from '../dojo-components';
import Split from '../split';

export default class TeachersPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Split
        left={<TeacherList onItemSelected={this.onItemSelected} />}
        right={<TeacherDetails itemId={selectedItem} />} />
    );
  }
}
