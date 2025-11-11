import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '@/router';

import '@/styles/index.css';

import { SidebarProvider } from './context/navToggler';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <SidebarProvider>
                <Router />
            </SidebarProvider>
        </BrowserRouter>
    </StrictMode>,
);
