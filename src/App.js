import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Resgistrar from './components/Resgistrar'

import './App.css'

const App = () => {

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
              <Tab label="Listar" value="1" />
              <Tab label="Registrar" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">listar</TabPanel>
          <TabPanel value="2"><Resgistrar /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default App;
