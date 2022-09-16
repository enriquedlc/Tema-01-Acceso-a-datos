const Employees = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Luis" },
    { id: 3, name: "Carlos" }
]

const Salaries = [
    { id: 1, salary: "1000" },
    { id: 2, salary: "2500" }
]

const getEmployee = (id, callback) => {
    const employee = Employees.find((e) => e.id === id);

    if (employee) callback(null, employee.name)
    else callback(new Error(`El emplado ${id} no existe`))
}

const getSalary = (id, callback) => {
    const salary = Salaries.find((s) => s.id === id);

    if (salary) callback(null, salary.salary)
    else callback(new Error(`No existe salario para el empleado con id: ${id}`))
}

const id = 2

getEmployee(id, (error, name) => {
    if (error)
        console.error(error.message)
    else
        getSalary(id, (error, salary) => {
            if (error)
                console.error(error.message)
            else
                console.log("El empleado " + name + " tiene un salario de: " + salary)
        })
})
