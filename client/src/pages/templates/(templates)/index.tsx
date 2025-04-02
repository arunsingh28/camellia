import Fallback from '@/components/fallback';
import { paths } from '@/router/path';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PhoneLayout from './phoneLayout';

type Category = 'marketing' | 'utility' | 'authentication';

const Marketing = React.lazy(() => import('./marketing'));
const Utility = React.lazy(() => import('./utility'));
const Authentication = React.lazy(() => import('./authentication'));

const components = {
    marketing: Marketing,
    utility: Utility,
    authentication: Authentication,
};

const Index = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const category = location.pathname.split('/').pop() as Category;

    const validCategories: Category[] = [
        'marketing',
        'utility',
        'authentication',
    ];

    React.useEffect(() => {
        if (
            !validCategories.includes(category) ||
            category === undefined ||
            category === null
        ) {
            navigate(paths.APP.TEMPLATES.INDEX, { replace: true });
        }
    }, [category, navigate]);

    const renderComponent = (): React.ReactNode => {
        switch (category) {
               case 'marketing':
                    return <components.marketing />;
                case 'utility':
                    return <components.utility />;
                case 'authentication':
                    return <components.authentication />;
                default:
                    return null;  
        }
    };

    return (
        <React.Suspense fallback={<Fallback/>}>
           <div className='flex flex-col md:flex-row w-full h-full'>
            <div className='w-full'>{renderComponent()}</div>
            <PhoneLayout />
           </div> 
        </React.Suspense>
    );
};

export default Index;
