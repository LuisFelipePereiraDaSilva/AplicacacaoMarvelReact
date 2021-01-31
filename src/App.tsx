import React from "react";
import "./App.css";
import Routes from "../src/App/routes";
import Loading from "./App/shared/components/Loading";
import styled from "styled-components";

//Redux
import reducer from "./App/redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { useSelector } from "react-redux";
import { ApplicationState } from "./App/redux";

//Setting Redux
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

const MainDiv = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  const isLoading = useSelector(
    (state: ApplicationState) => state.Loading.isLoading
  );

  return (
    <MainDiv>
      <Routes />
      {isLoading && <Loading />}
    </MainDiv>
  );
};

const ProvaiderCoponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ProvaiderCoponent;
