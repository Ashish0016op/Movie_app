import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css'
export default function OfferCard({Details}) {
    if(Details==undefined){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Details.Url}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <p className='offer_title'>{Details.title}</p>
            <p>{Details.validDate}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
