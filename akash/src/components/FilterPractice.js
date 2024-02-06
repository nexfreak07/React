import React, { useEffect, useState } from 'react'
import AddEmployeeForm from './AddEmployeeForm'
const employees = [{ name: "John Doe", position: "Manager" },
{ name: "Jane Smith", position: "Developer" },
{ name: "Alice Johnson", position: "Designer" }, { name: "Akash", position: "SDET" }, { name: "Mrux", position: "Dev" }, { name: "Nag", position: "IT" }, { name: "Raj", position: "SDE" }]


export default function FilterPractice() {
    const [employee, setEmployee] = useState(employees);
    const [query, setQuery] = useState('');

    const queryHandler = (e) => {
        setQuery(e.target.value);
    };


    // -----------------------------------Filtering using useEffect----------------------------------------
    // useEffect(()=>{
    //     const filteredEmployee = employee.filter(employee => employee.name.toLowerCase().includes(query.toLowerCase()) || employee.position.toLowerCase().includes(query.toLowerCase()));
    //     if(filteredEmployee.length > 0)
    //     {
    //         setEmployee(filteredEmployee);
    //     }

    // }, [query])

    // ---------------------------------------------Search Handling Button----------------------------

    const searchHandler = () => {
        const newEmployee = employee.filter(emp => emp.name.toLowerCase().includes(query.toLowerCase()) || emp.position.toLowerCase().includes(query.toLowerCase()))
        setEmployee(newEmployee);

        setQuery("");

    }

    const addData = (newData) => {
        setEmployee(prevState => [...prevState, newData])
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='search' onChange={queryHandler} value={query} />
                <button type='button' onClick={searchHandler}>Search</button>
            </div>
            <div>
            { employee.length > 0 ?    <ol type="A">{employee.map(e => <li key={Math.random()}><ul><li>Name - {e.name}</li> <li> Position {e.position}</li></ul></li>)}</ol> : <p>Employee Not Found</p>}
            </div>

            <div>
                <AddEmployeeForm addData={addData}/>

            </div>




        </div>
    )
}
