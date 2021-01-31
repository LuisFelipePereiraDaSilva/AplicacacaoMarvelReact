import React, { useState, useEffect } from "react";
import { getCharacter } from "../../services/requests/character/characterMarvel";
import styled from "styled-components";
import { Character } from "../../types/character";
import MainDiv from "../../shared/components/MainDiv";
import { useDispatch } from "react-redux";
import * as types from "../../redux/types";
import { getWindowDimensions, isMobile } from "../../shared/functions";

interface MainDivAux {
  flexDirection: string;
}
const MainDivAux = styled.div`
  display: flex;
  flex-direction: ${(props: MainDivAux) => props.flexDirection};
`;

interface ImageDiv {
  height: string;
  width: string;
  marginTop?: number;
  marginLeft?: number;
}
const ImageDiv = styled.div`
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
const Image = styled.img`
  height: ${(props: Image) => (props.isMobile ? "100%" : "80%")};
  width: ${(props: Image) => (props.isMobile ? "100%" : "80%")};
  object-fit: cover;
`;

interface BodyDetails {
  width?: string;
  height?: string;
  marginHorizontal?: number;
  marginTop?: number;
}
const BodyDetails = styled.div`
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
`;

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsCharacter = (props: Props) => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getCharacter(props.match?.params?.id)
        .then((character) => {
          if (character) {
            setCharacter(character);
          } else {
            errorLoadData();
          }
        })
        .catch(() => {
          errorLoadData();
        })
        .finally(() => {
          dispatch({ type: types.SET_LOADING, payload: false });
        });
    } else {
      errorLoadData();
    }
  }, []);

  const errorLoadData = () => {
    alert("Ocorreu um error ao carregar o personagem");
    dispatch({ type: types.SET_LOADING, payload: false });
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {character && (
            <>
              <ImageDiv
                height={
                  isMobile()
                    ? "500px"
                    : getWindowDimensions().height - 40 + "px"
                }
                width={isMobile() ? "100%" : "50%"}
                marginTop={isMobile() ? 0 : 20}
                marginLeft={isMobile() ? 0 : 30}
              >
                <Image isMobile={isMobile()} src={character.image} />
              </ImageDiv>
              <BodyDetails
                width={isMobile() ? undefined : "50%"}
                height={
                  isMobile()
                    ? undefined
                    : getWindowDimensions().height - 40 + "px"
                }
                marginTop={isMobile() ? 0 : 20}
                marginHorizontal={20}
              >
                <p>
                  Ao contrário do que se acredita, Lorem Ipsum não é
                  simplesmente um texto randômico. Com mais de 2000 anos, suas
                  raízes podem ser encontradas em uma obra de literatura latina
                  clássica datada de 45 AC. Richard McClintock, um professor de
                  latim do Hampden-Sydney College na Virginia, pesquisou uma das
                  mais obscuras palavras em latim, consectetur, oriunda de uma
                  passagem de Lorem Ipsum, e, procurando por entre citações da
                  palavra na literatura clássica, descobriu a sua indubitável
                  origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de
                  Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de
                  Cícero, escrito em 45 AC. Este livro é um tratado de teoria da
                  ética muito popular na época da Renascença. A primeira linha
                  de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma
                  linha na seção 1.10.32. O trecho padrão original de Lorem
                  Ipsum, usado desde o século XVI, está reproduzido abaixo para
                  os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus
                  Bonorum et Malorum" de Cicero também foram reproduzidas abaixo
                  em sua forma exata original, acompanhada das versões para o
                  inglês da tradução feita por H. Rackham em 1914. Ao contrário
                  do que se acredita, Lorem Ipsum não é simplesmente um texto
                  randômico. Com mais de 2000 anos, suas raízes podem ser
                  encontradas em uma obra de literatura latina clássica datada
                  de 45 AC. Richard McClintock, um professor de latim do
                  Hampden-Sydney College na Virginia, pesquisou uma das mais
                  obscuras palavras em latim, consectetur, oriunda de uma
                  passagem de Lorem Ipsum, e, procurando por entre citações da
                  palavra na literatura clássica, descobriu a sua indubitável
                  origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de
                  Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de
                  Cícero, escrito em 45 AC. Este livro é um tratado de teoria da
                  ética muito popular na época da Renascença. A primeira linha
                  de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma
                  linha na seção 1.10.32. O trecho padrão original de Lorem
                  Ipsum, usado desde o século XVI, está reproduzido abaixo para
                  os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus
                  Bonorum et Malorum" de Cicero também foram reproduzidas abaixo
                  em sua forma exata original, acompanhada das versões para o
                  inglês da tradução feita por H. Rackham em 1914. Ao contrário
                  do que se acredita, Lorem Ipsum não é simplesmente um texto
                  randômico. Com mais de 2000 anos, suas raízes podem ser
                  encontradas em uma obra de literatura latina clássica datada
                  de 45 AC. Richard McClintock, um professor de latim do
                  Hampden-Sydney College na Virginia, pesquisou uma das mais
                  obscuras palavras em latim, consectetur, oriunda de uma
                  passagem de Lorem Ipsum, e, procurando por entre citações da
                  palavra na literatura clássica, descobriu a sua indubitável
                  origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de
                  Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de
                  Cícero, escrito em 45 AC. Este livro é um tratado de teoria da
                  ética muito popular na época da Renascença. A primeira linha
                  de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma
                  linha na seção 1.10.32. O trecho padrão original de Lorem
                  Ipsum, usado desde o século XVI, está reproduzido abaixo para
                  os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus
                  Bonorum et Malorum" de Cicero também foram reproduzidas abaixo
                  em sua forma exata original, acompanhada das versões para o
                  inglês da tradução feita por H. Rackham em 1914. Ao contrário
                  do que se acredita, Lorem Ipsum não é simplesmente um texto
                  randômico. Com mais de 2000 anos, suas raízes podem ser
                  encontradas em uma obra de literatura latina clássica datada
                  de 45 AC. Richard McClintock, um professor de latim do
                  Hampden-Sydney College na Virginia, pesquisou uma das mais
                  obscuras palavras em latim, consectetur, oriunda de uma
                  passagem de Lorem Ipsum, e, procurando por entre citações da
                  palavra na literatura clássica, descobriu a sua indubitável
                  origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de
                  Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de
                  Cícero, escrito em 45 AC. Este livro é um tratado de teoria da
                  ética muito popular na época da Renascença. A primeira linha
                  de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma
                  linha na seção 1.10.32. O trecho padrão original de Lorem
                  Ipsum, usado desde o século XVI, está reproduzido abaixo para
                  os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus
                  Bonorum et Malorum" de Cicero também foram reproduzidas abaixo
                  em sua forma exata original, acompanhada das versões para o
                  inglês da tradução feita por H. Rackham em 1914.
                </p>
              </BodyDetails>
              {/* <DataLine title={'Id'} text={character.id} />
              <DataLine title={'Nome'} text={character.name} />
              <DataLine title={'Descrição'} text={character.description} />
              <ListAux
                navigation={props.navigation}
                title={'Quadrinhos'}
                list={character.comics}
              />
              <ListAux
                navigation={props.navigation}
                title={'Séries'}
                list={character.series}
              />
              <ListAux
                navigation={props.navigation}
                title={'Histórias'}
                list={character.stories}
              />
              <ListAux
                navigation={props.navigation}
                title={'Eventos'}
                list={character.events}
              /> */}
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsCharacter;
