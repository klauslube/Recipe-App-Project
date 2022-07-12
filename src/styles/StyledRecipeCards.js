import styled from 'styled-components';

const StyledRecipeCards = styled.div`

.all-recipes {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;
  border-style: none;
}

.recipe-card {
  width: 150px;
}

.img-cards {
  width: 100%;
}

.recipe-button, .img-cards {
  border-style: none;
  padding: 0;
  background: #FFFFFF;
}

.recipe-name {
  text-align: left;
  padding-left: 7px;
  font-family: 'Ropa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #000000;
  margin: 0;
}


.red-line{
  position: absolute;
  width: 7px;
  height: 100px;
  /* z-index: 3; */
  margin-top: 75px;
  background: #B90000;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

`;

export default StyledRecipeCards;
