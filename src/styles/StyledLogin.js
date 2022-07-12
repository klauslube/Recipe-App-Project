import styled from 'styled-components';

const StyledLogin = styled.div`
  form {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    width: 100vw;
    height: 100vh;
    margin-top: 15px;
  }  

  .images {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }

  .loginLogo {
    width: 203px;
    height: 49px;
    left: 75px;
    top: 150px;
  }

  .tastedLogo {
    width: 178px;
    height: 20px;
    left: 90px;
    top: 210px;
  }
  
  p {
    margin-top: 50px;
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
   
  }

  input {
    width: 293px;
    height: 46px;
    background: #FFFFFF;
    box-shadow: inset 0px 4px 18px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin-top: 15px;
  }
  
  button {
    margin-top: 15px;
    width: 207px;
    height: 50px;
    background: #272727;
    border-radius: 27px;
    color: #FFFFFF;
    font-size: 22px;
    cursor: pointer;
    transition-duration: 0.4s;
  }
`;

export default StyledLogin;
