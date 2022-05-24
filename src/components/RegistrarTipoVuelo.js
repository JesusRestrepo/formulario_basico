import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'

const RegistrarTipoVuelo = () => {

    const [datos, setDatos] = useState({
        TipoVuelo:''
    })

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("tipo de vuelo: " + datos.TipoVuelo);
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/tipo-vuelo',
            headers: { 'Content-Type': 'application/json' },
            data:{
                TipoVuelo: datos.TipoVuelo
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                required
                name='TipoVuelo'
                id="filled-basic" 
                label="Tipo de vuelo" 
                variant="filled" 
                onChange={handleChange}
                type='text'
            />    
        </Box>
        <Button type='submit' className='button' variant='contained'>enviar</Button>
    </form>
    </>
  )
}

export default RegistrarTipoVuelo