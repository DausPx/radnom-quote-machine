import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actions } from "../actions/constants";
import { appState } from "../types/state.types";

const mapStateToProps = (state: appState) => ({
  text: state.quoteOldModule.text,
  author: state.quoteOldModule.author,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getNewQoute: () => dispatch({ type: actions.GET_QUOTE_OLD }),
  };
};

const QuoteBox: React.FC = (props: any) => {
  const { text, author, getNewQoute } = props;

   useEffect(() => {
       getNewQoute()
   }, [getNewQoute])
   
  return (
    <div id="quote-box">
      <p id="text">"{text}"</p>
      <p id="author">-{author}</p>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        Tweeter
      </a>
      <button id="new-quote" onClick={() => getNewQoute()}>
        New Quote
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
