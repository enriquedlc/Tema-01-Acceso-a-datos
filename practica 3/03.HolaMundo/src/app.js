// npm run prueba para el script por primera vez
// npm start para pasarle los parametros

// para pasar el parametro para el script: 
    //  argumentos simples: numeros, entonces no tengo que comprobar algo npm start -- 1 2 
    //  argumentos complejos(diferentes tipos): npm start -- -op=* 1 2 

const nombre = "Acceso a datos"

console.log(`Hola ${nombre}`)

const args = process.argv.slice(2)
console.log(`Parametros: ${args}`)

