SimpleJekyllSearch.init({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{title}">{title}<\/a><\/li>',
  noResultsText: 'No results found',
  limit: 10,
  fuzzy: false
});
