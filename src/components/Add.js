import { Button, CardContent, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
export default function App() {
    const url = "https://6498feaa79fbe9bcf83e8ac7.mockapi.io/api/v1/staffManagement"
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Button Clicked");
        const formData = {
            name: name,
            address: address,
            age: age,
            avatar: avatar,
            createdAt: createdAt,
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data =>
                console.log(data),
            )
            .catch(error =>
                console.log(error),
                setMsg("Add failed")
            );
        setMsg("Add successfully")
        resetForm();
    }
    const [name, setName] = useState('');
    const [address, setAddr] = useState('');
    const [age, setAge] = useState('');
    const [avatar, setImage] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    // var curr = new Date();
    // var date = curr.toISOString().substring(0, 10);

    function getCurDate() {
        var curr = new Date();
        var date = curr.toISOString().substring(0, 10);
        setCreatedAt(date);
    }
    useEffect(() => {
        getCurDate(); // Initialize createdAt state when the component mounts
      }, []);
    const [msg, setMsg] = useState('');
    // Function to clear the form
    // const form = document.getElementById("add-form");
    function resetForm() {
        setName('');
        setAddr('');
        setAge('');
        setImage('');
        setCreatedAt('');
    }
    return (
        <Container>
            <CardContent style={{ textAlign: 'left' }}>
                <form id="add-form"
                    onSubmit={handleSubmit}>
                    {/* <FormGroup> */}
                    <Typography>Enter name</Typography>
                    <input type="text" required id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Typography>Enter address</Typography>
                    <input type="text" required id="address" name="address" value={address} onChange={(e) => setAddr(e.target.value)} />
                    <Typography>Enter age</Typography>
                    <input type="number" required id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                    <Typography>Enter avatar</Typography>
                    <input type="text" required id="avatar" name="avatar" value={avatar} onChange={(e) => setImage(e.target.value)} />
                    <Typography>Enter Created Date</Typography>
                    <input disabled type="date" required id="creatDAt" name="creatDAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                    {/* </FormGroup> */}
                    <Button variant="contained" style={{ width: '25%' }} type="submit" value="Submit">Submit</Button>
                </form>
                <h3>{msg}</h3>

            </CardContent>
        </Container >
    )
}