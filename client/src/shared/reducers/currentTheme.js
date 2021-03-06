import { THEME } from "../actions/types.ts";
import { dark } from "../../assets/styles/themes.js";

export default function (state = dark, action) {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return state;
  }
}
