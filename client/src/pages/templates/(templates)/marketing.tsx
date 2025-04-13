import LabeldInput from '@/components/ui/Input';
import useModal from '@/hooks/useModal';
import { Select, Tooltip, Input, Button, Popover } from 'antd';
import { InfoIcon, Plus } from 'lucide-react';

const marketing = () => {
    const { isOpen, toggle } = useModal();

    return (
        <div className="px-5">
            <div className="flex flex-col gap-4">
                <div className="w-full bg-white py-5 px-4 rounded-lg border-2 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-800">
                        Template name and language
                    </h2>
                    <div className="flex py-2 w-full justify-between items-center gap-4">
                        <LabeldInput
                            label="Name your template"
                            placeholder="Enter template name"
                            className="w-[600px] h-[35px] rounded-lg focus:border-primary hover:border-primary focus:outline-none"
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
                                placeholder="Select language"
                                onChange={(value) => console.log(value)}
                                allowClear
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                <Select.Option value="en">
                                    English
                                </Select.Option>
                                <Select.Option value="en_us">
                                    English US
                                </Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-5 px-4 rounded-lg border-2 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-800">
                        Template content
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
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
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
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
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
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
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-800">
                                Footer
                            </label>
                            <Input
                                placeholder="Enter text"
                                className="w-full h-[35px] rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                                allowClear
                                showCount
                                count={{
                                    max: 60,
                                }}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-5 px-4 rounded-lg border-2 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-800">
                        Buttons{' '}
                        <span className="text-sm text-gray-600 font-normal">
                            Optional
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Create buttons that let customers respond to your
                        message or take action. You can add up to ten buttons.
                        If you add more than three buttons, they will appear in
                        a list.
                    </p>
                    <div className="mt-2">
                        <Popover
                            onOpenChange={toggle}
                            open={isOpen}
                            className="group"
                            content={<Buttons />}
                        >
                            <Button
                                className={
                                    isOpen
                                        ? 'focus:outline-none border-primary text-primary hover:!text-primary hover:!border-primary'
                                        : ''
                                }
                                onClick={toggle}
                                icon={<Plus size={20} className="mt-1" />}
                            >
                                Add Buttons
                            </Button>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default marketing;

const Buttons = () => {
    return (
        <div>
            <div>
                <h4 className="font-semibold pt-1 pb-3 text-sm">
                    Quick reply buttons
                </h4>
                {[
                    { title: 'Marketing opt-out', remark: 'Recommended' },
                    { title: 'Custom' },
                ].map((item) => {
                    return (
                        <div className="hover:bg-gray-100 py-1 px-2 rounded-md mb-1">
                            <p className="text-gray-700">{item.title}</p>
                            {item?.remark && (
                                <p className="text-[12px] text-gray-700">
                                    {item.remark}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
            <div>
                <h4 className="font-semibold pt-1 pb-3 text-sm">
                    Call-to-action buttons
                </h4>
                {[
                    { title: 'Visit website', remark: '2 buttons maximum' },
                    { title: 'Call Phone Number', remark: '1 button maximum' },
                    { title: 'Copy offer code', remark: '1 button maximum' },
                ].map((item) => {
                    return (
                        <div className="hover:bg-gray-100 py-1 px-2 rounded-md mb-1">
                            <p className="text-gray-700">{item.title}</p>
                            {item?.remark && (
                                <p className="text-[12px] text-gray-700">
                                    {item.remark}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
