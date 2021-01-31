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
import Title from "../../shared/components/Title";
import { getEvent } from "../../services/requests/event/eventMarvel";
import { Event } from "../../types/event";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DetailsCharacter = (props: Props) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    if (props.match?.params?.id) {
      getEvent(props.match?.params?.id)
        .then((event) => {
          if (event) {
            setEvent(event);
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
    alert("Ocorreu um error ao carregar o evento");
    dispatch({ type: types.SET_LOADING, payload: false });
  };

  return (
    <>
      <MainDiv>
        <MainDivAux flexDirection={isMobile() ? "column" : "row"}>
          {event && (
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
                <Image isMobile={isMobile()} src={event.image} />
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
                <Title>Detalhes do Evento</Title>
                <DataLine title={"Id"} text={event.id} />
                <DataLine title={"Nome"} text={event.name} />
                <DataLine title={"Descrição"} text={event.description} />
                <DataLine title={"Data de início"} text={event.startDate} />
                <DataLine title={"Data de fim"} text={event.endDate} />
                <ListAux title={"Criadores"} list={event.creators} />
                <ListAux title={"Personagens"} list={event.characters} />
                <ListAux title={"Histórias"} list={event.stories} />
                <ListAux title={"Quadrinhos"} list={event.comics} />
                <ListAux title={"Séries"} list={event.series} />
              </BodyDetails>
            </>
          )}
        </MainDivAux>
      </MainDiv>
    </>
  );
};

export default DetailsCharacter;
