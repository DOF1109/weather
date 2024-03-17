import { useState } from 'react';
import { Box, Container, TextField, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.API_WEATHER}&q=`

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    setLoading(true);
    try {
      if (city.trim() === "") throw {message: "Complete el campo ciudad"};
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weater App
      </Typography>
      <Box 
        sx={{ display: "grid", gap: 2 }}
        component="form"
        autoComplete="false"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <LoadingButton
          type='submit'
          variant='contained'
          loading={loading}
          loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize:"10px" }}
      >
        Powered by:{" "}
        <a 
          href="https://www.weatherapi.com"
          title="Weather API"
        >
          WeatherAPI.com
         </a>
      </Typography>
    </Container>
  );
}

export default App;
