import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'

const RegistrarMiembros = () => {

    const [datos, setDatos] = useState({
        CodigoMiembros:'',
        Cargo:'',
        NombreMiembros:''
    })

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Codigo miembro: " + datos.CodigoMiembros + " Cargo: " + datos.Cargo + " Nombre miembro: " + datos.NombreMiembros);
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/miembros',
            headers: { 'Content-Type': 'application/json' },
            data:{
                CodigoMiembros: datos.CodigoMiembros,
                Cargo: datos.Cargo,
                NombreMiembros: datos.NombreMiembros
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
                name='CodigoMiembros'
                id="filled-basic" 
                label="Código del miembro" 
                variant="filled" 
                onChange={handleChange}
                type='number'
            />
            <TextField 
                required
                name='Cargo'
                id="filled-basic" 
                label="Cargo" 
                variant="filled" 
                onChange={handleChange}
                type='text'
            />  
            <TextField 
                required
                name='NombreMiembros'
                id="filled-basic" 
                label="Nombre de los miembros" 
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

export default RegistrarMiembros