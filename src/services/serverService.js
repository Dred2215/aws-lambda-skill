const axios = require('axios');

const VPS_URL = process.env.VPS_URL;

module.exports = {
  healthCheck: async () => {
    const response = await axios.get(`${VPS_URL}/health`, { timeout: 5000 });
    return { status: response.status };
  },

  sendCommand: async (payload) => {
    const { data } = await axios.post(`${VPS_URL}/comando`, payload, {
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  },
};
