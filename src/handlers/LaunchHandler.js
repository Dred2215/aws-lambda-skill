const response = (text) => ({
  version: '1.0',
  response: {
    outputSpeech: { type: 'PlainText', text },
    shouldEndSession: false,
  },
});

module.exports = {
  handle: async (event) => {
    return response('Olá! Como posso te ajudar?');
  },
};
