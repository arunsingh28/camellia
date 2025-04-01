import { RouteObject } from 'react-router-dom';
import React, { lazy } from 'react';
import { paths } from './path';

import Fallback from '@/components/fallback';

const TemplateLayout = lazy(() => import('@/pages/templates/layout'));
const AppLayout = lazy(() => import('@/layouts/app.layout'));

const Home = lazy(() => import('@/pages/dashboard'));
const BillingUsage = lazy(() => import('@/pages/billing'));
const MasterData = lazy(() => import('@/pages/master-data'));
const Students = lazy(() => import('@/pages/students'));
const Teachers = lazy(() => import('@/pages/teachers'));
const Templates = lazy(() => import('@/pages/templates'));

const DynamicTemplate = lazy(() => import('@/pages/templates/(templates)/index'));

export const routes: RouteObject[] = [
    {
        path: paths.APP.DASHBOARD,
        element: (
            <React.Suspense fallback={<Fallback/>}>
                <AppLayout />
            </React.Suspense>
        ),
        children: [
            {
                index: true,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <Home />
                    </React.Suspense>
                ),
            },
            {
                path: paths.APP.BILLING_USAGE,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <BillingUsage />
                    </React.Suspense>
                ),
            },
            {
                path: paths.APP.MASTER_DATA.INDEX,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <MasterData />
                    </React.Suspense>
                ),
            },
            {
                path: paths.APP.STUDENTS.INDEX,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <Students />
                    </React.Suspense>
                ),
            },
            {
                path: paths.APP.TEACHERS.INDEX,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <Teachers />
                    </React.Suspense>
                ),
            },
            {
                path: paths.APP.TEMPLATES.INDEX,
                element: (
                    <React.Suspense fallback={<Fallback/>}>
                        <TemplateLayout />
                    </React.Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <React.Suspense fallback={<Fallback/>}>
                                <Templates />
                            </React.Suspense>
                        ),
                    },
                    {
                        path: `${paths.APP.TEMPLATES.CREATE}/*`,
                        element: (
                            <React.Suspense fallback={<Fallback/>}>
                                <DynamicTemplate />
                            </React.Suspense>
                        ),
                    },
                ],
            },
        ],
    },
];
