import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

const theme = createTheme({
    cursorType: 'pointer',
    white: '#f7f5fa',
    black: '#05000d',
    fontFamily: 'Metropolis, sans-serif',
});

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <App />
    </MantineProvider>
);
