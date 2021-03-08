import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({text , icon , maxtemp ,mintemp, avgtemp , location , date  , index, url }) {
  const classes = useStyles();

  let history = useHistory();

  const handleClick = () => {
    history.push(`${url}`);
  }

  return (
    <Card className={classes.root} variant="outlined" key={index}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {location}
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <img src={icon} alt=""/>
        </Typography>
        <Typography variant="body2" component="p">
            Avg:{avgtemp + "°C"}
        </Typography>
        <Typography variant="body2" component="p">
            Max:{maxtemp + "°C"}
        </Typography>
        <Typography variant="body2" component="p">
            Min:{mintemp + "°C"}
        </Typography>
        <Typography variant="body2" component="p">
            Date:{date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Hourly Weather🕑</Button>
      </CardActions>
    </Card>
  );
}
