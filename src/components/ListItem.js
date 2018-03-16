import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from  './common';

class ListItem extends Component {
    render(props){
        console.log(this.props)
        return(
            <CardSection>
                <Text>Hello</Text>
            </CardSection>
        )
    }
}

export default ListItem;