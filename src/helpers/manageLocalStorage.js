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
