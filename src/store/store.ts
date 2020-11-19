import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';

const reducers = combineReducers({
	auth: authReducer,
});

export const store = createStore(
	reducers,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
