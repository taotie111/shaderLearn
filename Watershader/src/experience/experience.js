import * as kokomi from "kokomi.js";
import World from "./World/world";


export default class Experience extends kokomi.Base {
  constructor(sel = "#sketch") {
    super(sel);
    window.Experience = this;
    this.world = new World(this);
  }
}