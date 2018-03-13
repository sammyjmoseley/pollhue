// @flow

import { createStore, combineReducers } from 'redux';

import {getSettings} from '../utils/api/ReceiveApi';
import {createServerUpdateSettings} from './actions/SettingsActionCreator';
import {createEnableSettings} from './actions/ConfigActionCreator';
import TargetSightingsReducer from 'js/stores/reducers/TargetSightingsReducer';

const GlobalReducer = combineReducers({
  targetSightings: TargetSightingsReducer
});

let GlobalStore = createStore(
    GlobalReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Global store!");

export default GlobalStore;

export function getTargetSightings() {
  return GlobalStore.getState().targetSightings;
}

export function getJobs() {
  return GlobalStore.getState().jobs;
}

getSettings().then(
    (json) => {
      console.log('enabling settings');
      GlobalStore.dispatch(createEnableSettings());
      GlobalStore.dispatch(createServerUpdateSettings(json));
    },
    () => console.error('there was error getting settings')
);
