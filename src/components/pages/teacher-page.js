import React, { Component } from 'react';
import { TeacherDetails, TeacherList } from '../dojo-components';
import SplitContainer from '../split-container';

export default class TeachersPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const { selectedItem } = this.state;

        return(
            <SplitContainer 
                left={<TeacherList onItemSelected={this.onItemSelected}/>}
                right={<TeacherDetails itemId={selectedItem}/>}
            />
        );
    }
}