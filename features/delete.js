const db = require('../db/db');

module.exports.deleteTodo = async (event, context) => {
    const id = event.pathParameters.id;

    const count = await db.todo.destroy({
        where: {
            id: id
        }
    });

    db.sequelize.close();

    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            affected: count
          },
          null,
          2
        ),
      };
}