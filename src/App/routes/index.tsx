import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsCharacter from "../components/DetailsCharacter";
import DetailsComic from "../components/DetailsComic";
import DetailsCreator from "../components/DetailsCreator";
import DetailsEvent from "../components/DetailsEvent";
import DetailsSerie from "../components/DetailsSerie";
import DetailsStorie from "../components/DetailsStorie";
import ListCharacters from "../components/ListCharacters/screen";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={ListCharacters} />
      <Route exact path="/listCharacters" component={ListCharacters} />
      <Route exact path="/DetailsCharacter/:id" component={DetailsCharacter} />
      <Route exact path="/DetailsComic/:id" component={DetailsComic} />
      <Route exact path="/DetailsCreator/:id" component={DetailsCreator} />
      <Route exact path="/DetailsEvent/:id" component={DetailsEvent} />
      <Route exact path="/DetailsSerie/:id" component={DetailsSerie} />
      <Route exact path="/DetailsStorie/:id" component={DetailsStorie} />
    </Router>
  );
}
