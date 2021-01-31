import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsCharacter from "../components/DetailsCharacter";
import ListCharacters from "../components/ListCharacters/screen";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={ListCharacters} />
      <Route exact path="/listCharacters" component={ListCharacters} />
      <Route exact path="/DetailsCharacter/:id" component={DetailsCharacter} />
    </Router>
  );
}
