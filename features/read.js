'use strict';

module.exports.getTodo = async event => {  
  const todo = "art!";

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
