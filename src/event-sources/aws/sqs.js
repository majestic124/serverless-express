const getRequestValuesFromSqs = ({ event }) => {
  const method = 'POST'
  const headers = { host: 'sqs.amazonaws.com' }
  const body = event

  return {
    method,
    headers,
    body
  }
}

const getResponseToSqs = ({ body, statusCode, response }) => {
  if (statusCode > 399) {
    throw new Error(response.statusMessage)
  }
  try {
    console.log('SQS response body', body)
    return JSON.parse(body)
  } catch (error) {
  }
}

module.exports = {
  getRequest: getRequestValuesFromSqs,
  getResponse: getResponseToSqs
}
