import React from "react";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TableRow from "@mui/material/TableRow";

function EmployeeRow({row, changeWorkingDays, changeAmount}) {

    return (
        <TableRow
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
                        onChange={(e) => changeWorkingDays(e)}
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
                        onChange={(e) => changeAmount(e)}
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
    );
}

export default EmployeeRow;
