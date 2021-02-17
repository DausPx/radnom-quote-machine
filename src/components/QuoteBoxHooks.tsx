import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../actions/constants";
import { appState } from "../types/state.types";

const QuoteBoxHooks:React.FC = () => {
const text = useSelector((state:appState)=> state.quoteModule.text);
const author = useSelector((state:appState)=> state.quoteModule.author);

const dispatch = useDispatch();

useEffect(() => {
  dispatch({ type: actions.GET_QUOTE })

}, [dispatch])

return (
    <div id="quote-box-1">
      <p >"{text}"</p>
      <p >-{author}</p>
      <a href="twitter.com/intent/tweet" target="_blank">
        Tweeter
      </a>
      <button onClick={()=> dispatch({ type: actions.GET_QUOTE })}>New Quote</button>
    </div>
  );
};

export default QuoteBoxHooks;
