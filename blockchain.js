const Block = require('./block')
const sha256 = require('./node_modules/js-sha256')
const Transaction = require('./transaction')



class Blockchain {
    constructor(genesisBlock) {
        this.blocks = []
        this.addBlock(genesisBlock) //
    }

    addBlock(block) {
        if(this.blocks.length == 0 ) {
            block.previousHash ="0000000000000000"
            block.hash = this.generateHash(block)
        }

        this.blocks.push(block)
    } //

    getNextBlock([transactons]) {
        let block = new Block()
        transactions.forEach((transaction) => {
            block.addTransaction(transaction)
        })

        let previousBlock = this.getPreviousBlock()
        block.index = this.blocks.length
        block.previousHash = previousBlock.hash
        block.hash = this.generateHash(block)

        return block
    }

<<<<<<< Updated upstream
    getPreviousBlock() { //
        return this.blocks[this.blocks.length - 1]
    }



=======
    getNextBlock(transactions) {
        let block = new Block()
        transactions.forEach((transaction) => {
            block.addTransaction(transaction)

        })
        let previousBlock = this.getPreviousBlock()
        block.index = this.blocks.length
        block.previousHash = previousBlock.hash
        block.hash = this.generateHash(block)

        return block
    }

    getPreviousBlock() {
        return this.blocks[this.blocks.length - 1]
    }
>>>>>>> Stashed changes

    generateHash(block) {
        let hash = sha256(block.key)

        while(!hash.startsWith('0000')) {
            block.nonce += 1
<<<<<<< Updated upstream
            hash = sha256(block.hey)
            console.log(hash)
        }



=======
            hash = sha256(block.key)
            console.log(hash)

        }
>>>>>>> Stashed changes
        return hash
    }
}


module.exports = Blockchain