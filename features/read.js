'use strict';

module.exports.firstGET = async event => {
    const message = "thanks for visiting my GET route";
  return {

    statusCode: 200,
    body: JSON.stringify(
      {
        message: message
      },
      null,
      2
    ),
  };
};
