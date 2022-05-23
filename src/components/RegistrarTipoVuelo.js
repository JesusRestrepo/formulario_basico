import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

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