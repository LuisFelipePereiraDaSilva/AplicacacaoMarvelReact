import React, { useState, useEffect } from "react";
import MainDiv from "../../shared/components/MainDiv";
import { useDispatch } from "react-redux";
import * as types from "../../redux/types";
import { getWindowDimensions, isMobile } from "../../shared/functions";
import MainDivAux from "../../shared/components/MainDivAux";
import { Image, ImageDiv } from "../../shared/components/ImageDetails";
import BodyDetails from "../../shared/components/BodyDetails";
import DataLine from "../../shared/components/DataLine";
import ListAux from "../../shared/components/ListAux";
import { getCreator } from "../../services/requests/creator/creatorMavel";
import { Creator } from "../../types/creator";
import Title from "../../shared/components/Title";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsCreator = (props: Props) => {
  const dispatch = useDispatch();
  const [creator, setCreator] = useState<Creator>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getCreator(props.match?.params?.id)
        .then((creator) => {
          if (creator) {
            setCreator(creator);
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
    alert("Ocorreu um error ao carregar o criador");
    dispatch({ type: types.SET_LOADING, payload: false });
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {creator && (
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
                <Image isMobile={isMobile()} src={creator.image} />
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
                <Title>Detalhes do Criador</Title>
                <DataLine title={"Id"} text={creator.id} />
                <DataLine title={"Nome"} text={creator.name} />
                <ListAux title={"Quadrinhos"} list={creator.comics} />
                <ListAux title={"Séries"} list={creator.series} />
                <ListAux title={"Histórias"} list={creator.stories} />
                <ListAux title={"Eventos"} list={creator.events} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsCreator;
