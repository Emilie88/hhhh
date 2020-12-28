import { combineReducers } from "redux";

import dragon from "./dragon";
import question from "./question";
import chevalier from "./chevalier";
import counter from './counter';

export default combineReducers({
  //   d: dragon,  // on peut définir des clés plus courtes pour accéder à nos reducers dans l'app
  //   h: history,
  dragon,
  question,
  chevalier,
  counter
});