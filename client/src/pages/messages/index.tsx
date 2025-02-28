import { Typography, Button, Table } from 'antd';
import {
    MessageCircle,
    Sigma,
    DraftingCompass,
    Hourglass,
    CheckCheck,
    TriangleAlert,
    MessageCirclePlus,
} from 'lucide-react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { tableItems } from './tabs/allTable';


const items = [
    {
        id: '1',
        label: 'All',
        icon: <Sigma size={18} />,
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
        id: '2',
        label: 'Draft',
        icon: <DraftingCompass size={18} />,
        children: <Table columns={tableItems} />,
    },
    {
        id: '3',
        label: 'Pending',
        icon: <Hourglass size={18} />,
        children: <Table columns={tableItems} />,
    },
    {
        id: '4',
        label: 'Approved',
        icon: <CheckCheck size={18} />,
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
        id: '5',
        label: '  Action Required',
        icon: <TriangleAlert size={18} />,
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
            <TabGroup>
                <TabList>
                    {items.map((tab) => (
                        <Tab key={tab.id} className="first:ml-0 mx-3">
                            {({ selected }) => (
                                <div
                                    className={`flex items-center gap-2 mt-4 ${
                                        selected
                                            ? 'text-primary border-b-2 border-primary px-2 transition-all duration-150 pb-1 text-sm'
                                            : 'text-gray-700 px-2 text-sm'
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </div>
                            )}
                        </Tab>
                    ))}
                </TabList>
                <div className='h-[1px] w-full bg-primary'/>
                <TabPanels className={"mt-5 transition-all"}>
                    {items.map((tab) => (
                        <TabPanel key={tab.id}>{tab.children}</TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </div>
    );
};

export default Messages;
