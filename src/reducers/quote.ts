import { actions } from '../actions/constants';
import { Quote }from '../types';

const initialState: Quote = {
    text: '',
    author: ''
  }

  export const quote = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.GET_QUOTE:
        return{
          ...state,
          text: action.data.content,
          author: action.data.author
        }
      default:
        return {
          ...state
        }
    }
  };