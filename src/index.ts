class Block {
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

const genesisBlock:Block = new Block(0, "2083236893", "", "WooqiiBlock", 20181010);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};