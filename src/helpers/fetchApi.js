const mealBaseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const drinksBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const INGREDIENTS = 0;
const NAME = 1;
const FIRST_LETTER = 2;
const CATEGORIES_LIST = 3;
const CATEGORIES_FILTER = 4;
const DETAILS = 5;
const NATIONS = 6;
const NATIONS_FILTER = 7;
const RANDOM = 8;
async function fetchApi(currentUrl, type, filter) {
  let baseUrl = '';
  if (currentUrl === '/foods') baseUrl = mealBaseUrl;
  else if (currentUrl === '/drinks') baseUrl = drinksBaseUrl;

  if (type === INGREDIENTS) baseUrl += `filter.php?i=${filter}`;
  else if (type === NAME) baseUrl += `search.php?s=${filter}`;
  else if (type === FIRST_LETTER) baseUrl += `search.php?f=${filter}`;
  else if (type === CATEGORIES_LIST) baseUrl += `list.php?c=${filter}`;
  else if (type === CATEGORIES_FILTER) baseUrl += `filter.php?c=${filter}`;
  else if (type === DETAILS) baseUrl += `lookup.php?i=${filter}`;
  else if (type === NATIONS) baseUrl += `list.php?a=${filter}`;
  else if (type === NATIONS_FILTER) baseUrl += `filter.php?a=${filter}`;
  else if (type === RANDOM) baseUrl += `random.php${filter}`;
  const responseApi = await fetch(baseUrl);
  const response = await responseApi.json();
  return response;
}
export default fetchApi;
