import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'

const RegistrarPilotos = () => {

    const [datos, setDatos] = useState({
        Codigo:'',
        Nombre:'',
        HorasVuelo:''
    })

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Codigo piloto: " + datos.Codigo + " Nombre: " + datos.Nombre + " Horas vuelo: " + datos.HorasVuelo);
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/pilotos',
            headers: { 'Content-Type': 'application/json' },
            data:{
                Codigo: datos.Codigo,
                Nombre: datos.Nombre,
                HorasVuelo: datos.HorasVuelo
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
                name='Codigo'
                id="filled-basic" 
                label="Código de piloto" 
                variant="filled" 
                onChange={handleChange}
                type='number'
            />
            <TextField 
                required
                name='Nombre'
                id="filled-basic" 
                label="Nombre piloto" 
                variant="filled" 
                onChange={handleChange}
                type='text'
            />  
            <TextField 
                required
                name='HorasVuelo'
                id="filled-basic" 
                label="Horas de vuelo" 
                variant="filled" 
                onChange={handleChange}
                type='number'
            />      
        </Box>
        <Button type='submit' className='button' variant='contained'>enviar</Button>
    </form>
    </>
  )
}

export default RegistrarPilotos