import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  color: black;
  text-align: left;
  font-weight: bold;
  margin-left: 40px;
  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 40px;
`;

export const SaveButtonStyled = styled.button`
  font-size: 1em;
  float: right;
  ${"" /* margin-right: 5px; */}
  display: inline-block;

  ${"" /* margin: 1.25em; */}
  border: 1px solid;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-top: 0.4em;
  margin-left: 30px;
  border-radius: 30px;
  background-color: #3058ff;
  color: white;

  &:hover {
    background-color: white;
    color: #3058ff;
  }
`;

export const DeleteButtonStyled = styled.button`
  font-size: 1em;
  float: right;
  ${"" /* margin-right: 5px; */}
  display: inline-block;

  ${"" /* margin: 1.25em; */}
  border: 1px solid;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-top: 0.4em;
  margin-left: 30px;
  border-radius: 30px;
  background-color: #ee3585;
  color: white;

  &:hover {
    background-color: white;
    color: #ee3585;
  }
`;

export const AddButtonStyled = styled.button`
  font-size: 0.75em;
  display: flex;
  ${
    "" /* margin-left: 20px;
  text-align: middle; */
  }

  ${"" /* margin-right: 5px; */}
  ${"" /* display: inline-block; */}

  ${"" /* margin: 1.25em; */}
  border: none;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
  ${
    "" /* padding-right: 0.1em;
  padding-left: 0.1em; */
  }
  ${"" /* margin-top: 0.4em; */}
  ${"" /* margin-left: 30px; */}
  border-radius: 30px;

  width: 80%;
  background-color: white;
  color: #c2c2c2;
  &:hover {
    color: #474747;
  }
`;
