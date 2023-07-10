import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from '@mui/material';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Home() {
  const url="https://6498feaa79fbe9bcf83e8ac7.mockapi.io/api/v1/staffManagement"
  const [staffs, setStaffs] = useState([]);
  const [detailPopup, setDetailPopup] = useState(null);

  const getListStaff = async () => {
    const res = await fetch(url);
    if (res.status == 200) {
      const data = await res.json();
      setStaffs(data);
    }
  }
  useEffect(() => {
    getListStaff();
  }, []);

  const handlePopup = (staff) => {
    setDetailPopup(staff);
  }
  const handleClosePopup = () => {
    setDetailPopup(null);
  }

  return (
    <Container>
      <Typography variant="h3">Home</Typography>
      <Grid container spacing={3}>
        {/* {staffs.list.map((staff) => ( */}
        {staffs.map((staff) => (
          <Grid item xs={12} sm={6} md={3} key={staff.id}>
            <Card sx={{ borderRadius: "5%", border: "solid black", height: "300px" }}>
              <CardMedia component="img" image={staff.avatar} alt="" sx={{ border: "solid goldenrod", height: "200px" }} />
              <CardContent>
                <Typography>
                  {staff.id} - {staff.name}
                </Typography>
                <Link to={`/detail/${staff.id}`}>
                  <button>
                    Detail
                  </button>
                </Link>
                <Button onClick={() => handlePopup(staff)}><MoreVertIcon/></Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {detailPopup && (
        <div className="popup">
          <div className="popup-content">
            <div>
              <span className='close' onClick={handleClosePopup}>
                &times;
              </span>
              <img src={detailPopup.avatar} alt={detailPopup.id} />
              <h2>ID: {detailPopup.id}</h2>
              <p>Name: {detailPopup.name}</p>
              <p>Age: {detailPopup.age}</p>
              <p>Address: {detailPopup.address}</p>
              <p>CreatedAt: {detailPopup.createdAt}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}