import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  static validateStructue = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.Hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";

  public index: number;
  public Hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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

const genesisBlock: Block = new Block(
  0,
  "2083236893",
  "",
  "WooqiiBlock",
  20181010
);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewtimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const creatNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewtimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.Hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.Hash,
    data,
    newTimestamp
  );
  return newBlock;
};

const isBlockValid = (cadidatBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructue(cadidateBlock)) {
    return false;
  } else if(previousBlock.index+1 !=== candidateBlock.index) {
    return false;
  } else if (previousBlock.Hash !=== candidateBlock.Hash) {
    return false;
  } else if ()
};

export {};
