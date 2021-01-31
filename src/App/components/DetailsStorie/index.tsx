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
import { getStorie } from "../../services/requests/storie/storieMarvel";
import { Storie } from "../../types/storie";
import Title from "../../shared/components/Title";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsStorie = (props: Props) => {
  const dispatch = useDispatch();
  const [storie, setStorie] = useState<Storie>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getStorie(props.match?.params?.id)
        .then((storie) => {
          if (storie) {
            setStorie(storie);
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
    alert("Ocorreu um error ao carregar a história");
    dispatch({ type: types.SET_LOADING, payload: false });
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {storie && (
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
                <Image
                  isMobile={isMobile()}
                  src={
                    "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg"
                  }
                />
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
                <Title>Detalhes da História</Title>
                <DataLine title={"Id"} text={storie.id} />
                <DataLine title={"Nome"} text={storie.name} />
                <DataLine title={"Descrição"} text={storie.description} />
                <ListAux title={"Criadores"} list={storie.creators} />
                <ListAux title={"Personagens"} list={storie.characters} />
                <ListAux title={"Séries"} list={storie.series} />
                <ListAux title={"Quadrinhos"} list={storie.comics} />
                <ListAux title={"Eventos"} list={storie.events} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsStorie;
