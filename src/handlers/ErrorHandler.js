module.exports = {
  handle: (error) => {
    console.error('Erro na Lambda:', error);

    return {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Ocorreu um erro. Tente novamente.',
        },
        shouldEndSession: true,
      },
    };
  },
};
