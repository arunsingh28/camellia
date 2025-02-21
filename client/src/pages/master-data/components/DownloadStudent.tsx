import { List, Typography, Button } from 'antd';
import { Download } from 'lucide-react';
export const DownloadStudentRecord = () => {
    return (
        <div>
            <Typography.Paragraph className='!text-gray-600 text-sm'>
                Select the class (each class has all the sections) you want to download the student record for .
            </Typography.Paragraph>
            <List
                dataSource={[
                    {
                        name: 'All Classes',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 1',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 2',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 3',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 4',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 5',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 6',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 7',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 8',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 9',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 10',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 11',
                        id: '1234567890',
                    },
                    {
                        name: 'Class 12',
                        id: '1234567890',
                    },
                ]}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text>{item.name}</Typography.Text>
                        <Button icon={<Download size={18} />} className="hover:!border-primary hover:!text-primary" type="link">Download</Button>
                    </List.Item>
                )}
            />
        </div>
    );
};
