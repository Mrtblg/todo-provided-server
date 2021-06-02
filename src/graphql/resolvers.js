import { combineResolvers } from "graphql-resolvers";

import todoService from "../services/todoService";

const Query = {
  getTodoList: (parent, { orderBy, filters }) =>
    todoService.findAll({
      orderBy,
      filters,
    }),
  getTodoById: (parent, { id }) => todoService.findById(id),
};

const Mutation = {
  updateTodoStatusById: (parent, { id, isDone }) =>
    todoService.updateStatusById({ id, isDone }),
};

export default {
  Mutation,
  Query,
};
