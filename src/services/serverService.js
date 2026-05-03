const axios = require('axios');

const VPS_URL = process.env.VPS_URL;

module.exports = {
  sendCommand: async (payload) => {
    const { data } = await axios.post(`${VPS_URL}/comando`, payload, {
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  },
};
