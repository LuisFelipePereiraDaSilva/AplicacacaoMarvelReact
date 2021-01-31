import styled from "styled-components";

interface Title {
  fontSize?: number;
}
export default styled.p`
  font-size: ${(props: Title) => (props.fontSize ? props.fontSize : 25)}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;
