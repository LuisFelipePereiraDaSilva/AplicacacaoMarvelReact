import React, { useState, useEffect } from "react";
import { getCharacter } from "../../services/requests/character/characterMarvel";
import styled from "styled-components";
import { Character } from "../../types/character";
import MainDiv from "../../shared/components/MainDiv";
import { useDispatch } from "react-redux";
import * as types from "../../redux/types";
import { getWindowDimensions, isMobile } from "../../shared/functions";
import MainDivAux from "../../shared/components/MainDivAux";
import { Image, ImageDiv } from "../../shared/components/ImageDetails";
import BodyDetails from "../../shared/components/BodyDetails";
import DataLine from "../../shared/components/DataLine";
import ListAux from "../../shared/components/ListAux";

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
                    : getWindowDimensions().height - 60 + "px"
                }
                marginTop={isMobile() ? 20 : 40}
                marginHorizontal={20}
                shadow={isMobile() ? false : true}
              >
                <DataLine title={"Id"} text={character.id} />
                <DataLine title={"Nome"} text={character.name} />
                <DataLine title={"Descrição"} text={character.description} />
                <ListAux title={"Quadrinhos"} list={character.comics} />
                <ListAux title={"Séries"} list={character.series} />
                <ListAux title={"Histórias"} list={character.stories} />
                <ListAux title={"Eventos"} list={character.events} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsCharacter;
