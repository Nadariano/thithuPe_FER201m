
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { Container } from 'react-materialize'
import { Link } from 'react-router-dom';
export default function Contact() {
    return (
        <Container>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                    This is the conctact page
                    </Typography>
                    <Typography variant="h5" component="div">
                    Hello, I am Nadariano
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="big" component={Link} to='https://github.com/Nadariano' target='blank'>My GitHub</Button>
                </CardActions>
            </Card>
        </Container>
    )
}