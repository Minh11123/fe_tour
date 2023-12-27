import styled from "styled-components";

const HomePageStyle = styled.div`
  width: 100%;  margin-top: 60px;
  justify-content: center;
  flex-director: column;
  .location {
    display: flex;
    p {
      font-size: 24px;
      margin-left: 1em;
      font-weight: 600;
    }
    .locationSpecific {
      display: flex;
      width: 95%;
      justify-content: center;
      .address {
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
`;

const Img = styled.img`
  text-align: center;
  align-items: center;
  height: 20vh;
  width: auto;
  margin-left: 2em;
`;

export { HomePageStyle, Image, Img };
