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
import { getComic } from "../../services/requests/comic/comicMarvel";
import { Comic } from "../../types/comic";
import Title from "../../shared/components/Title";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsComic = (props: Props) => {
  const dispatch = useDispatch();
  const [comic, setComic] = useState<Comic>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getComic(props.match?.params?.id)
        .then((comic) => {
          if (comic) {
            setComic(comic);
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
    alert("Ocorreu um error ao carregar o quadrinho");
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {comic && (
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
                <Image isMobile={isMobile()} src={comic.image} />
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
                <Title>Detalhes do Quadrinho</Title>
                <DataLine title={"Id"} text={comic.id} />
                <DataLine title={"Nome"} text={comic.name} />
                <DataLine title={"Descrição"} text={comic.description} />
                <ListAux title={"Séries"} list={comic.series} />
                <ListAux title={"Criadores"} list={comic.creators} />
                <ListAux title={"Personagens"} list={comic.characters} />
                <ListAux title={"Histórias"} list={comic.stories} />
                <ListAux title={"Eventos"} list={comic.events} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsComic;
