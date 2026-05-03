const response = (text) => ({
  version: '1.0',
  response: {
    outputSpeech: { type: 'PlainText', text },
    shouldEndSession: false,
  },
});

const SAUDACAO = 'Ola! Eu sou o Nery Automa, seu assistente. Aqui estao os comandos disponiveis: Diga como voce esta para verificar a saude do sistema. Como posso te ajudar?';

module.exports = {
  handle: async () => response(SAUDACAO),
};
