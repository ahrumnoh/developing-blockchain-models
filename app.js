const Block = require('./block')
const Blockchain = require('./blockchain')
const Transaction = require('./transaction')

let transaction = new Transaction('Rose', 'Great', 100)

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

<<<<<<< Updated upstream
let anotherTransaction = new Transaction('steven', "Brian", 500)
let block1 = blockchain.getNextBlock.getNextBlock([anotherTransaction, transaction])
blockchain.addBlock(block1)

console.log(blockchain)
=======
console.log(blockchain)
>>>>>>> Stashed changes
