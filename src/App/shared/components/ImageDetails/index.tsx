import styled from "styled-components";

interface ImageDiv {
  height: string;
  width: string;
  marginTop?: number;
  marginLeft?: number;
}
export const ImageDiv = styled.div`
  height: ${(props: ImageDiv) => props.height};
  width: ${(props: ImageDiv) => props.width};
  margin-top: ${(props: ImageDiv) => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${(props: ImageDiv) =>
    props.marginLeft ? props.marginLeft : 0}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Image {
  isMobile: boolean;
}
export const Image = styled.img`
  height: ${(props: Image) => (props.isMobile ? "100%" : "80%")};
  width: ${(props: Image) => (props.isMobile ? "100%" : "80%")};
  object-fit: cover;
`;
