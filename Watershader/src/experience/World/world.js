import * as kokomi from "kokomi.js";
import TestObject from "./testObject";

export default class World extends kokomi.Component {
  constructor(base) {
    super(base);
    this.testObject = new TestObject(this.base);
    this.testObject.addExisting();
  }
}