import styled from 'styled-components';

const StyledExplore = styled.div`

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap:10px;
    margin-top: 40px;
  }

  p.foods {
   font-size: 22px;
   position: absolute;
   left:45px;
   top: 155px;
   color: black;
   z-index: 999;
  }

  p.drinks {
    font-size: 22px;
    position: absolute;
    left: 220px;
    top: 460px;
    color: black;
    z-index: 999;
   }
  
  .card {
    height: 356px;
    width: 157px;
  }

  #cardFood {
    margin-top: 90px;
  }
 
  button {
    padding: 0;
    border: none;
  }

  .card img {
    width: 100%;
  }
  
  .red-line01 {
    position: absolute;
    width: 9px;
    height: 248px;
    top: -50px;
    background: #B90000;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .red-line02 {
    position: absolute;
    width: 9px;
    height: 248px;
    top: 150px;
    left:146px;
    background: #B90000;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;

export default StyledExplore;
