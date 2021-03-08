import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {Link} from 'react-router-dom';
import '../../style.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Day = ({ hours , country}) => {
    const classes = useStyles();
    return (
        <>
        <div className="hour-container">
        <Link to="/"><span className="link">Home Page</span></Link><br/>
        <h1>{country} Hourly Weather</h1>
        <div className="hour-wrapper">
            {hours.map((hour, index) => (
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={hour.condition.icon} />
                        </ListItemAvatar>
                        <ListItemText primary={hour.condition.text +" "+ hour.temp_c +"°C"} secondary={hour.time} />
                    </ListItem>
                </List>
            ))}
            </div>
        </div>
        </>
    )
}

export default Day
