import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/employees').then(response => setEmployees(response.data))
        .catch(error => console.error(error));
    }, []);
    return (
        <>
        <Paper>
        <Typography variant="h6" component="div" sx={{margin:"20px"}}>List of Employees</Typography>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>CTC</TableCell>
                <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map(employee => (
                    <TableRow key={employee.email}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.designation}</TableCell>
                        <TableCell>{employee.ctc}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Paper>
        </>
    );
}