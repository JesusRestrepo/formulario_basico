import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import RegistrarAviones from './RegistrarAviones'
import RegistrarBase from './RegistrarBase'
import RegistrarFecha from './RegistrarFecha'
import RegistrarTipoVuelo from './RegistrarTipoVuelo'
import RegistrarMiembros from './RegistrarMiembros'
import RegistrarPilotos from './RegistrarPilotos'

const Resgistrar = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <Tab label="Aviones" value="1" />
              <Tab label="Base" value="2" />
              <Tab label="Fecha" value="3" />
              <Tab label="Tipo Vuelo" value="4" />
              <Tab label="Miembros" value="5" />
              <Tab label="Pilotos" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1"> <RegistrarAviones /> </TabPanel>
          <TabPanel value="2"> <RegistrarBase /> </TabPanel>
          <TabPanel value="3"> <RegistrarFecha /> </TabPanel>
          <TabPanel value="4"> <RegistrarTipoVuelo /> </TabPanel>
          <TabPanel value="5"> <RegistrarMiembros /> </TabPanel>
          <TabPanel value="6"> <RegistrarPilotos /> </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Resgistrar