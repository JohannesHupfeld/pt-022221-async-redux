import React, { Component } from 'react';
import { addPerson } from '../../redux/peopleActions';
import { connect } from 'react-redux'

class PersonForm extends Component {
  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    // dispatch addPerson
    this.props.dispatchAddPerson(this.state)
    // clear out my state
    this.setState({name: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="person-name-input">Name:</label>
        <input 
          id="person-name-input" 
          onChange={this.handleChange} 
          value={this.state.name} 
          type="text" />
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person))
  }
}

export default connect(null, mapDispatchToProps)(PersonForm) // null because we're not using mapStateToProps

// first argument of connect gives me access to state and second give me access to dispatch and both of them give an object that will be merged with my props