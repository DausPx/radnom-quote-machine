import { Dispatch } from 'redux';
import API from '../api/api';
import { actions } from './constants';


export const getNewQuote = () =>{
    return (dispatch: Dispatch)=>{
        return API.get('random').then(res => {
            dispatch({type: actions.GET_QUOTE, data: res.data})
        }).catch(err => {
            console.log(err);
        });
    }
}

export const getNewQuoteOld = () =>{
    return (dispatch: Dispatch)=>{
        return API.get('random').then(res => {
            dispatch({type: actions.GET_QUOTE_OLD, data: res.data})
        }).catch(err => {
            console.log(err);
        });
    }
}