import Navbar from '@/components/navbar';
import Topbar from '@/components/topbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <React.Fragment>
           <div className='h-screen'>
           <Topbar />
            <div className="flex bg-background-light">
                <Navbar />
                <div className="overflow-auto w-full h-[calc(100vh-57px)] bg-background-light2 border-t border-l rounded-t-sm p-2">
                    <Outlet />
                </div>
            </div>
           </div>
        </React.Fragment>
    );
};

export default AppLayout;
