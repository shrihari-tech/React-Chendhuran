import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Zoom from '@mui/material/Zoom';

import "./CardMaterial.css"

function CardMaterial(props) {
  console.log(props.blog)
  // const [blog,setBlog] = React.useState({})
  // React.useEffect(()=>{
  //   setBlog(props.blog)
  // },[])
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345,height:410 , borderRadius:"50px",marginBottom:"10px",marginTop:"10px" }}>
        <CardActionArea>
          <CardMedia 
            component="img"
            height="140"
            image={props.blog.image}
            alt="green iguana"
          >
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.blog.name}
              {/* {blog && blog.name}   */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.blog.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={props.blog.link}>
            Check
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}





export default CardMaterial;