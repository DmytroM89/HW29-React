import React from "react";
import EmployeesTable from "../EmployeesTable/EmployeesTable";

import './Employees.scss';

function Employees() {
    const employees = [
        {id: 1, name: 'Sam Smith', workingDays: 159, amount: 30},
        {id: 2, name: 'John Doe', workingDays: 15, amount: 40},
        {id: 3, name: 'Vic Salivan', workingDays: 20, amount: 10},
        {id: 4, name: 'Alex Bolduin', workingDays: 14, amount: 20},
        {id: 5, name: 'Peter Parker', workingDays: 6, amount: 50},
    ];

    return (
        <div className="employees">
            <EmployeesTable employees={employees}></EmployeesTable>
        </div>
    );
}

export default Employees;
