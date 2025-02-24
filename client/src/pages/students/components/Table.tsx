import {
    Button,
    Checkbox,
    Input,
    Modal,
    Space,
    Table,
    TableProps,
    Tabs,
} from 'antd';
import { Archive, Eye, Pencil, Search } from 'lucide-react';
import { useState, useRef } from 'react';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { InputRef, TableColumnType, TabsProps } from 'antd';
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
    // Additional details not shown in the table
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    guardianInfo: {
        father: {
            name: string;
            occupation: string;
            phone: string;
            email: string;
        };
        mother: {
            name: string;
            occupation: string;
            phone: string;
            email: string;
        };
    };
    academicInfo: {
        previousSchool: string;
        enrollmentDate: string;
        currentGPA: number;
        achievements: string[];
    };
    medicalInfo: {
        bloodGroup: string;
        allergies: string[];
        medicalConditions: string[];
        emergencyContact: string;
    };
    feesInfo: {
        lastPaid: string;
        amountPaid: number;
        pendingAmount: number;
        dueDate: string;
        paymentHistory: Array<{
            date: string;
            amount: number;
            receipt: string;
        }>;
    };
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '123 School Lane',
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            postalCode: '226001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Rajendra Singh',
                occupation: 'Government Officer',
                phone: '9876543210',
                email: 'rajendra.singh@example.com',
            },
            mother: {
                name: 'Meena Singh',
                occupation: 'Teacher',
                phone: '9876543211',
                email: 'meena.singh@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Little Flowers Primary School',
            enrollmentDate: '2023-04-15',
            currentGPA: 3.8,
            achievements: [
                'First in Mathematics Competition',
                'Best in Art Exhibition',
            ],
        },
        medicalInfo: {
            bloodGroup: 'A+',
            allergies: ['Peanuts', 'Dust'],
            medicalConditions: ['Mild Asthma'],
            emergencyContact: '9876543200',
        },
        feesInfo: {
            lastPaid: '2024-01-15',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-15',
            paymentHistory: [
                {
                    date: '2023-07-15',
                    amount: 25000,
                    receipt: 'RCP2023001',
                },
                {
                    date: '2024-01-15',
                    amount: 25000,
                    receipt: 'RCP2024001',
                },
            ],
        },
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
        // Additional details
        address: {
            street: '456 River Road',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            postalCode: '208001',
            country: 'India',
        },
        guardianInfo: {
            father: {
                name: 'Robert Smith',
                occupation: 'Business Owner',
                phone: '9876543220',
                email: 'robert.smith@example.com',
            },
            mother: {
                name: 'Sarah Smith',
                occupation: 'Doctor',
                phone: '9876543221',
                email: 'sarah.smith@example.com',
            },
        },
        academicInfo: {
            previousSchool: 'Greenwood Elementary',
            enrollmentDate: '2023-04-10',
            currentGPA: 3.9,
            achievements: ['Science Fair Winner', 'School Quiz Champion'],
        },
        medicalInfo: {
            bloodGroup: 'O-',
            allergies: ['None'],
            medicalConditions: ['None'],
            emergencyContact: '9876543222',
        },
        feesInfo: {
            lastPaid: '2024-01-20',
            amountPaid: 25000,
            pendingAmount: 0,
            dueDate: '2024-07-20',
            paymentHistory: [
                {
                    date: '2023-07-20',
                    amount: 25000,
                    receipt: 'RCP2023002',
                },
                {
                    date: '2024-01-20',
                    amount: 25000,
                    receipt: 'RCP2024002',
                },
            ],
        },
    },
];

type DataIndex = keyof DataType;

const TableComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<DataType | null>(
        null,
    );

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

    const showStudentDetails = (student: DataType) => {
        setSelectedStudent(student);
        setIsViewModalVisible(true);
    };

    const closeStudentDetails = () => {
        setIsViewModalVisible(false);
        setSelectedStudent(null);
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
            <Search
                size={16}
                style={{ color: filtered ? '#1677ff' : undefined }}
            />
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
            key: 'checkbox',
            render: () => {
                return <Checkbox />;
            },
            fixed: 'left',
        },
        {
            title: 'Addmission No',
            dataIndex: 'addmission_no',
            key: 'addmission_no',
            fixed: 'left',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            fixed: 'left',
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
            fixed: 'right',
            render: (_, record) => (
                <Space size={'small'}>
                    <Button
                        size="small"
                        icon={<Eye size={14} />}
                        className="hover:!border-primary hover:!text-primary"
                        onClick={() => showStudentDetails(record)}
                    >
                        View
                    </Button>
                    <Button
                        size="small"
                        icon={<Pencil size={14} />}
                        className="hover:!border-primary hover:!text-primary"
                    >
                        Edit
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

    // Style definitions for the detail sections
    const detailItemStyle = {
        marginBottom: '12px',
        paddingBottom: '8px',
    };

    const sectionStyle = {
        marginBottom: '24px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        color: '#333',
        marginRight: '8px',
        minWidth: '140px',
        display: 'inline-block',
    };

    const valueStyle = {
        color: '#666',
    };

    const sectionTitleStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #f0f0f0',
    };

    // Tab items for the modal
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Basic Info',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Name:</span>
                        <span style={valueStyle}>{selectedStudent.name}</span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Admission No:</span>
                        <span style={valueStyle}>
                            {selectedStudent.addmission_no}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Roll No:</span>
                        <span style={valueStyle}>
                            {selectedStudent.roll_no}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Class:</span>
                        <span style={valueStyle}>{selectedStudent.class}</span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Section:</span>
                        <span style={valueStyle}>
                            {selectedStudent.section}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Gender:</span>
                        <span style={valueStyle}>{selectedStudent.gender}</span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Date of Birth:</span>
                        <span style={valueStyle}>
                            {selectedStudent.dob} (
                            {new Date().getFullYear() -
                                new Date(
                                    selectedStudent.dob,
                                ).getFullYear()}{' '}
                            years)
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Email:</span>
                        <span style={valueStyle}>{selectedStudent.email}</span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Phone:</span>
                        <span style={valueStyle}>{selectedStudent.phone}</span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>House Name:</span>
                        <span style={valueStyle}>
                            {selectedStudent.house_name}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Address',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Street:</span>
                        <span style={valueStyle}>
                            {selectedStudent.address.street}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>City:</span>
                        <span style={valueStyle}>
                            {selectedStudent.address.city}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>State:</span>
                        <span style={valueStyle}>
                            {selectedStudent.address.state}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Postal Code:</span>
                        <span style={valueStyle}>
                            {selectedStudent.address.postalCode}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Country:</span>
                        <span style={valueStyle}>
                            {selectedStudent.address.country}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Guardian Info',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={sectionTitleStyle}>Father's Information</div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Name:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.father.name}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Occupation:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.father.occupation}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Phone:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.father.phone}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Email:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.father.email}
                        </span>
                    </div>

                    <div style={sectionTitleStyle}>Mother's Information</div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Name:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.mother.name}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Occupation:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.mother.occupation}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Phone:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.mother.phone}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Email:</span>
                        <span style={valueStyle}>
                            {selectedStudent.guardianInfo.mother.email}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '4',
            label: 'Academic Info',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Previous School:</span>
                        <span style={valueStyle}>
                            {selectedStudent.academicInfo.previousSchool}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Enrollment Date:</span>
                        <span style={valueStyle}>
                            {selectedStudent.academicInfo.enrollmentDate}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Current GPA:</span>
                        <span style={valueStyle}>
                            {selectedStudent.academicInfo.currentGPA}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Achievements:</span>
                        <span style={valueStyle}>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                {selectedStudent.academicInfo.achievements.map(
                                    (achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ),
                                )}
                            </ul>
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '5',
            label: 'Medical Info',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Blood Group:</span>
                        <span style={valueStyle}>
                            {selectedStudent.medicalInfo.bloodGroup}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Allergies:</span>
                        <span style={valueStyle}>
                            {selectedStudent.medicalInfo.allergies.length > 0
                                ? selectedStudent.medicalInfo.allergies.join(
                                      ', ',
                                  )
                                : 'None'}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Medical Conditions:</span>
                        <span style={valueStyle}>
                            {selectedStudent.medicalInfo.medicalConditions
                                .length > 0
                                ? selectedStudent.medicalInfo.medicalConditions.join(
                                      ', ',
                                  )
                                : 'None'}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Emergency Contact:</span>
                        <span style={valueStyle}>
                            {selectedStudent.medicalInfo.emergencyContact}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            key: '6',
            label: 'Fee Details',
            children: selectedStudent && (
                <div style={sectionStyle}>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Last Paid Date:</span>
                        <span style={valueStyle}>
                            {selectedStudent.feesInfo.lastPaid}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Amount Paid:</span>
                        <span style={valueStyle}>
                            ₹
                            {selectedStudent.feesInfo.amountPaid.toLocaleString()}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Pending Amount:</span>
                        <span style={valueStyle}>
                            ₹
                            {selectedStudent.feesInfo.pendingAmount.toLocaleString()}
                        </span>
                    </div>
                    <div style={detailItemStyle}>
                        <span style={labelStyle}>Due Date:</span>
                        <span style={valueStyle}>
                            {selectedStudent.feesInfo.dueDate}
                        </span>
                    </div>

                    <div style={sectionTitleStyle}>Payment History</div>
                    <table
                        style={{ width: '100%', borderCollapse: 'collapse' }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <th
                                    style={{
                                        padding: '8px',
                                        textAlign: 'left',
                                        borderBottom: '1px solid #eee',
                                    }}
                                >
                                    Date
                                </th>
                                <th
                                    style={{
                                        padding: '8px',
                                        textAlign: 'right',
                                        borderBottom: '1px solid #eee',
                                    }}
                                >
                                    Amount
                                </th>
                                <th
                                    style={{
                                        padding: '8px',
                                        textAlign: 'left',
                                        borderBottom: '1px solid #eee',
                                    }}
                                >
                                    Receipt
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedStudent.feesInfo.paymentHistory.map(
                                (payment, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                padding: '8px',
                                                borderBottom: '1px solid #eee',
                                            }}
                                        >
                                            {payment.date}
                                        </td>
                                        <td
                                            style={{
                                                padding: '8px',
                                                textAlign: 'right',
                                                borderBottom: '1px solid #eee',
                                            }}
                                        >
                                            ₹{payment.amount.toLocaleString()}
                                        </td>
                                        <td
                                            style={{
                                                padding: '8px',
                                                borderBottom: '1px solid #eee',
                                            }}
                                        >
                                            {payment.receipt}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} 
            />

            <Modal
                title={
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        Student Details
                    </div>
                }
                open={isViewModalVisible}
                onCancel={closeStudentDetails}
                footer={[
                    <Button key="close" onClick={closeStudentDetails}>
                        Close
                    </Button>,
                ]}
                width={700}
            >
                {selectedStudent && <Tabs defaultActiveKey="1" items={items} />}
            </Modal>
        </div>
    );
};

export default TableComponent;
