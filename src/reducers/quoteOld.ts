import { actions } from '../actions/constants';
import { Quote }from '../types'

const initialState: Quote = {
    text: '',
    author: ''
  }

  export const quoteOld = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.GET_QUOTE_OLD:
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