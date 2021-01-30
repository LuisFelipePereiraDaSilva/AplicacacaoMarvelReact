import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListCharacters from "../components/ListCharacters/screen";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={ListCharacters} />
      <Route exact path="/listCharacters" component={ListCharacters} />
    </Router>
  );
}
