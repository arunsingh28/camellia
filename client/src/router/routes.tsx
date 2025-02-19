import { RouteObject } from 'react-router-dom';
import React, { lazy } from 'react';
import { paths } from './path';

const AppLayout = lazy(() => import('@/layouts/app.layout'));

const Home = lazy(() => import('@/pages/dashboard'));
const CreditScore = lazy(() => import('@/pages/credit-score'));
const MasterData = lazy(() => import('@/pages/master-data'));

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
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </React.Suspense>,
            },
            {
                path: paths.APP.BILLING_USAGE,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <CreditScore />
                </React.Suspense>,
            },
            {
                path: paths.APP.MASTER_DATA.INDEX,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <MasterData />
                </React.Suspense>,
            }
        ],
    },
];
