const fs = require('fs') // fs: file system
const { version } = require('os')
const fsPromises = fs.promises
const path = require('path')

/**
 * CALLBACKS Y SYNC:
 * 
 * fs.access : comprueba si un fichero file o directorio existe y si el usuario puede acceder
 * fs.existsSync : comprueba si existe un directorio (sincrono)
 * fs.accessSync : igual a access (sincrona)
 * fs.stat : obtener informacion acerca de un dir o file
 * stats.isDirectory : comprueba si es un directorio
 * stats.isFile : comprueba si es un archivo
 * stats.size : variable que indica el tamaño 
 * fs.readdir : devuelve los ficheros de un directorio
 * 
 */

console.clear()

/**
 * COMPROBAR SI EXISTE UN DIRECTORIO
 *
 */

// version callback

// Si no retorna un error el dir existe y se tiene acceso
// fs.constants.F_OK : read/write/execute permission
// fs.constants.R_OK : read permission
// fs.constants.W_OK : write permission
// fs.constants.X_OK : execute permission
// fs.constants.R_OK | fs.constants.W_OK : read/write permission

fs.access('./dir_callback', fs.constants.F_OK, (error) => {
    if (error) {
        console.log('fs.access El directorio dir_callback NO existe')
    } else {
        console.log('fs.access El directorio dir_callback existe')
    }
})

// version promesas

function canAccess() {
    fsPromises
        .access('./dir_promesas', fs.constants.F_OK)
        .then(true)
        .catch((error) => {
            if (error.code === "ENOENT") {
                return false
            }
            throw error
        })
}

if (canAccess()) {
    console.log('canAccess El directorio dir_promesas Existe')
} else {
    console.log('canAccess El directorio dir_promesas NO Existe')
}

// version sincrona

try {
    // (./) carpeta en la que estoy
    if (fs.existsSync('./')) {
        console.log('fs.existsSync El directorio dir_sync Existe')
    } else {
        console.log('fs.existsSync El directorio dir_sync NO Existe')
    }
} catch (error) {
    console.log(`Error: ${error}`)
}

try {
    fs.existsSync('./', fs.constants.R_OK | fs.constants.W_OK)
    console.log('fs.existsSync El directorio dir_sync Existe')
} catch (error) {
    console.log(`Error: ${error}`)
}

/**
 * COMPROBAR SI ES DIRECTORIO O FILE
 */

// version callback ||| stats devuelve todas las estadisticas de lo especificado

fs.stat(path.join(__dirname, 'app.js'), (error, stats) => {
    console.log(
        'stat callback: ',
        stats.isDirectory() ? 'Es un directorio' : 'NO es un directorio'
    )
    console.log('stat callback', stats)
})

// version promesas

fsPromises
    .stat(path.join(__dirname, 'app.js'))
    .then((stats) => {
        console.log(
            'stat promesas: ',
            stats.isFile() ? 'Es un fichero' : 'NO es un fichero'
        )
        console.log('stat promasas', stats)
    })
    .catch((error) => {
        console.log(error)
    })

// version sincrona

try {
    const stats = fs.statSync(path.join(__dirname, 'app.js'))
    console.log('Es un fichero: ? ' + stats.isFile())
    console.log('Tamaño: ' + stats.size)
} catch (error) {
    console.log(error.message)
}

/**
 * LISTAR FICHEROS DE UN DIRECTORIO IMPORTANTE PARA LA PRACTICA
 */

const FOLDER = './'

// version callbacks

fs.readdir(FOLDER, (err, files) => { // se le pasa el primera parametro que es la carpeta que definimos arriba, despues el callback
    if (err) {
        console.log(err.message) 
    } else {
        console.log('************** CALLBACK ************')
        console.log(files)
        for (const file of files) {
            console.log(file)
    }
    files.forEach((file) => {
        console.log(file)
    })
        console.log('************** FIN CALLBACK ************')
    }
})

// VERSION SINCRONA

try {
    const arrayOfFiles = fs.readdirSync(FOLDER)
    console.log('************** READDIRSYNC ************')
    for (const file of arrayOfFiles) {
        console.log(file)
    }
    console.log('************** FIN READDIRSYNC ************')
} catch (error) {
    console.log(error)
}

// version con promesas

fsPromises
    .readdir(FOLDER)
    .then(files => {
        console.log('********** PROMISE **********')
        for (const file of files) {
            console.log(file)
        }
        console.log('********** FIN PROMISE **********')
    })
    .catch(err => console.log(err.message))
 
