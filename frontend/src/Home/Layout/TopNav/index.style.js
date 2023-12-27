import styled from "styled-components";

const TopNavStyle = styled.div`
  --hover: #0e71b8;
  display: flex;
  .appBar {
    max-width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    color: #ffffff;
    background-color: #000;
    z-index: 100;
    .toolbar {
      display: flex;
      justify-content: space-between;
      background-color: #000;
      height: 60px;
      text-align: center;
      align-items: center;
      .headLogo {
        display: flex;
        .logo {
          height: 40px;
          weight: auto;
          margin-left: 50px;
        }
        p {
          font-size: 20px;
          font-weight: 700;
          margin: 0.3em 0 0 0.2em;
        }
      }
      .listItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .container {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0px 16px;
          font-size: 20px;
          font-weight: 700;
          height: 100%;
          text-decoration: none;
          div {
            margin: 0.625em 0em;
            display: flex;
            align-items: center;
            p {
              cursor: pointer;
              color: #828388;
            }
          }
          &.active {
            display: flex;
            align-items: center;
            padding: 0px 16px;
            font-size: 20px;
            font-weight: 700;
            height: 100%;
            background-color: #0e71b8;
            text-decoration: none;
            div {
              p {
                color: #fff;
              }
            }
            &:focus {
              box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
              transform: translateY(-0.25em);
            }
            &:hover {
              background-color: #000;
              box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
              transform: translateY(-0.25em);
            }
          }
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
            p {
              color: #ccc;
            }
          }
        }
      }
      .headRight {
        margin-right: 50px;
        display: flex;
        .selectList {
          margin-top: 7px;
          padding: 0px 3px 5px;
          text-decoration: none !important;
          font-size: 20px;
          font-weight: 700;
          border-top: none;
          border-right: none;
          border-left: none;
          color: #fff;
          font-family: "Vbee";
          border-bottom: 3px solid #000;
          background-color: #000;
        }
      }
    }
  }
`;

const Logo = styled.img`
  height: 40px;
  weight: auto;
  margin-left: 50px;
`;

const SelectList = styled.select`
  margin-top: 7px;
  padding: 0px 3px 5px;
  text-decoration: none !important;
  font-size: 20px;
  font-weight: 700;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #fff;
  font-family: "Vbee";
  border-bottom: 3px solid #000;
  background-color: #000;
`;

const MenuItem = styled.option`
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  font-weight: 700;
  list-style: none;
`;

const Avatar = styled.img`
  margin-top: 5px;
  margin-left: 20px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 40px;
  weight: 40px;
`;

export { TopNavStyle, Logo, MenuItem, Avatar, SelectList };
