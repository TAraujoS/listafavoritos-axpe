import { combineReducers } from 'redux';

import loading from './loading/reducers';
import main from './main/reducers';

const rootReducers = combineReducers({ loading, main });

export default rootReducers;
