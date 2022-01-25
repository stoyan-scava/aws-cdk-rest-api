export const handler = async (event: any): Promise<any> => {
  console.log(event);

  // https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    // https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/
    body: JSON.stringify(event)
  };
};
