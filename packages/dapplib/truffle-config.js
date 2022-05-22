require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name renew sad pudding grace forest equal gas'; 
let testAccounts = [
"0x57e11e6340a0e153c7f9ba630c948f190f6aeb2d5fb0f22177ba90c98d5465a2",
"0x85f150af2c23dc1df78e24bf836a02e65203c520635b2bab83a22064eef23f15",
"0xe115bc47ce1ae6d1882bf111802611f3979cd1a775f768bd1ac6b158288f0dfd",
"0x9dff068fb3053de00e753eb1e4f3f717ff091caa4628fa4dfd8bafe23ca886c8",
"0x4cafeb11b3629402e72bf158c77a448e0c7affcc21d3db7b3c79dc0cae95f9a5",
"0xfe0ae9a34132d03157e560be259466a297f83495bb0bc54198f4bca65f85e6c7",
"0x54fc12086f1b81437c9ef9c1ff75746001fcbe8f9800f17d6bac36acf740297a",
"0xafc3b9d6719608c66482a0a98eb9241551bc62cc42586ffa74338ac5d54fd67e",
"0x955741187483bcd10bb260d6f2ba4129cf837d2ed8bd7a47d1da55e58a2a6936",
"0x156ca54d97f15950e43d5657f30895ea88b1ef90449f52547cd11eb395c4ee6f"
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
            version: '^0.8.0'
        }
    }
};

