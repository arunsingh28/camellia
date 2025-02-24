import { Tabs } from 'antd';
import { DataType } from './Table';
import type { TabsProps } from 'antd';

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

const Tab = ({ selectedStudent }: { selectedStudent: DataType }) => {
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
    return <Tabs defaultActiveKey="1" items={items} />;
};

export default Tab;
