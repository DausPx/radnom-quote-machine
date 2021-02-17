import { combineReducers } from 'redux';
import { quote } from './quote';
import { quoteOld } from './quoteOld'


const reducers = combineReducers({
  quoteModule: quote,
  quoteOldModule: quoteOld
});

export default reducers;