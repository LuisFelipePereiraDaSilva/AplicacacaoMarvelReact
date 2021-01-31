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
import { getSerie } from "../../services/requests/serie/serieMarvel";
import { Serie } from "../../types/serie";
import Title from "../../shared/components/Title";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsSerie = (props: Props) => {
  const dispatch = useDispatch();
  const [serie, setSerie] = useState<Serie>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getSerie(props.match?.params?.id)
        .then((serie) => {
          if (serie) {
            setSerie(serie);
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
    alert("Ocorreu um error ao carregar a série");
    dispatch({ type: types.SET_LOADING, payload: false });
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {serie && (
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
                <Image isMobile={isMobile()} src={serie.image} />
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
                <Title>Detalhes da Série</Title>
                <DataLine title={"Id"} text={serie.id} />
                <DataLine title={"Nome"} text={serie.name} />
                <DataLine title={"Descrição"} text={serie.description} />
                <DataLine title={"Ano de início"} text={serie.startYear} />
                <DataLine title={"Ano de fim"} text={serie.endYear} />
                <ListAux title={"Criadores"} list={serie.creators} />
                <ListAux title={"Personagens"} list={serie.characters} />
                <ListAux title={"Histórias"} list={serie.stories} />
                <ListAux title={"Quadrinhos"} list={serie.comics} />
                <ListAux title={"Eventos"} list={serie.events} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsSerie;
