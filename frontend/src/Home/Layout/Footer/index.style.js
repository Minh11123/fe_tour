import styled from "styled-components";

const FooterStyle = styled.div`
  height: 100px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footerLeft {
    flex: 2;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    margin-left: 50px;
    p {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      margin: 0.3em 0 0 0.2em;
    }
  }
  .footerContent {
    flex: 2;
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-right: 30px;
  }
  .footerRight {
    display: flex;
    flex: 6;
    font-weight: 300;
    font-size: 16px;
    margin-right: 50px;
  }
`;

const LogoFooter = styled.img`
  weight: auto;
  height: 40px;
`;

export { FooterStyle, LogoFooter };
