import { Typography, Tabs, Button, Table } from 'antd';
import type { TabsProps } from 'antd';
import {
    MessageCircle,
    Sigma,
    DraftingCompass,
    Hourglass,
    CheckCheck,
    TriangleAlert,
    MessageCirclePlus,
} from 'lucide-react';

import { tableItems } from './tabs/allTable';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: (
            <span className="flex items-center gap-2">
                <Sigma size={20} /> All
            </span>
        ),
        
        children: <Table
        columns={tableItems}
        dataSource={[
            {
                key: '1',
                name: 'welcome_message',
                category: 'UTILITY',
                status: 'Approved',
                type: 'TEXT',
                timestamp: '10 Feb 2025',
            },
        ]}
    />
    },
    {
        key: '2',
        label: (
            <span className="flex items-center gap-2">
                <DraftingCompass size={20} /> Draft
            </span>
        ),
        children: <Table columns={tableItems} />,
    },
    {
        key: '3',
        label: (
            <span className="flex items-center gap-2">
                <Hourglass size={20} />
                Pending
            </span>
        ),
        children: <Table columns={tableItems} />,
    },
    {
        key: '4',
        label: (
            <span className="flex items-center gap-2">
                <CheckCheck size={20} />
                Approved
            </span>
        ),
        children: (
            <Table
                columns={tableItems}
                dataSource={[
                    {
                        key: '1',
                        name: 'welcome_message',
                        category: 'UTILITY',
                        status: 'Approved',
                        type: 'TEXT',
                        timestamp: '10 Feb 2025',
                    },
                ]}
            />
        ),
    },
    {
        key: '5',
        label: (
            <span className="flex items-center gap-2">
                <TriangleAlert size={20} />
                Action Required
            </span>
        ),
        children: <Table columns={tableItems} />,
    },
];

const Messages = () => {
    return (
        <div className="p-2">
            <div className="flex items-center justify-between">
                <Typography.Title
                    level={3}
                    className="!text-gray-700 flex items-center gap-1"
                >
                    <MessageCircle size={24} />
                    Messages
                </Typography.Title>
                <Button
                    className="bg-primary text-gray-50 hover:!bg-primary/90 hover:!text-white hover:!border-primary"
                    icon={<MessageCirclePlus size={20} />}
                >
                    New Message
                </Button>
            </div>
            <Tabs defaultActiveKey="1" tabBarStyle={{
                borderBottom: '1px solid #c0c0e8',
               
            }} items={items} tabBarGutter={50} />
        </div>
    );
};

export default Messages;
