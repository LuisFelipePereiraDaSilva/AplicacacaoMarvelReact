import styled from "styled-components";

interface MainDiv {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  minHeight?: number;
}
export default styled.div`
  flex: 1;
  min-height: ${(props: MainDiv) => (props.minHeight ? props.minHeight : 0)}px;
  display: flex;
  margin-left: ${(props: MainDiv) =>
    props.marginLeft && props.marginLeft !== 0 ? props.marginLeft : 0}px;
  margin-right: ${(props: MainDiv) =>
    props.marginRight && props.marginRight !== 0 ? props.marginRight : 0}px;
  margin-top: ${(props: MainDiv) =>
    props.marginTop && props.marginTop !== 0 ? props.marginTop : 0}px;
  margin-bottom: ${(props: MainDiv) =>
    props.marginBottom && props.marginBottom !== 0 ? props.marginBottom : 0}px;
  flex-direction: column;
`;
