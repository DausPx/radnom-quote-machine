import { actions } from '../actions/constants';
import {Quote}from '../types'

const initialState: Quote = {
    text: '',
    author: ''
  }

  const getNewQuote= () =>{
    let quote: Quote = {
      text: 'this is new quote',
      author: 'suad'
    }
    return quote;
  }

  export const quote = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.GET_QUOTE:
        const newQuote = getNewQuote();
        return{
          ...state,
          text: newQuote.text,
          author: newQuote.author
        }
      default:
        return {
          ...state
        }
    }
  };