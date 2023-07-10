import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const url = "https://6498feaa79fbe9bcf83e8ac7.mockapi.io/api/v1/staffManagement";
    const id = useParams();
    const staffID = id.id;

    const [staff, setStaff] = useState([]);

    const [tempStaff, setTempStaff] = useState([]);

    const [changed, setChanged] = useState(false);

    const [msg, setMsg] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        console.log('staff', staff)
        console.log('temp staff', tempStaff)
        console.log(changed)
    })

    useEffect(() => {
        fetch(`${url}/${staffID}`)
            .then((res) => res.json())
            .then((data) => {
                setStaff(data);
                setTempStaff(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function updateStaff() {
        fetch(`${url}/${staffID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tempStaff),
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // setStaff(data.staff);
                // setChanged(false);
                setMsg("Updated");
                console.log(data);
                handleOpen();
            })
            .catch((err) => {
                setMsg("Update failed");
                console.log(err);
            }
            );
    }
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '80vw', border: 'solid 15px lightblue', padding: '2%', backgroundColor: 'whitesmoke' }}>
                <form id="update-form">
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <CardMedia component="img" image={staff.avatar} alt="" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <div style={{ textAlign: 'center', margin: 'auto', fontStyle: 'italic' }}>
                                    <input type='text' id="name" name="name" value={tempStaff.name}
                                        onChange={(e) => {
                                            setChanged(true);
                                            setTempStaff({ ...tempStaff, name: e.target.value, })
                                        }} />
                                    <input type='number' id="age" name="age" value={tempStaff.age}
                                        onChange={(e) => {
                                            setChanged(true);
                                            setTempStaff({ ...tempStaff, age: e.target.value, })
                                        }} />
                                    <input type='text' id="address" name="address" value={tempStaff.address}
                                        onChange={(e) => {
                                            setChanged(true);
                                            setTempStaff({ ...tempStaff, address: e.target.value, })
                                        }} />
                                    {changed ? (
                                        <>
                                            <Button onClick={(e) => {
                                                setTempStaff({ ...staff });
                                                setChanged(false);
                                            }}>Cancel</Button>
                                            <Button onClick={updateStaff}>Save changes</Button>
                                        </>
                                    ) : null}
                                </div>
                            </CardContent>
                        </Grid>
                    </Grid>

                </form>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="Box">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    {msg}
                    </Typography>
                </Box>
            </Modal>
        </Container>


    );
}