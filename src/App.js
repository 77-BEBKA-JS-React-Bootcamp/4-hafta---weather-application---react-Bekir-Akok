import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Day from './Components/Day/Day';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


function App() {



  /*Weather Api */
  const [weather , setWeather] = useState('')
  const [region , setRegion] = useState('Bursa')

  const params = {
    key: '492f0f02920e4dcd83895826210703',
    region
  }

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.region}&days=7`)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [params.region])

  /*Counrty Select*/
  const classes = useStyles();
  const [countryInput, setInputCountry] = useState("");
  const [country, setCountry] = useState('');

  const handleChange =(event) => {
    setInputCountry(event.target.value);
    setRegion(event.target.value) 
    };


  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then(response => response.json())
      .then(data => setCountry(data.data[181]))
  }, [])

console.warn(weather)
  return (
    <>
    <Router>
      <Switch>
        <Route path="/1615161600">
        {weather.current && (
              weather.forecast.forecastday.filter(x => x.date_epoch == "1615161600" ).map((item , index) => (
                <Day key={index}
                hours={item.hour}
                country={region}  />
              )))}
        </Route>
        <Route path="/1615248000">
        {weather.current && (
              weather.forecast.forecastday.filter(x => x.date_epoch == "1615248000" ).map((item , index) => (
                <Day key={index}
                hours={item.hour}
                country={region}  />
              )))}
        </Route>
        <Route path="/1615334400">
        {weather.current && (
              weather.forecast.forecastday.filter(x => x.date_epoch == "1615334400" ).map((item , index) => (
                <Day key={index}
                hours={item.hour}
                country={region}  />
              )))}
        </Route>
        <Route path="/">
        <div className="container">
      <div className="select" >
        <h1>Weather API </h1>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={countryInput}
            onChange={handleChange}
          >
            <MenuItem value={region}>
              <em>{region}</em>
            </MenuItem>
            {country.cities && (
              country.cities.map((item , index) => (
                <MenuItem key={index} value={item} >{item}</MenuItem>
              )))
            }
          </Select>
        </FormControl>
      </div>
      <div className="App">
        {weather.current && (
          weather.forecast.forecastday.map((day) => (
            <Card
            date={day.date}
            text={day.day.condition.text}
            icon={day.day.condition.icon}
            maxtemp={day.day.maxtemp_c} 
            mintemp={day.day.mintemp_c} 
            avgtemp={day.day.avgtemp_c} 
            location={weather.location.region}
            url ={day.date_epoch}
              />
          )))}
      </div>
      </div>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
