import style from 'styled-components';

const StyledFoodsIngredients = style.div`

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    gap:20px;
    align-items: center;
    margin-top: 20px;
  }

  .cardIngredient {
    display: flex;
    height: 132px;
    width: 320px;
    align-items: flex-end;
    // border: 1px solid red;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    position: relative;
  }

  button {
    border: none;
    background: white;
    padding: 0;
    margin-left:200px;
  }

  img {
    width 130px;
  }

  p {
    position: absolute;
    font-size: 25px;
    left:10px;
  }

  .red-line{
    position: relative;
    top: 100px;
    left:98px;
    width: 5px;
    height: 200px;
    background: #B90000;
    transform: matrix(0, 1, 1, 0, 0, 0);
  }

`;

export default StyledFoodsIngredients;
