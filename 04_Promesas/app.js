const Employees = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Luis" },
    { id: 3, name: "Carlos" }
]

const Salaries = [
    { id: 1, salary: "1000" },
    { id: 2, salary: "2500" }
]

const getEmployee = (id) => {
    const promise = new Promise((resolve, reject) => {
        const employee = Employees.find((e) => e.id === id);

        if (employee) resolve(employee.name)
        else reject("el empleado " + id + " no existe")
    })
    return promise
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = Salaries.find((s) => s.id === id);
        salary
            ? resolve(salary.salary)
            : reject(`No existe salario para el empleado con salario ${salary}`)
    })
}

const id = 4

/* UNA MANERA DE HACERLO (PDF)
getEmployee(id)
    .then(result => console.log(result))
    .catch(err => console.log(err));

getSalary(id)
    .then(result => console.log(result))
    .catch(err => console.error(err));
*/

let employee_name
getEmployee(id)
    .then((employee) => {
        return getSalary(id)
    })
    .then((salary) => {
        console.log("El empleado " + employee_name + "tiene un salario de: " + salary + " €")
    })
    .catch(err => console.error(err));


































/* const checkServer = (url) => {
    return new Promise((resolve, reject) => {

        fetch(url)
            .then(response => resolve(` Estado del Servidor : $ { response.status === 200 ? " OK " : " NOT OK " } `))
            .catch(() => reject(` Error al localizar URL`));
    });
}

checkServer(document.URL.toString())
    .then(result => console.log(result))
    .catch(e => console.log(e));
*/
