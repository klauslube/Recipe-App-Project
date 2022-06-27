import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtn(props) {
  const { url, recipeId, dataTestId } = props;

  const handleShareBtn = ({ target }) => {
    // const urlBase = ((window.location.href).split('/in-progress'))[0];
    // const urlBase = ((window.location.href).split('/done-recipes'))[0];
    const urlBase = 'http://localhost:3000';
    navigator.clipboard.writeText(`${urlBase}${url}/${recipeId}`);
    target.parentElement.textContent = 'Link copied!';
    console.log(target);
  };

  return (
    <label htmlFor={ recipeId }>
      <input
        type="image"
        src={ shareIcon }
        data-testid={ dataTestId }
        onClick={ (e) => handleShareBtn(e) }
        id={ recipeId }
        alt="share"
      />
      Share
    </label>
  );
}
ShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
