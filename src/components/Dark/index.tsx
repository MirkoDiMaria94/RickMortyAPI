import React, { useState } from 'react';
import {
  Paper,
  Switch,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '5vh' }}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  );
};

export default Dark;