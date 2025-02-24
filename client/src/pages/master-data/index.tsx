import { Button, Typography, Space, Modal } from 'antd';
import {
    Database,
    UserIcon,
    GraduationCap,
    Upload,
    Download,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Statics from '@/pages/dashboard/components/Statics';
import { paths } from '@/router/path';
import { useState } from 'react';
import { DownloadTeacherRecord } from './components/DownloadTeachers';
import { DownloadStudentRecord } from './components/DownloadStudent';

const MasterData = () => {
    const [openTeacherRecord, setOpenTeacherRecord] = useState(false);
    const [openStudentRecord, setOpenStudentRecord] = useState(false);

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
            <div className="grid sm:grid-cols-3 grid-cols-1 xl:grid-cols-5 flex-wrap gap-4 bg-background-light rounded-xl px-4 py-5 my-5">
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
            </div>
            <div>
                <Typography.Paragraph className="!text-primary uppercase">
                    Import Data
                    <span className="italic text-gray-500">or</span> Edit Data
                </Typography.Paragraph>

                <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className=" px-3 py-2 border rounded-lg bg-white shadow-md">
                        <Typography.Title level={5}>
                            Teacher Record
                        </Typography.Title>
                        <Typography.Paragraph className="!text-gray-600">
                            download template and upload bulk teacher record
                            don't change the column name and format.
                        </Typography.Paragraph>
                        <Space className="flex items-start flex-col xl:flex-row gap-2">
                            <Button
                                className="hover:!border-primary hover:!text-primary"
                                icon={<Upload size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                                Upload Bulk Teacher Record
                            </Button>
                            <Button
                                className="hover:!border-primary hover:!text-primary"
                                icon={<Download size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                                Download Template
                            </Button>
                        </Space>
                    </div>
                    <div className="px-3 py-2 border rounded-lg bg-white shadow-md">
                        <Typography.Title level={5}>
                            Upload Bulk Student Record
                        </Typography.Title>
                        <Typography.Paragraph className="!text-gray-600">
                            download template and upload bulk student record
                            don't change the column name and format.
                        </Typography.Paragraph>
                        <Space className="flex flex-col xl:flex-row gap-2 items-start">
                            <Button
                                className="hover:!border-primary hover:!text-primary"
                                icon={<Upload size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                                Upload Bulk Student Record
                            </Button>
                            <Button
                                className="hover:!border-primary hover:!text-primary"
                                icon={<Download size={18} />}
                                classNames={{ icon: 'mt-1.5' }}
                            >
                                Download Template
                            </Button>
                        </Space>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Typography.Paragraph className="!text-primary uppercase">
                    export data
                </Typography.Paragraph>

                <div className="flex gap-4 flex-wrap">
                    <div
                        className="w-[400px] px-3 py-3 border rounded-lg bg-white shadow-md"
                        style={{
                            backgroundColor: '#e5e5f7',
                            opacity: 0.8,
                            backgroundImage:
                                'repeating-radial-gradient( circle at 0 50%, transparent 0, #f7e5f3 10px ), repeating-linear-gradient( #faa6d0, #741b47 )',
                        }}
                    >
                        <Typography.Title level={5}>
                            Teacher Record
                        </Typography.Title>
                        <Typography.Paragraph className="!text-gray-900 !font-bold">
                            Download the all the teacher records in excel format
                        </Typography.Paragraph>
                        <Button
                            className="hover:!border-primary hover:!text-primary my-2"
                            icon={<Download size={18} />}
                            classNames={{ icon: 'mt-1.5' }}
                            onClick={() => setOpenTeacherRecord(true)}
                        >
                            Download
                        </Button>
                    </div>
                    <div
                        className="w-[400px] px-3 py-3 border rounded-lg shadow-md"
                        style={{
                            backgroundColor: '#e5e5f7',
                            opacity: 0.8,
                            backgroundImage:
                                'repeating-radial-gradient( circle at 0 0%, transparent 0, #f7e5f3 10px ), repeating-linear-gradient( #faa6d0, #741b47 )',
                        }}
                    >
                        <Typography.Title level={5}>
                            Student Record
                        </Typography.Title>
                        <Typography.Paragraph className="!text-gray-900 !font-bold">
                            Download the all the student records in excel format
                        </Typography.Paragraph>

                        <Button
                            className="hover:!border-primary hover:!text-primary my-2"
                            icon={<Download size={18} />}
                            classNames={{ icon: 'mt-1.5' }}
                            onClick={() => setOpenStudentRecord(true)}
                        >
                            Download
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                open={openTeacherRecord}
                onCancel={() => setOpenTeacherRecord(false)}
                title="Download Teacher Record"
                okButtonProps={{ style: { display: 'none' } }}
                cancelText="Close"
            >
                <DownloadTeacherRecord />
            </Modal>
            <Modal
                open={openStudentRecord}
                onCancel={() => setOpenStudentRecord(false)}
                title="Download Student Record"
                okButtonProps={{ style: { display: 'none' } }}
                cancelText="Close"
            >
                <DownloadStudentRecord />
            </Modal>
        </div>
    );
};

export default MasterData;
