/* eslint-disable global-require */
import { Model } from "objection";

import knex from "../index.js";

Model.knex(knex);

class Todo extends Model {
  static get tableName() {
    return "todo";
  }
}

export default Todo;
