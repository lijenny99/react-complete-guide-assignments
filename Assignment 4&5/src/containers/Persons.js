import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.prsn.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsn: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: actionTypes.ADD}),
        onPersonDeleted: (id) => dispatch({type: actionTypes.DELETE, resultElId: id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);