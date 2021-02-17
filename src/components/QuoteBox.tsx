import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewQuoteOld } from "../actions/quote";
import { appState } from "../types/state.types";

const mapStateToProps = (state: appState) => ({
  text: state.quoteOldModule.text,
  author: state.quoteOldModule.author,
});

const QuoteBox: React.FC = (props: any) => {
  const { text, author, getNewQuoteOld } = props;

   useEffect(() => {
    getNewQuoteOld()
   }, [getNewQuoteOld])

  return (
    <div id="quote-box">
      <p id="text">"{text}"</p>
      <p id="author">-{author}</p>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}" ${author}`} target="_top">
        Tweeter
      </a>
      <button id="new-quote" onClick={() => getNewQuoteOld()}>
        New Quote
      </button>
    </div>
  );
};

export default connect(mapStateToProps,{getNewQuoteOld})(QuoteBox);
