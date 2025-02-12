import {
  AppAction,
  SET_IS_OPEN_BACK,
  SET_IS_OPEN_CREATE_MODAL,
} from "./actions";

interface IAppState {
  isOpenBack: boolean;
  isOpenCreateModal: boolean;
}

const initialState: IAppState = {
  isOpenBack: false,
  isOpenCreateModal: false,
};

const appReducer = (state = initialState, action: AppAction): IAppState => {
  switch (action.type) {
    case SET_IS_OPEN_BACK:
      return { ...state, isOpenBack: action.payload };
    case SET_IS_OPEN_CREATE_MODAL:
      return { ...state, isOpenCreateModal: action.payload };
    default:
      return state;
  }
};

export default appReducer;
