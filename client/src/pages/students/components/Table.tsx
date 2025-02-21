import { Button, Checkbox, Input, Space, Table, TableProps } from 'antd';
import { Archive, Eye, Pencil, Search } from 'lucide-react';
import { useState, useRef } from 'react';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { InputRef, TableColumnType } from 'antd';
import Highlighter from 'react-highlight-words';

interface DataType {
    key: string;
    name: string;
    roll_no: number;
    addmission_no: number | string;
    class: string;
    section: string;
    gender: string;
    dob: string;
    email: string;
    phone: string;
    house_name: string;
}

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '1',
        name: 'Arun Pratap Singh',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
    {
        key: '2',
        name: 'Jane Smith',
        roll_no: 2,
        addmission_no: 'IPS9001',
        class: '2nd',
        section: 'B',
        gender: 'Female',
        dob: '1990-01-01',
        email: 'jane.smith@example.com',
        phone: '1234567890',
        house_name: 'Yamuna',
    },
    {
        key: '1',
        name: 'Rajesh Kumar Singh prajapati',
        roll_no: 1,
        addmission_no: 'IPS001',
        class: '1st',
        section: 'A',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'john.brown@example.com',
        phone: '1234567890',
        house_name: 'Ganga',
    },
];

type DataIndex = keyof DataType;

const TableComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };


    const getColumnSearchProps = (
        dataIndex: DataIndex,
    ): TableColumnType<DataType> => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(
                            selectedKeys as string[],
                            confirm,
                            dataIndex,
                        )
                    }
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(
                                selectedKeys as string[],
                                confirm,
                                dataIndex,
                            )
                        }
                        icon={<Search size={14} />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <Search size={16} style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        filterDropdownProps: {
            onOpenChange(open) {
                if (open) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    const columns: TableProps<DataType>['columns'] = [
        {
            title: <Checkbox />,
            key: "checkbox",
            render: (text) => {
                return <Checkbox />;
            },
        },
        {
            title: 'Addmission No',
            dataIndex: 'addmission_no',
            key: 'addmission_no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Roll No',
            dataIndex: 'roll_no',
            key: 'roll_no',
        },
        {
            title: 'Class',
            dataIndex: 'class',
            key: 'class',
            filters: [
                {
                    text: '1st',
                    value: '1st',
                },
                {
                    text: '2nd',
                    value: '2nd',
                },
                {
                    text: '3rd',
                    value: '3rd',
                },
            ],
            onFilter: (value, record) => record.class === value,
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'section',
            filters: [
                {
                    text: 'A',
                    value: 'A',
                },
                {
                    text: 'B',
                    value: 'B',
                },
                {
                    text: 'C',
                    value: 'C',
                },
            ],
            onFilter: (value, record) => record.section === value,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (text) => {
                return <span className="text-gray-500">{text}</span>;
            },
            filters: [
                {
                    text: 'Male',
                    value: 'Male',
                },
                {
                    text: 'Female',
                    value: 'Female',
                },
            ],
            onFilter: (value, record) => record.gender === value,
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
            render: (text) => {
                const age =
                    new Date().getFullYear() - new Date(text).getFullYear();
                return (
                    <span className="text-gray-500">
                        {text} ({age} years)
                    </span>
                );
            },
           
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => {
                return <span className="text-gray-500">{text}</span>;
            },
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => {
                return <span className="text-gray-500">{text}</span>;
            },
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'House Name',
            dataIndex: 'house_name',
            key: 'house_name',
            render: (text) => {
                return <span className="text-gray-500">{text}</span>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size={'small'}>
                    <Button
                        size="small"
                        icon={<Eye size={14} />}
                        className="hover:!border-primary hover:!text-primary"
                    >
                        View
                    </Button>
                    <Button
                        size="small"
                        danger
                        type="dashed"
                        icon={<Archive size={13} />}
                    >
                        Archive
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default TableComponent;
