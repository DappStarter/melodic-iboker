require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note pitch evil hidden clog metal gentle'; 
let testAccounts = [
"0x727c6d99108303d7365a085f401933f802f63824240833b8b912896a6e68d694",
"0x965bd054d3b37c16e9ce6a4e4e6121420d92b1607a77ca01030e5f0adce5ba5e",
"0xdc571889ce201b35ebea3024b594c1aba3aa4e4bd3c61724af6a9e0e11a9a9eb",
"0x67aafe1254aee817cf6bd8226d0b0211a5e8aeb767908556325a0f9641e20bc2",
"0x6bd9ff3dce61ea21d7ef793665374fb32a4b32100f5dad70e02fce381e4b554b",
"0x2ba0ac505573d3a79f5f3eed50aafe395f246b12c40c3754461b8fef19af817a",
"0xfe11b45fdcfbcd4db0ee4ba9baa319dc6ad81a454f1f6d4a5a40b944b1e7878c",
"0x42a072dae74c268f26e345f63a09804231efb7c533427aaf284b01cd17f8ced1",
"0x79d6c0879332e2c9d9c60e0c4367d33217c16393a5771dd8c5d21ab590aac9b0",
"0x928dcb686f8a3389930fa32052e3eca5208d38e289e92aa1b51bd4f64f954e2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
