import React, { ChangeEvent} from "react";
import { atomFamily, selectorFamily, useSetRecoilState } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import API from "../api/api";
import {category} from '../recoil/atoms'

const requestId = atomFamily({
    key: 'requestId',
    default: 0
})

const quoteQuery = selectorFamily({
    key:'quoteSelector',
    get: (categoryValue:string) => async ({get}) => {
        try {
            console.log(get(requestId(categoryValue)));
            const response = await API.get(`random?tags=${categoryValue}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
})

const useChangeRequestId = (category:string) => {
    const setRequestId = useSetRecoilState(requestId(category));
    return () => {
        setRequestId(requestId => requestId + 1);
    }
}

const QuoteBoxSelector: React.FC = () => {
    const [categorytTag, setCategoryTag] = useRecoilState(category);
    const data = useRecoilValue(quoteQuery(categorytTag));
    const changeRequestId = useChangeRequestId(categorytTag);


    const updateChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setCategoryTag(e.target.value);
    }

  return (  
    <div id="quote-box-1">
    <select value={categorytTag} onChange={(e) =>updateChange(e)}>
        <option value="technology">Tecnology</option>
        <option value="famous-quotes">Famous Quotes</option>
        <option value="history">History</option>
    </select>

      <p>"{data.content}"</p>
      <p>-{data.author}</p>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${data.author}" ${data.content}`}
        target="_top"
      >
        Tweeter
      </a>
      <button onClick={() => changeRequestId()}>New Quote</button>
    </div>
  );
};

export default QuoteBoxSelector;
