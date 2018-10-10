"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, Hash, previousHash, data, timestamp) {
        this.index = index;
        this.Hash = Hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2083236893", "", "WooqiiBlock", 20181010);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map