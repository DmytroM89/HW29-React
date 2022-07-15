import React, {useState} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import './Employees.scss';

function Employees() {
    const [employees, setEmployees] = useState([
        {id: 1, name: 'Sam Smith', workingDays: 159, amount: 30},
        {id: 2, name: 'John Doe', workingDays: 15, amount: 40},
        {id: 3, name: 'Vic Salivan', workingDays: 20, amount: 10},
        {id: 4, name: 'Alex Bolduin', workingDays: 14, amount: 20},
        {id: 5, name: 'Peter Parker', workingDays: 6, amount: 50},
    ]);

    const changeWorkingDays = (event) => {
        const rowId = +event.target.dataset.id;
        const newWorkingDays = +event.target.value;

        setEmployees(
            employees.map(empl => {
                if (empl.id === rowId) {
                    empl.workingDays = newWorkingDays;
                }

                return empl;
            })
        );
    }

    const changeAmount = (event) => {
        const rowId = +event.target.dataset.id;
        const newAmount = +event.target.value;

        setEmployees(
            employees.map(empl => {
                if (empl.id === rowId) {
                    empl.amount = newAmount;
                }

                return empl;
            })
        );
    }

    return (
        <div className="employees">
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
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                        >
                                            <TextField
                                                id="outlined-name"
                                                label="Days"
                                                type="number"
                                                size="small"
                                                defaultValue={row.workingDays}
                                                onChange={changeWorkingDays}
                                                sx={{
                                                    width: '25%',
                                                }}
                                                inputProps={{
                                                    "data-id": row.id
                                                }}
                                            />
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                        >
                                            <TextField
                                                id="outlined-name"
                                                label="Amount"
                                                type="number"
                                                size="small"
                                                defaultValue={row.amount}
                                                onChange={changeAmount}
                                                sx={{
                                                    width: '25%',
                                                }}
                                                inputProps={{
                                                    "data-id": row.id
                                                }}
                                            />
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right">{row.workingDays * row.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Employees;
