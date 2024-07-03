import { Paper, Table, TableBody, TableHead, TableRow, TableCell, Typography, Button, Box, Link } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {axios.get('http://localhost:8080/api/vendors')
        .then(response => setVendors(response.data))
        .catch(error => console.error(error));
    }, []);
    return (
        <>
        <Paper>
        <Typography variant="h6" component="div" sx={{margin:"50px"}}>List of Vendors</Typography>
          <Link href="/send-email" sx={{marginRight: "1100px", marginBottom: "20px"}}>Send Email</Link>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>UPI</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    vendors.map(vendor => (
                        <TableRow key={vendor.id}>
                            <TableCell>{vendor.id}</TableCell>
                            <TableCell>{vendor.name}</TableCell>
                            <TableCell>{vendor.email}</TableCell>
                            <TableCell>{vendor.upi}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </Paper>
        </>
    );
}