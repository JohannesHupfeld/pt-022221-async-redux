import React from 'react'
import { connect } from 'react-redux' //function that expects another function that expects our component as an argument
import { setPeople } from './../../redux/peopleActions'
import PeopleCard from './PeopleCard'
import PersonForm from './PersonForm'
import { Switch, Route } from 'react-router-dom'
import EditPersonForm from './EditPersonForm'

class PeopleContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchSetPeople()
  }

  render(){
    return (
      <div>
        <h2>All People</h2>
        <Switch>
          <Route exact path="/people/:id/edit"component={routerProps => <EditPersonForm routerProps={routerProps} />} />
          <Route exact path="/people/new"component={routerProps => <PersonForm />} />
        </Switch>
        <div>
          {this.props.people.map(person => <PeopleCard key={person.id} {...person} />)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(stateFromStore){ // argument doesnt know what container we are in, its just pulling all state from store
  return {
    people: stateFromStore.people // so here we choose to map only people state to props 
  }
}

function mapDispatchToProps(dispatch){ // callback function that gets to this dispatch function -- dispatch gets mapped to people
  return {
    dispatchSetPeople: () => dispatch(setPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
//