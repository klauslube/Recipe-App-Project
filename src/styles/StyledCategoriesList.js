import styled from 'styled-components';

const StyledCategoriesList = styled.div`

.wrapper {
  width: 100vw;
  height: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 5px;
  padding: 8px;

}

.wrapper button {
  width: 100px;
  height: 28px;
  min-width: fit-content;
  background: rgba(37, 37, 37, 0.4);
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Ropa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;  
}  

.wrapper button:hover {
  background: rgb(50, 48, 48);
}

`;

export default StyledCategoriesList;
