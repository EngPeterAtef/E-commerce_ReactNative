import { createStore } from "redux";
import {countReducer,cartReducer} from './reducers';

// export const store = createStore(countReducer);
export const store = createStore(cartReducer);
