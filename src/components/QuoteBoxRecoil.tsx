import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import API from "../api/api";
import { quote } from "../recoil/atoms";

const QuoteBoxRecoil: React.FC = () => {
  const [quoteT, setQuote] = useRecoilState(quote);

  const getNewQuote = useCallback(() => {
    API.get("random")
      .then((res) => {
        setQuote({
          text: res.data.content,
          author: res.data.author,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[setQuote])

  useEffect(() => {
    getNewQuote();
  }, [getNewQuote]);

  return (
    <div id="quote-box-1">
      <p>"{quoteT.text}"</p>
      <p>-{quoteT.author}</p>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteT.text}" ${quoteT.author}`}
        target="_top"
      >
        Tweeter
      </a>
      <button onClick={() => getNewQuote()}>New Quote</button>
    </div>
  );
};

export default QuoteBoxRecoil;
