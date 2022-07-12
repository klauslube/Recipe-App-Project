import style from 'styled-components';

const StyledDoneRecipes = style.div`

.wrapper {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
}

button {
  margin: 20px 6px;
  width: 102px;
  height: 45px;
  background: rgba(37, 37, 37, 0.4);
  border-radius: 10px;
  font-size: 25px;
  line-height: 27px;  
  color: #FFFFFF;
}

`;

export default StyledDoneRecipes;
