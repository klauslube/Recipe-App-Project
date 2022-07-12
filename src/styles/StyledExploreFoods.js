import style from 'styled-components';

const StyledExploreFoods = style.div`

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-beetween;
    gap:20px;
    margin-top: 40px;
  }

  div.cards {
    width: 304px;
    height: 114px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 120px;
  }

  p {
    font-size: 24px;
    text-align: left;
    margin-left:10px;
  }

  button {
    background: white;
    border: none;
    padding: 0;
  }

  .surpriseIcon {
    margin-left: 25px;
  }

`;

export default StyledExploreFoods;
