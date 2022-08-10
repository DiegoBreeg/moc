const fs = require('fs')


function escreve(data){
    
    try{
        fs.writeFileSync( './banco.txt', JSON.stringify(data), 'utf8' )

    } catch(err){
        console.log(err)
    }
}

module.exports = escreve