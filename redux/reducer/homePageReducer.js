import { HOME_PAGE_TITLE } from '../actions/homePageAction';

export const initialState = {
  title: 'Hello Next.js'
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_TITLE:
      return {
        ...state,
        title: action.payload.newTitle
      };
    default:
      return state;
  }
};

export default homePageReducer;
