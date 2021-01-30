import React, { useEffect, useState } from "react";
import { getListCharacters } from "../../../services/requests/character/characterMarvel";
import ElementList from "../components/ElementList";
import Loading from "../../../shared/components/Loading";
import { Character } from "../../../types/character";
import styled from "styled-components";
import FlatList from "flatlist-react";
import { getWindowDimensions } from "../../../shared/components/Loading/Dimensions";

const MainView = styled.div`
  flex: 1;
  min-height: ${getWindowDimensions().height}px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const List = styled(FlatList)`
  align-items: center;
  justify-content: center;
`;

const ListPersonagens = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListCharacters()
      .then((list) => {
        setCharacters(list);
        console.log(list);
      })
      .catch(() => {
        //Alert.alert('Ocorreu um erro ao carregar os personagens');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <MainView>
        {loading ? (
          <Loading />
        ) : (
          // characters.map((item: Character) => {
          //   return <ElementList name={item.name} image={item.image} />;
          // })
          <List
            list={characters}
            renderItem={(item: Character) => (
              <ElementList name={item.name} image={item.image} />
            )}
            renderWhenEmpty={() => <div>Lista vazia</div>}
            displayGrid
          />
        )}
      </MainView>
    </>
  );
};

export default ListPersonagens;
