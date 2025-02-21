
import { List, Typography, Button } from 'antd';
import { Download } from 'lucide-react';

export const DownloadTeacherRecord = () => {
    return (
            <List
                dataSource={[
                    {
                        name: "All teachers",
                        id: "1234567890",
                    },
                ]}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text>{item.name}</Typography.Text>
                        <Button icon={<Download size={18} />} className="hover:!border-primary hover:!text-primary" type="link">Download</Button>
                    </List.Item>
                )}
            />
    );
};
