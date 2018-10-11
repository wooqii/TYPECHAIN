import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public Hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    Hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + Hash + data + timestamp).toString();

  constructor(
    index: number,
    Hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.Hash = Hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}



const genesisBlock: Block = new Block( 0,  "2083236893",  "", "WooqiiBlock",  20181010);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000)

export {};
