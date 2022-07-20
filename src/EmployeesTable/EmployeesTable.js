import React, {useState} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import './EmployeesTable.scss';

import EmployeeRow from "../EmployeeRow/EmployeeRow";


function EmployeesTable(props) {
    const [employees, setEmployees] = useState(props.employees);

    function changeWorkingDays(event) {
        const rowId = +event.target.dataset.id;
        const newWorkingDays = +event.target.value;

        const emplIdx = employees.findIndex(empl => empl.id === rowId);
        employees[emplIdx].workingDays = newWorkingDays;

        setEmployees([...employees]);
    }

    function changeAmount(event) {
        const rowId = +event.target.dataset.id;
        const newAmount = +event.target.value;

        const emplIdx = employees.findIndex(empl => empl.id === rowId);
        employees[emplIdx].amount = newAmount;

        setEmployees([...employees]);
    }

    return (
        <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Working days</TableCell>
                            <TableCell align="right">Amount ($)</TableCell>
                            <TableCell align="right">Salary ($)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((row) => (
                            <EmployeeRow key={row.id} row={row} changeWorkingDays={changeWorkingDays} changeAmount={changeAmount}></EmployeeRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default EmployeesTable;
