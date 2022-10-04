// necesitamos librerias para poder usar lar rutas para obtener archivos
// node

// path se llamam igual que la libreria que vamos a utilizar

// path.loquesea()

const path = require('path')

/**
 * INFORMACION DADO UN PATH
 * 
 * path.basename: retorna la ultima porcion de un path 
 * path.dirname: retorna el nombre del directorio de un path
 * path.extname: retorna la extension de un fichero dado un path
 * 
 * 
 * UNIR PATH: juntar path`s
 * 
 * path.join: une los elementos especificados en un unico path
 * path.resolve: resuelve una secuencia de segmentos de path a una ruta absoluta
 * path.format: devuelve un path dado un objero formado por los elementos {dir: '', base: ''}
 * path.parse: devuelve un objeto con las propiedades del path dado
 *              {
 *                  root: '',
 *                  dir: '',
 *                  base: '',
 *                  extension: ''   
 *               }
 * __dirname: variable que devuelve el path actual
 */

const filePath = 'C:\\Users\\Enrique\\Desktop\\Acceso a datos\\Tema-01\\04.Path\\prueba.txt'

console.log(`Base name: ${path.basename(filePath)}`) // prueba.txt

console.log(`Dir name: ${path.dirname(filePath)}`) // ruta hasta el fichero

console.log(`Extension: ${path.extname(filePath)}`) // extension.txt

// *************************************

const join = '/path'
const joinArgument = '/a/mi/fichero.txt'

console.log(`path Unido: ${path.join(join, joinArgument)}`) //  /path/a/mi/fichero.txt | le pasamos por parametro los argumentos o variables para que cree la ruta unida
console.log(
    `Unidos sin barras: ${path.join(join, 'usuario', 'file', 'fichero.txt')}`
) // /path/usuario/file/fichero.txt

// PATH RESOLVE

console.log(`Absolute path: ${path.resolve(joinArgument)} `) // la convierte a absoluta

console.log(`Absolute path: ${path.resolve('info.txt')} `) // apunta al fichero que creamos entre las comillas

// PATH FORMAT

const obj = {
    dir: 'C:\\Users\\Acceso a datos',
    base: 'demo_path.js'
}
const newPath = path.format(obj)

console.log(`newPath: ${newPath}`)

// PATH PARSE

const path1 = path.parse('/users/admin/website/index.html')
console.log(path1)

// RUTA ACTUAL

console.log('El directorio actual es: \n ', __dirname) // esto no serviria si no tuviesemos el require de la linea 8


