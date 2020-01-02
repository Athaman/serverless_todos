const db = require('../db/db');

module.exports.updateTodo = async (event, context) => {
    const id = event.pathParameters.id;
    const body = JSON.parse(event.body);

    const response = await db.todo.update(body,{
        where: {
            id: id
        },
        returning: true
    });

    db.sequelize.close();

    console.log(response);

    const [rowsAffected, todoArray] = response;
    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            affected: rowsAffected,
            todo: todoArray[1]
          },
          null,
          2
        ),
      };
}