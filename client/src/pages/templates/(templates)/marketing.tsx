import LabeldInput from '@/components/ui/Input';
import { Select, Tooltip, Input } from 'antd';
import { InfoIcon } from 'lucide-react';

const marketing = () => {
    return (
        <div className="px-5">
            <div className="flex flex-col gap-4">
                <div className="w-full bg-white py-5 px-4 rounded-lg border-2 border-[#E0E0E0]">
                    <h2 className="text-lg font-semibold">
                        Template name and language
                    </h2>
                    <div className="flex py-2 w-full justify-between items-center gap-4">
                        <LabeldInput
                            label="Name your template"
                            placeholder="Enter template name"
                            className="w-[600px] h-[40px] rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            allowClear
                            showCount
                            count={{
                                max: 512,
                            }}
                            size="large"
                        />
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-800">
                                Select language
                            </label>
                            <Select
                                placeholder="Select template type"
                                onChange={(value) => console.log(value)}
                                allowClear
                                className="h-[40px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                <Select.Option value="1">
                                    Template 1
                                </Select.Option>
                                <Select.Option value="2">
                                    Template 2
                                </Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-5 px-4 rounded-lg border-2 border-[#E0E0E0]">
                    <h2 className="text-lg font-semibold">Template content</h2>
                    <p className="text-sm text-gray-500">
                        Fill in the header, body and footer sections of your
                        template.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-full mt-2">
                            <label className="text-sm text-gray-800">
                                Variable{' '}
                                <Tooltip
                                    color="white"
                                    title={
                                        <p
                                            className="text-sm text-gray-800"
                                            dangerouslySetInnerHTML={{
                                                __html: `Variables are placeholders that are used to dynamically insert specific information or data into your template. You can insert either a name or number as a variable. <br/>
                            Examples: <br />
                            <ul>
                                <li> Name: {{order_id}} </li>
                                <li>Number: {{1}}</li>
                            </ul>
                            `,
                                            }}
                                        />
                                    }
                                >
                                    <InfoIcon
                                        className="inline-block ml-1"
                                        size={16}
                                    />
                                </Tooltip>
                            </label>
                            <Select
                                placeholder="Select variable type"
                                onChange={(value) => console.log(value)}
                                allowClear
                                value={'NUMBER'}
                                className="h-[40px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                <Select.Option value="NUMBER">
                                    Number
                                </Select.Option>
                                <Select.Option value="VALUE">
                                    Value
                                </Select.Option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-800">
                                Header
                            </label>
                            <Select
                                placeholder="Select template type"
                                onChange={(value) => console.log(value)}
                                allowClear
                                className="h-[40px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                <Select.Option value="1">None</Select.Option>
                                <Select.Option value="2">
                                    Template 2
                                </Select.Option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-800">
                                Body
                            </label>
                            <Input.TextArea
                                placeholder="Enter template body"
                                className="h-[100px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                                allowClear
                                showCount
                                count={{
                                    max: 1024,
                                }}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default marketing;
