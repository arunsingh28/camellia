import Navbar from '@/components/navbar';
import Topbar from '@/components/topbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <React.Fragment>
            <div className="font-roboto">
                <Topbar />
                <div className="flex bg-background-light h-[calc(100vh-57px)]">
                    <Navbar />
                    <div className="overflow-auto w-full bg-background-light2 rounded-t-sm p-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppLayout;
