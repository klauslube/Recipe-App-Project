import style from 'styled-components';

const StyledRecipeDetails = style.div`

.title-container {
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-top: 20px;
}

.title {
  font-size: 33px;
}

.category {
width: 62px;
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: flex-end;
color: #A9A9A9;
margin-top:3px;
}

.title-ingredient {
  font-size: 28px;
  margin: 5px 20px;
}

.ingredients-container p {
  margin-left: 20px;
  font-size: 21px;
}

.ingredients-container label {
  margin-left: 20px;
  font-size: 21px;
}

.instructions-container p {
  font-size: 28px;
}

.instructions-container {
  font-size: 21px;
  margin: 5px 20px;
}

.video-container {
  font-size: 28px;
  margin: 20px;
}

.recommended-container { 
  font-size: 28px;
  margin: 20px;
}

.scrollmenu {
  display : flex;
  overflow: auto;
  white-space: nowrap;
  width: 360px;
}

.scrollmenu div {
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  width: 60%;
}

.scrollmenu div:hover {
  background-color: #777;
}

.heading-recomendation {
  color: black;
}

.video-responsive {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
}

.video-responsive iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 360px;
}

.finish-btn {
  width: 330px;
  height: 76px;
  color: black;
  background: grey;
  border-radius: 20px;
  font-size: 29px;
  line-height: 31px;
  text-align: center;
  margin: 5px 30px;
}

.finish-btn:hover {
  background: #252525;
  color: #FFFFFF;

}
`;

export default StyledRecipeDetails;
