import logo from './logo.svg';
import './App.css';
import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/algolia.css';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';


const searchClient = algoliasearch(
  'W71VYP4FK8',
  '752be675b21917796189ff4560b7afbe'
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search through the collections of the Harvard Art Museums.
        </p>
      </header>
      <InstantSearch
        indexName="Art"
        searchClient={searchClient}
        >
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
}

export default App;
