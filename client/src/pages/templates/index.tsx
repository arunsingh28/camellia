import { Typography, Button, Table } from 'antd';
import {
    Sigma,
    DraftingCompass,
    Hourglass,
    CheckCheck,
    TriangleAlert,
    MessageCirclePlus,
    // Bell,
    // Key,
    // Megaphone,
    MessagesSquare,
} from 'lucide-react';
import {
    // DialogTitle,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react';
// import Modal from '@/components/modal';
import { useNavigate } from 'react-router-dom';

import { tableItems } from './tabs/allTable';

import { paths } from '@/router/path';

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
    const navigate = useNavigate();

    const redirecter = (type: string) => () => {
        close();
        navigate(`${paths.APP.TEMPLATES.CREATE}/${type}`);
    };

    return (
        <div className="p-2">
            <div className="flex items-center justify-between">
                <Typography.Title
                    level={3}
                    className="!text-gray-700 flex items-center gap-1"
                >
                    <MessagesSquare size={24} />
                    Templates
                </Typography.Title>
                <Button
                    type="primary"
                    icon={<MessageCirclePlus size={20} />}
                    onClick={redirecter('marketing')}
                >
                    New Template
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
                <div className="h-[1px] w-full bg-primary" />
                <TabPanels className={'mt-5 transition-all'}>
                    {items.map((tab) => (
                        <TabPanel key={tab.id}>{tab.children}</TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
            {/* <Modal
                isOpen={isOpen}
                onClose={close}
                key={'new_template_modal'}
                width="5xl"
            >
                <DialogTitle className="font-bold">
                    Create new message template
                </DialogTitle>
                <div className="grid grid-cols-3 flex-wrap gap-4">
                    <div className="border rounded-md p-2 flex flex-col justify-between">
                        <p className="text-sm">
                            Marketing is used for promotions or information
                            about your business, product or service, or any
                            message that isn't for utilityor authentication
                            purposes. E.G. welcome messages, newsletters,
                            offers, coupons, catelogues, new session start.
                        </p>
                        <Button
                            type="primary"
                            className="mt-5 w-full"
                            size="large"
                            icon={<Megaphone size={18} className="mt-1" />}
                            onClick={redirecter('marketing')}
                        >
                            Marketing
                        </Button>
                    </div>
                    <div className="border rounded-md p-2 flex flex-col justify-between">
                        <p className="text-sm">
                            Utility is used for transaction, account, order or
                            customer request E.g. order confirmations, acount
                            updated, receipts, appointment reminders, billing.
                            (Choose Marketing if you want to include promotion
                            in the Utility message.)
                        </p>
                        <Button
                            type="primary"
                            className="mt-5 w-full"
                            size="large"
                            icon={<Bell size={18} className="mt-1" />}
                            onClick={redirecter('utility')}
                        >
                            Utility
                        </Button>
                    </div>
                    <div className="border rounded-md p-2 flex flex-col justify-between">
                        <p className="text-sm">
                            Authentication is used for one-off password that
                            your students or teachers use to authenticate a
                            transation or login.
                        </p>
                        <Button
                            type="primary"
                            className=" mt-5 w-full"
                            size="large"
                            icon={<Key size={18} className="mt-1" />}
                            onClick={redirecter('authentication')}
                        >
                            Authentication
                        </Button>
                    </div>
                </div>
            </Modal> */}
        </div>
    );
};

export default Messages;
