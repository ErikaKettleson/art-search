
# Friendly Art Search
Search & discovery with the MoMA art archives

## Context
I wanted to make an art search app that didn’t overwhelm the user. My dataset comes from the collections of the Museum of Modern Art, a large and diverse set of 135K works spanning across artists, nationalities, periods and places. Often, art searches can be intimidating, offering a blank search box without suggestion and returning a ton of information of limited relevance. Results can be slow, hard to sort or filter and don’t always cater to a non-academic searcher. 

## Project  
My goal was to build an app that served as a tool for art search and discovery for the casual user. My UX prioritizes the visual, offers simple filters and clean, legible results.  I chose to focus on the most relevant attributes of an artwork: title, artist, nationality, date and medium. If users want more information, all works link to detailed references. 

I used React for the app and the React InstantSearch library to build a series of components to search, filter and display results. I used Custom Ranking to prioritize works with images over those without, and newer works over older. I used the InstantSearch Refinement List widget as a sidebar to filter by artist, nationality and medium because I wanted to offer the user suggestions. 

## Feedback
As for Algolia feedback, the one big issue I ran into in development was searching items inside a RefinementList component. I was attempting to add searching within my artist facet, using the example from the docs (https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/#full-example). I wish there were more examples of this functionality. A bit of general UX feedback was with the report links. I clicked on these expecting they would be tooltips so many times while I was digging through documentation. I never expected to be auto-scrolled to a feedback form. 
