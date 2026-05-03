const HealthCheckHandler = require('./HealthCheckHandler');

const response = (text) => ({
  version: '1.0',
  response: {
    outputSpeech: { type: 'PlainText', text },
    shouldEndSession: false,
  },
});

const INTENTS = {
  SaudeIntent: HealthCheckHandler,
};

module.exports = {
  handle: async (event) => {
    const intentName = event?.request?.intent?.name;
    const handler = INTENTS[intentName];

    if (!handler) {
      return response(`Desculpe, não entendi o comando "${intentName}". Tente novamente.`);
    }

    return handler.handle(event);
  },
};
