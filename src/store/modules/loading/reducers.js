import initialState from './initialState';

function loading(state = initialState, action) {
  switch (action.type) {
    case '@loading/SET_LOADING':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default loading;
