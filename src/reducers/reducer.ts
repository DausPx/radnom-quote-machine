import { actions } from '../actions/constants';

const initialState: any = {
    open: true
  }

  export const reducer = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.ACTION_TYPE:
        return {
          open: !state.open
        }
      default:
        return {
          ...state
        }
    }
  };