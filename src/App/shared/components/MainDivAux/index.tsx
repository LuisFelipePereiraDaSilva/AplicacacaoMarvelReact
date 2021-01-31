import styled from "styled-components";

interface MainDivAux {
  flexDirection: string;
}
export default styled.div`
  display: flex;
  flex-direction: ${(props: MainDivAux) => props.flexDirection};
`;
