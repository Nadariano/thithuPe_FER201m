import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const url = "https://6498feaa79fbe9bcf83e8ac7.mockapi.io/api/v1/staffManagement"
    const id = useParams();
    const staffID = id.id

    const [staff, setStaff] = useState([]);

    const getDetailedStaff = async () => {
        await fetch(`${url}/${staffID}`)
            .then((res) => res.json())
            .then((data) => {
                setStaff(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getDetailedStaff();
    }, []);

    return (
        <Container sx={{  display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{  display:'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width:'80vw', border:'solid 15px goldenrod', padding:'2%', backgroundColor:'whitesmoke' }}>
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <CardMedia component="img" src={staff.avatar} alt="" sx={{ border:'solid 5px black',borderRadius: '50%', width: '100%', height: '100%' }} />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div style={{ textAlign: 'center', margin: 'auto', fontStyle:'italic' }}>
                                <Typography variant="h6">Staff ID: {staff.id}</Typography>
                                <Typography variant="h6">Name: {staff.name}</Typography>
                                <Typography variant="h6">Age: {staff.age}</Typography>
                                <Typography variant="h6">Address: {staff.address}</Typography>
                                <Typography variant="h6">Create Date: {staff.createdAt}</Typography>
                            </div>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container>

    );
}