import { createStore, combineReducers } from "redux";
import projectReducer from "./reducers/projects/reducer";
import tasksReducer from "./reducers/tasks/reducer";
import appReducer from "./reducers/app/reducer";

const rootReducer = combineReducers({
  projectReducer,
  tasksReducer,
  appReducer,
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
