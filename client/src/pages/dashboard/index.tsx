import Statics from "./components/Statics";
import { UsersIcon } from "lucide-react";

import {} from 'antd'

function Home() {
    return (
        <div className="px-2 h-full translate-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    [
                        {
                        icon: UsersIcon,
                        title: 'Total Students',
                        value: '100',
                    },
                    {
                        icon: UsersIcon,
                        title: 'Total Teachers',
                        value: '100',
                    },
                    {
                        icon: UsersIcon,
                        title: 'Total Messages Sent',
                        value: '1000',
                        prefix: 'SMS',
                    },
                    {
                        icon: UsersIcon,
                        title: 'Total Campaigns',
                        value: '10',
                    },
                    
                ].map((item) => (
                    <Statics key={item.title} {...item} />
                ))
                }
            </div>
        </div>
    );
}

export default Home;
