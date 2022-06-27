export function updateInProgress(url, id, ingredient, progress) {
  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ cocktails: {}, meals: {} }),
    );
  }
  let type = '';
  if (url === '/foods') type = 'meals';
  if (url === '/drinks') type = 'cocktails';

  const inProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressList[type][id]) { // verifica se existe a receita no localStorage
    const oldList = inProgressList[type][id].filter((ing) => ing.item !== ingredient);
    inProgressList[type][id] = [
      ...oldList,
      {
        item: ingredient,
        progress,
      },
    ];
  } else {
    inProgressList[type][id] = [{
      item: ingredient,
      progress,
    }];
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressList));
}

export function getInProgressList(url, id) {
  if (!localStorage.getItem('inProgressRecipes')) return [];

  let type = '';
  if (url === '/foods') type = 'meals';
  if (url === '/drinks') type = 'cocktails';

  const inProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return inProgressList[type][id];
}

export function removeInProgress(url, id) {
  let type = '';
  if (url === '/foods') type = 'meals';
  if (url === '/drinks') type = 'cocktails';

  const inProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const newList = Object.entries(inProgressList[type])
    .filter((item) => item[0] !== id);

  if (newList) { // remove a receita do local storage
    inProgressList[type] = newList.reduce((acc, recipe) => ({
      ...acc,
      [recipe[0]]: recipe[1],
    }), {});
  } else inProgressList[type] = {};

  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressList));
}

export function setFavoriteRecipe(recipe, op) {
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }

  const savedList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const oldList = savedList.filter((item) => item.id !== recipe.id);
  let newList = [];
  if (op === 'Add') {
    if (oldList) newList = [...oldList, recipe];
    else newList = [recipe];
  } else if (op === 'Remove') newList = oldList;
  localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
}

export function getFavoriteRecipe(id) {
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  const savedList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const response = savedList.find((item) => item.id === id);
  if (!response) return undefined;
  return response;
}

export function getAllFavoritesRecipes() {
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  const response = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return response;
}

export function setDoneRecipe(recipe, op) {
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }

  const savedList = JSON.parse(localStorage.getItem('doneRecipes'));
  const oldList = savedList.filter((item) => item.id !== recipe.id);
  let newList = [];
  if (op === 'Add') {
    if (oldList) newList = [...oldList, recipe];
    else newList = [recipe];
  } else if (op === 'Remove') newList = oldList;
  localStorage.setItem('doneRecipes', JSON.stringify(newList));
}

export function getDoneRecipes() {
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
  const response = JSON.parse(localStorage.getItem('doneRecipes'));
  return response;
}
