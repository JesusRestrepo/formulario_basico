import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'

const RegistrarFecha = () => {

    const day = [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
            value: '5',
            label: '5',
        },
        {
            value: '6',
            label: '6',
        },
        {
            value: '7',
            label: '7',
        },
        {
            value: '8',
            label: '8',
          },{
            value: '9',
            label: '9',
          },{
            value: '10',
            label: '10',
          },{
            value: '11',
            label: '11',
          },{
            value: '12',
            label: '12',
          },{
            value: '13',
            label: '13',
          },{
            value: '14',
            label: '14',
          },{
            value: '15',
            label: '15',
          },{
            value: '16',
            label: '16',
          },{
            value: '17',
            label: '17',
          },{
            value: '18',
            label: '18',
          },{
            value: '19',
            label: '19',
          },{
            value: '20',
            label: '20',
          },{
            value: '21',
            label: '21',
          },{
            value: '22',
            label: '22',
          },{
            value: '23',
            label: '23',
          },{
            value: '24',
            label: '24',
          },{
            value: '25',
            label: '25',
          },{
            value: '26',
            label: '26',
          },{
            value: '27',
            label: '27',
          },{
            value: '28',
            label: '28',
          },{
            value: '29',
            label: '29',
          },{
            value: '30',
            label: '30',
          },{
            value: '31',
            label: '31',
          },
    ];

    const month  = [
        {
            value: '1',
            label: 'Enero',
        },
        {
            value: '2',
            label: 'Febrero',
        },
        {
            value: '3',
            label: 'Marzo',
        },
        {
            value: '4',
            label: 'Abril',
        },
        {
            value: '5',
            label: 'Mayo',
        },
        {
            value: '6',
            label: 'Junio',
        },
        {
            value: '7',
            label: 'Julio',
        },
        {
            value: '8',
            label: 'Agosto',
        },
        {
            value: '9',
            label: 'Septiembre',
        },
        {
            value: '10',
            label: 'octubre',
        },
        {
            value: '11',
            label: 'Noviembre',
        },
        {
            value: '12',
            label: 'Diciembre',
        },
      ]

      const franja = [
          {
              label:'Seleccione franja horaria',
          },
          {
              value: 'AM',
              label: 'AM',
          },
          {
              value: 'PM',
              label: 'PM',
          }
      ]

    const [dia, setdia] = useState('Seleccionar día');
    const [mes, setMes] = useState('seleccionar mes');
    const [datos, setDatos] = useState({
        año:''
    })
    const [franjas, setFranjas] = useState('Seleccione franja horaria');

    const handleChange = (event) => {
        setdia(event.target.value);
    }

    const handleChangeMes = (e) => {
        setMes(e.target.value);
    }

    const handleChangeAño = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const handleChangefranja = (e) => {
        setFranjas(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Día: " + dia);
        console.log("Mes: " + mes);
        console.log("Año: " + datos.año);
        console.log("Franja horaria: " + franjas);
        const options = {
          method: 'POST',
          url: 'http://localhost:5000/fecha',
          headers: { 'Content-Type': 'application/json' },
          data:{
              dia: dia,
              mes: mes,
              año: datos.año,
              franjas: franjas
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
            '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
            <TextField
            id="filled-select-currency-native"
            select
            label="Día"
            value={dia}
            onChange={handleChange}
            SelectProps={{
                native: true,
            }}
            variant="filled"
            >
            {day.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </TextField>
            </div>   
        </Box>

        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
            <TextField
            id="filled-select-currency-native"
            select
            label="Mes"
            value={mes}
            onChange={handleChangeMes}
            SelectProps={{
                native: true,
            }}
            variant="filled"
            >
            {month.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </TextField>
            </div>   
        </Box>
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
                name='año'
                id="filled-basic" 
                label="Año" 
                variant="filled" 
                onChange={handleChangeAño}
                type='Number'
            />    
        </Box>

        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
            <TextField
            id="filled-select-currency-native"
            select
            label="Franja horaria"
            value={franjas}
            onChange={handleChangefranja}
            SelectProps={{
                native: true,
            }}
            variant="filled"
            >
            {franja.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </TextField>
            </div>   
        </Box>
        <Button type='submit' className='button' variant='contained'>enviar</Button>
    </form>
    </>
  )
}

export default RegistrarFecha