import { RouteObject } from 'react-router-dom';
import React from 'react';

import Home from '@/pages/dashboard';
import AppLayout from '@/layouts/app.layout';
import CreditScore from '@/pages/credit-score';
import { paths } from './path';
export const routes: RouteObject[] = [
    {
        path: paths.APP.DASHBOARD,
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <AppLayout />
            </React.Suspense>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: paths.APP.BILLING_USAGE,
                element: <CreditScore   />,
            }
        ],
    },
];
