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
import { getWindowDimensions } from "./App/shared/components/Dimensions";
//Setting Redux
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

const MainView = styled.div`
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
    <MainView>
      <Routes />
      {isLoading && <Loading />}
    </MainView>
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
