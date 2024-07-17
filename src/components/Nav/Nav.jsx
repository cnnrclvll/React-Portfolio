import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Bio" sx={{ color: '#ACACAC' }} {...a11yProps(0)} />
          <Tab label="Portfolio" sx={{ color: '#ACACAC' }} {...a11yProps(1)} />
          <Tab label="Contact" sx={{ color: '#ACACAC' }} {...a11yProps(2)} />
          <Tab label="CV" sx={{ color: '#ACACAC' }} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Bio />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Portfolio />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Resume />
      </CustomTabPanel>
    </Box>
  );
}