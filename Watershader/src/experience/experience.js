import * as kokomi from "kokomi.js";
import World from "./World/world";
import Debug from "./Debug";

export default class Experience extends kokomi.Base {
  constructor(sel = "#sketch") {
    super(sel);
    window.Experience = this;
    this.debug = new Debug();
    this.camera.position.set(0, 0, 5);
    new kokomi.OrbitControls(this);

    this.world = new World(this);

  }
}