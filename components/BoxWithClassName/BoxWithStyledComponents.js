import styled from "styled-components";

export default function BoxWithStyle({ isBlack }) {
  return <BoxWithStyle> {isBlack} </BoxWithStyle>;
}

const BoxWithStyle = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  ${(probs) => {
    if (probs.isBlack === "isBlack") {
      return css`
        background-color: black;
      `;
    }
  }}
`;
