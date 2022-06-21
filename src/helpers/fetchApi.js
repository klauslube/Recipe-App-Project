const mealBaseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const drinksBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

async function fetchApi(currentUrl, filterType, filter) {
  let baseUrl = '';
  if (currentUrl === '/foods') baseUrl = mealBaseUrl;
  else if (currentUrl === '/drinks') baseUrl = drinksBaseUrl;

  if (filterType === 0) baseUrl += `filter.php?i=${filter}`;
  else if (filterType === 1) baseUrl += `search.php?s=${filter}`;
  else baseUrl += `search.php?f=${filter}`;

  const responseApi = await fetch(baseUrl);
  const response = await responseApi.json();
  return response;
}
export default fetchApi;
