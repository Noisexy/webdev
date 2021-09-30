export const reducer = (state, action) => {
  if (action.type === "sendStatus") {
    return { ...state, isModalOpen: true, isModalStatus: true };
  }
  if (action.type === "exitStatus") {
    return { ...state, isModalOpen: false, isModalStatus: false };
  }
};
