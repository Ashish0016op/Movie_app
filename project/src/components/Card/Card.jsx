import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import './Card.css';
import { Link } from 'react-router-dom';
import BottomDrawer from '../BottomDrawer/BottomDrawer';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function MovieCard({ Details }) {
  console.log("details is", Details);

  if (Details === undefined) {
    return <div>Loading...</div>;
  }
  
  const isReleased = Details.isReleased === true || Details.isReleased === "true"; 
  
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleCardClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, position: 'relative', cursor: 'pointer' }} onClick={handleCardClick}>
        <CardMedia
          component="img"
          sx={{ height: 400 }}
          image={Details.ImageURL}
          alt={Details.Name}
        />
        <div className='title-overlay'>
          <div>
            <p className='title'>{Details.Name}</p>
            <p>{Details.ReleasedDate}</p>
            <p>{Details.Rating}</p>
            <p>{Details.Language}</p>
          </div>
          <div>
            {isReleased && (
              <Link to={`/booking/${Details._id}`}>
                <button className='slide_btn'>Book Now</button>
              </Link>
            )}
          </div>
        </div>
      </Card>

      <BottomDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        
        <div>
        <div className='drawer_image_box'>
      <img 
        src={Details.ImageURL} 
        alt='image' 
        style={{ height: '500px', width: 'auto', display: 'block', margin: '0 auto' }} 
      />
    </div>
          <h2>{Details.Name}</h2>
          <p>{Details.Description}</p>
        </div>
      </BottomDrawer>
    </>
  );
}
