import { Button, Typography, Dropdown, Space } from 'antd';
import {
    Database,
    UserIcon,
    GraduationCap,
    ChevronDown,
    Plus,
    Pencil,
    Trash,
    Upload,
    Download,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Statics from '@/pages/dashboard/components/Statics';
import { paths } from '@/router/path';

import type { MenuProps } from 'antd';

const studentItems: MenuProps['items'] = [
    {
        key: '1',
        label: 'Student Data',
        disabled: false,
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: 'Add New Student Data',
        icon: <Plus size={18} />,
    },
    {
        key: '3',
        label: 'Edit Existing Student Data',
        icon: <Pencil size={18} />,
    },
    {
        key: '4',
        label: 'Delete Student Data',
        icon: <Trash size={18} />,
        className: '!text-red-700',
    },
];

const MasterData = () => {
    return (
        <div className="p-2">
            <div>
                <Typography.Title
                    level={3}
                    className="!text-gray-700 flex items-center gap-1"
                >
                    <Database />
                    Master Records
                </Typography.Title>
            </div>
            <div className="grid grid-cols-5 flex-wrap gap-4 bg-background-light rounded-xl px-4 py-5 my-5">
                <Link to={paths.APP.STUDENTS.INDEX}>
                    <Statics
                        icon={GraduationCap}
                        title="Total Students"
                        value="834"
                        prefix=""
                        className="shadow-md"
                        postfix="24% then last month"
                    />
                </Link>
                <Link to={paths.APP.TEACHERS.INDEX}>
                    <Statics
                        icon={UserIcon}
                        title="Total Teachers"
                        value="52"
                        prefix=""
                        className="shadow-md"
                    />
                </Link>
                {/* <Link to={paths.APP.STAFF.INDEX}>
                    <Statics
                        icon={Users}
                        title="Total Staff"
                        value="5"
                        prefix=""
                        className="shadow-md"
                    />
                </Link> */}
            </div>
            <div>
                <Typography.Paragraph className="!text-primary uppercase">
                    Create New Data{' '}
                    <span className="italic text-gray-500">or</span> Edit Data
                </Typography.Paragraph>

                <div className="flex gap-4">
                    <div className="w-[500px] px-3 py-2 border rounded-lg bg-white shadow-md">
                        <Typography.Title level={5}>Teacher Record</Typography.Title>
                        <Typography.Paragraph className="!text-gray-600">
                            download template and upload bulk teacher record don't change the column name and format.
                        </Typography.Paragraph>
                        <Space>
                           <Button className='hover:!border-primary hover:!text-primary' icon={<Upload size={18} />} classNames={{ icon: 'mt-1.5' }}>Upload Bulk Teacher Record</Button>
                           <Button className='hover:!border-primary hover:!text-primary' icon={<Download size={18} />} classNames={{ icon: 'mt-1.5' }}>Download Template</Button>
                        </Space>
                    </div>
                    <div className="w-[500px] px-3 py-2 border rounded-lg bg-white shadow-md">
                        <Typography.Title level={5}>Upload Bulk Student Record</Typography.Title>
                        <Typography.Paragraph className="!text-gray-600"> 
                            download template and upload bulk student record don't change the column name and format.
                        </Typography.Paragraph>
                          <Space>
                          <Button className='hover:!border-primary hover:!text-primary'
                            icon={<Upload size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                                Upload Bulk Student Record
                            </Button>
                            <Button className='hover:!border-primary hover:!text-primary'
                            icon={<Download size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                               Download Template
                            </Button>
                     
                          </Space>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterData;
