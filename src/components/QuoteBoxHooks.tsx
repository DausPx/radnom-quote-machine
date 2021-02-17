import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewQuote } from "../actions/quote";
import { appState } from "../types/state.types";

const QuoteBoxHooks: React.FC = () => {
  const text = useSelector((state: appState) => state.quoteModule.text);
  const author = useSelector((state: appState) => state.quoteModule.author);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewQuote());
  }, [dispatch]);

  return (
    <div id="quote-box-1">
      <p>"{text}"</p>
      <p>-{author}</p>
      <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}" ${author}`} target="_top">
        Tweeter
      </a>
      <button onClick={() => dispatch(getNewQuote())}>New Quote</button>
    </div>
  );
};

export default QuoteBoxHooks;
