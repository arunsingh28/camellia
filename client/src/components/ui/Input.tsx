import React from 'react';
import { Input } from 'antd';
import { InputProps } from "antd/es/input";

interface LabeldInputProps extends InputProps{
    label?: string;
}

const LabeldInput: React.FC<LabeldInputProps> = ({ label, ...props }) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="mb-2 text-sm text-gray-800">{label}</label>
            )}
            <Input
                className={`w-full rounded-lg border-2 border-[#E0E0E0] focus:border-primary hover:border-primary focus:outline-none ${props.className}`}
                {...{ ...props, size: undefined }}
            />
        </div>
    );
};

export default LabeldInput;
