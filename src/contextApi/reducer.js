export const initialState = {
  term: null,
};

export const actionTypes = {
  Set_Search_Term: "Set_Search_Term",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.Set_Search_Term:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
