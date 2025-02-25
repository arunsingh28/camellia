import { RouteObject } from 'react-router-dom';
import React, { lazy } from 'react';
import { paths } from './path';

const AppLayout = lazy(() => import('@/layouts/app.layout'));

const Home = lazy(() => import('@/pages/dashboard'));
const BillingUsage = lazy(() => import('@/pages/billing'));
const MasterData = lazy(() => import('@/pages/master-data'));
const Students = lazy(() => import('@/pages/students'));
const Teachers = lazy(() => import('@/pages/teachers'));
const Messages = lazy(() => import('@/pages/messages'));

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
                    <BillingUsage />
                </React.Suspense>,
            },
            {
                path: paths.APP.MASTER_DATA.INDEX,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <MasterData />
                </React.Suspense>,
            },
            {
                path: paths.APP.STUDENTS.INDEX,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <Students />
                </React.Suspense>,
            },
            {
                path: paths.APP.TEACHERS.INDEX,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <Teachers />
                </React.Suspense>,
            },
            {
                path: paths.APP.MESSAGES.INDEX,
                element: <React.Suspense fallback={<div>Loading...</div>}>
                    <Messages />
                </React.Suspense>,
            }
        ],
    },
];
