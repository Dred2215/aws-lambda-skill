const serverService = require('../services/serverService');

const response = (text, endSession = true) => ({
  version: '1.0',
  response: {
    outputSpeech: { type: 'PlainText', text },
    shouldEndSession: endSession,
  },
});

module.exports = {
  handle: async (event) => {
    const intentName = event?.request?.intent?.name;
    const slots = event?.request?.intent?.slots ?? {};

    const result = await serverService.sendCommand({ intent: intentName, slots });

    return response(result.message ?? 'Comando executado com sucesso.');
  },
};
