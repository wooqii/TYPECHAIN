"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, Hash, previousHash, data, timestamp) {
        this.index = index;
        this.Hash = Hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, Hash, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + Hash + data + timestamp).toString();
const genesisBlock = new Block(0, "2083236893", "", "WooqiiBlock", 20181010);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map