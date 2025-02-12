export const SET_IS_OPEN_BACK = "SET_IS_OPEN_BACK";
export const SET_IS_OPEN_CREATE_MODAL = "SET_IS_OPEN_CREATE_MODAL";

interface SetIsOpenBackAction {
  type: typeof SET_IS_OPEN_BACK;
  payload: boolean;
}

interface SetIsOpenCreateModalAction {
  type: typeof SET_IS_OPEN_CREATE_MODAL;
  payload: boolean;
}

export type AppAction = SetIsOpenBackAction | SetIsOpenCreateModalAction;

export const setIsOpenBack = (isOpenBack: boolean): SetIsOpenBackAction => ({
  type: SET_IS_OPEN_BACK,
  payload: isOpenBack,
});

export const setIsOpenCreateModal = (
  isOpenCreateModal: boolean,
): SetIsOpenCreateModalAction => ({
  type: SET_IS_OPEN_CREATE_MODAL,
  payload: isOpenCreateModal,
});
