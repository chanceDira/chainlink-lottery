const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    cldev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL);
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: "*",
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
      // Ropsten
      // linkAddress: "0x20fE562d797A42Dcb3399062AE9546cd06f63280",
      linkAddress: "0x52872ef2C6A3DBff6fEDc0AdA8F6D268D9f72f34"
    },
  },
  compilers: {
    solc: {
      version: "0.6.6",
    },
  },
};
