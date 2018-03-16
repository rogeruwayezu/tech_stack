import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';


class LibraryList extends Component(){

    componentDidMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library){
       return <View>{library.title}</View>
    }

  render(){
     return(
         <ListView 
            dataSource = {this.dataSource}
            renderRow = {this.renderRow}
            />
     )
  }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);