/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

const networks = {
  localhost: {
    url: 'http://127.0.0.1:8545',
  },
};

if (API_URL && PRIVATE_KEY) {
  networks.sepolia = {
    url: API_URL,
    accounts: [PRIVATE_KEY.startsWith('0x') ? PRIVATE_KEY : `0x${PRIVATE_KEY}`],
  };
}

module.exports = {
  solidity: '0.8.9',
  networks,
};
