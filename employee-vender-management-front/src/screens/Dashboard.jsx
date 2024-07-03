import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

export const Dashboard = () => {
    const [inputVisible, setInputVisible] = useState(false);
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [ctc, setCtc] = useState("");
    const [email, setEmail] = useState("");

    const [vname, setVname] = useState('');
    const [vemail, setVemail] = useState('');
    const [upi, setUpi] = useState('');
    const [openVendor, setOpenVendor] = useState(false);
   const openInput = () => {
       setInputVisible(true);
      };
      const closeInput = () => {
        setInputVisible(false);
      };

      const openDialog = () => {
        setOpenVendor(true);
      }
      const closeDialog = () => {
        setOpenVendor(false);
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {name, designation, ctc, email};
        axios.post('http://localhost:8080/api/employees', newEmployee)
        .then(response => {alert('Employee created successfully!');})
        .catch(error => alert(error));
        setInputVisible(false);
        setName("");
        setDesignation("");
        setCtc("");
        setEmail("");
      }

      const clearValueAndCloseModel = () => {
        setOpenVendor(false);
        setVname("");
        setVemail("");
        setUpi("");
      }
      const handleVendorSubmit = (e) => {
        e.preventDefault();
        const newVendor = {
          name : vname, email: vemail, upi : upi};
        axios.post('http://localhost:8080/api/vendors', newVendor)
        .then(response => {
          
        clearValueAndCloseModel();
          alert('Vendor created successfully!');
        })
        .catch(error => alert(error));
        
      }
    return (
        <>
        <Container>
        <Typography variant="h6" component="div" gutterBottom sx={{margin: "20px"}}>Welcome to Employee Management System</Typography>
        <Box sx={{margin: "50px", display: "flex", justifyContent: "space-between"}}>
           <Button variant="contained" color="primary" style={{ marginRight: '1rem' }} onClick={openInput}>
          Create Employee
          </Button>
          {
            inputVisible && (
                <Dialog open={inputVisible} onClose={closeInput}>
                    <DialogTitle>Add New Employee</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        To add new Employee please add Employee details here ..
                        </DialogContentText>
                        <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="name"
                    label="Enter Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                   <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="designation"
                    label="Enter Designation"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                   <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="ctc"
                    label="Enter CTC"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={ctc}
                    onChange={(e) => setCtc(e.target.value)}
                  />
                   <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="email"
                    label="Enter Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleSubmit}>Confirm Add</Button>
                        <Button variant="contained" color="error" onClick={closeInput}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            )
          }
          <Link href="/employees">Employees List</Link>
          <Button variant="contained" color="secondary" style={{ marginRight: '1rem' }} onClick={openDialog}>
          Create New Vendor
          </Button>
          {
            openVendor && (
                <Dialog open={openVendor} onClose={closeDialog}>
                    <DialogTitle>Add New Vendor</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        To add new Vendor please add Vendor details here ..
                        </DialogContentText>
                        <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="vname"
                    label="Enter Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={vname}
                    onChange={(e) => setVname(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="vemail"
                    label="Enter Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={vemail}
                    onChange={(e) => setVemail(e.target.value)}
                  />
                   <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="upi"
                    label="Enter UPI Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                  />
                  
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleVendorSubmit}>Confirm Add</Button>
                        <Button variant="contained" color="error" onClick={closeDialog}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            )
          }
          <Link href="/vendors">Vendors List</Link>
        </Box>
        </Container>
        </>
    );
}