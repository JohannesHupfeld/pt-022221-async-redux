import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk)); // middleware allows me to pass dispatch a function otherwise i could only pass objects 