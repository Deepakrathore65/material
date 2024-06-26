import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox() {

let [city, setCity] = useState("");

let handleChange = (event) => {
    setCity(event.target.value)
}

let handleSubmit = (event) => {
  event.preventDefault();
  console.log(city)
  setCity("");
}


    return( 
        <div>
        <h3>Search fot the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined"
         onChange={handleChange} />
        <br></br><br></br>
        <Button variant="contained" type='submit'>Search</Button>
        </form>
        <p></p>
        </div>
        )
}