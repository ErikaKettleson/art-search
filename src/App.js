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
  RangeInput
} from 'react-instantsearch-dom';


const searchClient = algoliasearch(
  'W71VYP4FK8',
  '752be675b21917796189ff4560b7afbe'
);

function App() {
  return (
    <div className="App">
      <header className="art-header">
        <p>
          Search through the collections of the Harvard Art Museums.
        </p>
      </header>
      <div className="facet-results">
        <InstantSearch 
          searchClient={searchClient} 
          indexName="Art"
          className="search-box"
        >
          <Facets/>
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
        </InstantSearch>
      </div>
    </div>
  );
}


const Hit = hit => {
  const { Artist, Date, Title, ArtistBio, Medium, ThumbnailURL,  } = hit.hit;

  return (
    <div className="hit-media">
      <div className="hit-body">
        <img src={ThumbnailURL} />
        <div className="object-info">
          <p className="title">{Title}</p>
          <p className="date">{Date}</p>
          <p className="artist">{Artist} {ArtistBio}</p>
          <p className="medium"> {Medium}</p>
        </div>
      </div>
  </div>
  )
}


const Facets = () => {
  return (
  <div className="search-panel">
    <p>Artist</p>
    <RefinementList className="search-panel__filters" attribute="Artist" />
    <p>Date</p>
    <RefinementList className="search-panel__filters" attribute="Date" />
    <p>Nationality</p>
    <RefinementList className="search-panel__filters" attribute="Nationality" />
    <RangeInput attribute="Date" />
  </div>
  )
}




export default App;
