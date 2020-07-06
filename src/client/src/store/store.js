import { createStore } from "redux";
import demoReducers from "reducers/demoReducers";

function configureStore(state = { rotating: true }) {
    return createStore(rotateReducer, state);
}

export default configureStore;