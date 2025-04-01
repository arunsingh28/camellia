import Fallback from '@/components/fallback';
import { paths } from '@/router/path';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Category = 'marketing' | 'utility' | 'authentication';

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
                return <div>Marketing Component</div>;
            case 'utility':
                return <div>Utility Component</div>;
            case 'authentication':
                return <div>Authentication Component</div>;
             default: return null   
        }
    };

    return (
        <React.Suspense fallback={<Fallback/>}>
            {renderComponent()}
        </React.Suspense>
    );
};

export default Index;
