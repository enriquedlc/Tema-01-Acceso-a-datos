const getUserById = (id, callback) => {
    const user = {
        id,
        name: "Acceso a datos"
    }

    // if (id === 11) callback(new Error('Usuario 10 no existe')) para llamar a un error
    // else {
    setTimeout(() => {
        callback(null, user)
    }, 2000);
    }

getUserById(10, (error, user) => {
    if (error) 
        console.error(error.message)
    else 
        console.log(user)
})
