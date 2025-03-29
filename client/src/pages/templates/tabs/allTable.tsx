import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Star, Copy, Trash } from 'lucide-react';

interface DataType {
    key: string;
    name: string;
    category: string;
    status: string;
    type: string;
    timestamp: string;
}

export const tableItems: TableProps<DataType>['columns'] = [
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
    },
    {
        key: 'category',
        title: 'Category',
        dataIndex: 'category',
    },
    {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',
        render: (text) => {
            return (
                <span
                    className={`px-2 py-1 text-xs rounded-full ${
                        text?.toLowerCase() === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                    }`}
                >
                    {text}
                </span>
            );
        },
    },
    {
        key: 'type',
        title: 'Type',
        dataIndex: 'type',
    },
    {
        key: 'timestamp',
        title: 'Timestamp',
        dataIndex: 'timestamp',
    },
    {
        key: 'actions',
        title: 'Actions',
        render: () => (
            <div className="flex items-center gap-4">
                <Star size={20} />
                <Copy size={20} />
                <Trash size={20} />
            </div>
        ),
    },
];

const AllTable = () => {
    return (
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
            pagination={false}
            rowKey="key"
        />
    );
};

export default AllTable;
