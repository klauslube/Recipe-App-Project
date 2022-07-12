import styled from 'styled-components';

const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);  

  div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 10px;
      position: relative;
      top: 0;
      left: 0;
      margin: 0 auto;
      width: 100vw;
      height: 58px;
      background: rgba(255, 255, 255, 0.01);
      font-weight: 400;
      font-size: 30px;
      line-height: 32px;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.6rem;
    text-align: center;
  }
  input {
    margin: 10px;
    border: unset;
    background-color: transparent;
    text-align: center;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledSearchBar = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px; 
  text-align:center;
  
  .search-bar button {
      background: rgba(37, 37, 37, 0.4);
      border-radius: 6px;
      width: 90vw;
      margin-bottom: 10px;
    }
    
    .search-recipe {
      box-sizing: border-box;
      background: #FFFFFF;
      border: 1px solid rgba(37, 37, 37, 0.4);
      border-radius: 10px;
      width: 90vw;
      font-size: 23px;
    }
    
    .search-recipe::placeholder {
      padding-left: 10px;
    }
    
    .search-ingredients input {
      margin: 0 6px;
    }
    
    .search-ingredients {
      height: 35px;
      font-size: 23px;
    }

  `;

export default StyledHeader;
