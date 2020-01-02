const db = require('../db/db');

module.exports.createTodo = async (event, context) => {
    const body = JSON.parse(event.body);

    const todo = await db.todo.create({
      task: body.task
    });

    db.sequelize.close();

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
}