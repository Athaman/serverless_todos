'use strict';

const db = require('../db/db');

module.exports.getTodo = async event => {  
  const id = event.pathParameters.id;
  const todo = await db.todo.findOne({
    where: { id: id},
    attributes: ['id', 'task', 'completed']
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        todo: todo
      },
      null,
      2
    ),
  };
};

module.exports.listTodos = async event => {  
  const todos = await db.todo.findAll({
    attributes: ['id', 'task', 'completed']
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        todos: todos
      },
      null,
      2
    ),
  };
};