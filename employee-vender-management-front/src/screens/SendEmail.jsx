import { Paper, Typography, Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

export const SendEmail = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [emailResponse, setEmailResponse] = useState({ emailsSent: [], emailsFailed: [] });
    useEffect(() => {
        axios.get('http://localhost:8080/api/vendors')
        .then(response => setVendors(response.data))
        .catch(error => console.error(error));
    }, []);

    const handleCheckboxChange = (email) => {
        setSelectedVendors((prev) => 
            prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
        );
    }

    const handleSendEmail = () => {
        axios.post('http://localhost:8080/api/vendors/send-email', selectedVendors)
        .then(response => {
            setEmailResponse(response.data);
            alert('Emails sent successfully!');
          })
          .catch((error) => console.error(error));
    }
    return (
        <>
        <Paper>
        <Typography variant="h6" component="div" sx={{margin: "20px"}}>Send Email</Typography>
        <Box sx={{display: "flex", flexDirection: "column"}}>
        {
            vendors.map((vendor) => (
                <FormControlLabel
          key={vendor.id}
          control={
            <Checkbox
              checked={selectedVendors.includes(vendor.email)}
              onChange={() => handleCheckboxChange(vendor.email)}
            />
          }
          label={vendor.name}
        />
            ))
        }
        <Button variant="contained" color="primary" onClick={handleSendEmail} sx={{width: "200px"}}>
        Send Email
      </Button>
      </Box>
      <Typography variant="subtitle1" component="div" style={{ marginTop: '1rem' }}>
      Emails Sent:
      <ul>
          {emailResponse.emailsSent.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
        Emails Failed:
        <ul>
          {emailResponse.emailsFailed.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </Typography>
        </Paper>
        </>
    );
}