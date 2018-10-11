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
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + data + timestamp).toString();
Block.validateStructue = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.Hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";
const genesisBlock = new Block(0, "2083236893", "", "WooqiiBlock", 20181010);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewtimeStamp = () => Math.round(new Date().getTime() / 1000);
const creatNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewtimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.Hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.Hash, data, newTimestamp);
    return newBlock;
};
const isBlockValid = (cadidatBlock, previousBlock) => {
    if (!Block.validateStructue(cadidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== )
         = candidateBlock.index;
    {
        return false;
    }
    if (previousBlock.Hash !== )
         = candidateBlock.Hash;
    {
        return false;
    }
    if ()
        ;
};
//# sourceMappingURL=index.js.map