const LaunchHandler = require('./handlers/LaunchHandler');
const IntentHandler = require('./handlers/IntentHandler');
const ErrorHandler = require('./handlers/ErrorHandler');

exports.handler = async (event) => {
  const requestType = event?.request?.type;

  try {
    if (requestType === 'LaunchRequest') {
      return await LaunchHandler.handle(event);
    }

    if (requestType === 'IntentRequest') {
      return await IntentHandler.handle(event);
    }

    return ErrorHandler.handle(new Error(`Tipo de request não suportado: ${requestType}`));
  } catch (error) {
    return ErrorHandler.handle(error);
  }
};
