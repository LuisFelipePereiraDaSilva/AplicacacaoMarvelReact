import React, { useEffect, useState } from "react";
import { getListCharacters } from "../../../services/requests/character/characterMarvel";
import ElementList from "../components/ElementList";
import { Character } from "../../../types/character";
import styled from "styled-components";
import FlatList from "flatlist-react";
import { getWindowDimensions } from "../../../shared/components/Dimensions";
import { useDispatch } from "react-redux";
import * as types from "../../../redux/types";

const MainView = styled.div`
  flex: 1;
  min-height: ${getWindowDimensions().height}px;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
`;

const List = styled.div`
  flex: 1;
`;

const Text = styled.text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const ListPersonagens = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    getListCharacters()
      .then((list) => {
        setCharacters(list);
        console.log(list);
      })
      .catch(() => {
        //Alert.alert('Ocorreu um erro ao carregar os personagens');
      })
      .finally(() => {
        dispatch({ type: types.SET_LOADING, payload: false });
      });
  }, []);

  return (
    <>
      <MainView>
        <Text>Personagens</Text>
        <List>
          <FlatList
            list={characters}
            renderItem={(item: Character) => (
              <ElementList name={item.name} image={item.image} />
            )}
            renderWhenEmpty={() => <div>Lista vazia</div>}
            displayGrid
          />
        </List>
      </MainView>
    </>
  );
};

export default ListPersonagens;
