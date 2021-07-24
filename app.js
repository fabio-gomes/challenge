const { getOrderedFromStock } = require('./modules/get-ordered')
const stock = require('./data/stock.json')

function main() {
    const userIput = process.argv[2] || ''
    console.log(getOrderedFromStock(userIput, stock))
}

main()
