import { combineReducers } from 'redux';

import setCounterReducer from './counterReducer';

const reducers = combineReducers({
  counterState: setCounterReducer

})

export default reducers;