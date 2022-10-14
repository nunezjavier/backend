const fs = require('fs')

class contenedor{
    constructor(name){
        this.name = name
    }
    save(producto){
        const productos = fs.readFileSync(`${this.name}.txt`, 'utf-8')
        const parsedProd = JSON.parse(productos)
        if(parsedProd.length == 0){
            id: 1
        }
        parsedProd.push(producto)
        fs.writeFileSync(JSON.stringify(productos))
        return 1
    }
}