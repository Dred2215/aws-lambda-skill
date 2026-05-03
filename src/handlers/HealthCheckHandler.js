const serverService = require('../services/serverService');

const response = (text) => ({
  version: '1.0',
  response: {
    outputSpeech: { type: 'PlainText', text },
    shouldEndSession: false,
  },
});

module.exports = {
  handle: async () => {
    try {
      const { status } = await serverService.healthCheck();

      if (status === 200) {
        return response('Estou bem! Todos os sistemas funcionando normalmente. Como posso te ajudar?');
      }

      return response('Estou com alguns problemas. O sistema retornou um status inesperado.');
    } catch {
      return response('Não consegui verificar minha saúde agora. Tente novamente em instantes.');
    }
  },
};
