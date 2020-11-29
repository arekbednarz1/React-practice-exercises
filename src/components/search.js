import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults]= useState([]);

    useEffect(() => {
       const searchInWiki = async () =>{
         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
               params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: term
               }
           });
       };

       searchInWiki();
    }, [term]);


  return (
      <div>
          <div className="ui form">
              <div className="field">
                  <label>WYSZUKAJ</label>
                  <input value={term} onChange={e => setTerm(e.target.value)} className="input"/>
      </div>
          </div>
      </div>
  )
};

export default Search;