"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "batch3  ddd serverless!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
