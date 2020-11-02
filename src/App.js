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
  ClearRefinements,
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
          Search through the collections of the Museum of Modern Art.
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
              autoFocus={true}
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
  const { Artist, Date, Title, ArtistBio, Medium, ThumbnailURL, URL } = hit.hit;

  return (
    <div className="hit-media">
      <div className="hit-body">
        <a href={URL} target="_blank">
          <img src={ThumbnailURL} />
        </a>
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
    <ClearRefinements />
    <p>Artist</p>
    <RefinementList 
      className="search-panel__filters" 
      attribute="Artist" 
      showMore={true}
    />
    <p>Nationality</p>
    <RefinementList 
      className="search-panel__filters" 
      attribute="Nationality" 
      showMore={true}
    />
    <p>Medium</p>
    <RefinementList 
      className="search-panel__filters" 
      attribute="Medium" 
      showMore={true}
    />
  </div>
  )
}


export default App;
