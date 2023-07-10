import React, { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Dashboard() {
  // const [staffs, setStaffs] = useState({ list: [] });
  const url = "https://6498feaa79fbe9bcf83e8ac7.mockapi.io/api/v1/staffManagement"
  const [staffs, setStaffs] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    readStaffList();
  }, []);

  const readStaffList = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStaffs(data);
      })
      .catch((err) => {
        console.log(err);
        setStaffs([]);
      });
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };
  const [id, setId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete(id) {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        res.json();
        setMsg("Delete staff# " + id + " successfully");
        readStaffList();;
      })
      .catch((err) => {
        console.log(err);
        setMsg("Delete failed");
      });
  }
  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Link to={`/add`}>
        <Button className='left' variant="contained">Add<AddIcon /></Button>
      </Link>
      <h3>{msg}</h3>
      <Table>
        <TableHead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Avatar</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Operation</TableCell>
        </TableHead>
        {staffs.map((staff) => (
          <TableRow>
            <TableCell>{staff.id}</TableCell>
            <TableCell>{staff.name}</TableCell>
            <TableCell>{staff.avatar}</TableCell>
            <TableCell>{staff.age}</TableCell>
            <TableCell>{staff.address}</TableCell>
            <TableCell>
              <Link to={`/update/${staff.id}`}><button>Update<EditIcon /></button></Link>
              <Button
                onClick={(e) => {
                  // handleDelete(staff.id);
                  handleClickOpen(staff.id);
                }}
              >Delete<DeleteIcon /></Button>
            </TableCell>
          </TableRow>

        ))}
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Do you realy want to remove staff# {id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={(e) => {
                  handleDelete(id);
                  handleClose();
                }}>Confirm Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}