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
  Configure,
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
      <div className="container">
        <InstantSearch 
          searchClient={searchClient} 
          indexName="Art"
        >
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                autoFocus="true"
                translations={{
                  placeholder: '',
                }}
              />
              <div id="hits">
                <Hits hitComponent={Hit} />
              </div>
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}


const Hit = hit => {
  const { Artist, Date, Title, ArtistBio, Nationality, Medium, ThumbnailURL } = hit.hit;

  return (
    <div className="hit-media">
      <div className="hit-body">
        <img src={ThumbnailURL} />
        <p className="title">{Title}</p>
        <p className="artist">{Artist}</p>
        <p className="date">{Date}</p>
        <p className="artist-bio">{ArtistBio}</p>
      </div>
  </div>
  )
}





export default App;
