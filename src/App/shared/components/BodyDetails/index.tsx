import styled from "styled-components";

interface BodyDetails {
  width?: string;
  height?: string;
  marginHorizontal?: number;
  marginTop?: number;
  shadow?: boolean;
}
export default styled.div`
  width: ${(props: BodyDetails) => (props.width ? props.width : null)};
  height: ${(props: BodyDetails) => (props.height ? props.height : null)};
  overflow: auto;
  scroll-behavior: unset;
  margin-left: ${(props: BodyDetails) =>
    props.marginHorizontal ? props.marginHorizontal : 0}px;
  margin-right: ${(props: BodyDetails) =>
    props.marginHorizontal ? props.marginHorizontal : 0}px;
  margin-top: ${(props: BodyDetails) =>
    props.marginTop ? props.marginTop : 0}px;
  box-shadow: ${(props: BodyDetails) =>
    props.shadow ? "3px 3px 3px #696969" : null};
`;
