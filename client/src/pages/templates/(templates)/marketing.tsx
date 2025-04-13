import LabeldInput from '@/components/ui/Input';
import useModal from '@/hooks/useModal';
import { Select, Tooltip, Input, Button, Popover, Alert } from 'antd';
import { InfoIcon, Plus } from 'lucide-react';
import React from 'react';

const marketing = () => {
    const { isOpen, toggle } = useModal();
    const [variables, setVariables] = React.useState<number[] | string[]>([]);
    const [variableError, setVariableError] = React.useState<boolean>(false);

    const handleBodyChanges = React.useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const matches = e.target.value.match(/{{\s*([a-zA-Z0-9_]+)\s*}}/g);
            if (matches) {
                const cleanedMatches = matches.map((m) =>
                    m.replace(/[{}]/g, '').trim(),
                );
                const uniqueVars = Array.from(new Set(cleanedMatches));
                if (cleanedMatches.length !== uniqueVars.length) {
                    setVariableError(true);
                } else{
                    setVariableError(false);
                }
                setVariables(uniqueVars);
            } else {
                setVariables([]);
                setVariableError(false);
            }
        },
        [],
    );

    return (
        <div className="px-5">
            <div className="flex flex-col gap-4">
                <div className="w-full bg-white py-5 px-4 rounded-lg border-1 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-700">
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
                            <label className="text-sm text-gray-700">
                                Select language
                            </label>
                            <Select
                                placeholder="Select language"
                                onChange={(value) => console.log(value)}
                                allowClear
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                {['English', 'English US'].map((item) => (
                                    <Select.Option value={item}>
                                        {item.charAt(0).toLocaleUpperCase() +
                                            item?.slice(1)?.toLocaleLowerCase()}
                                    </Select.Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-5 px-4 rounded-lg border-spacing-1 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-700">
                        Template content
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Fill in the header, body and footer sections of your
                        template.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-full mt-2">
                            <label className="text-sm text-gray-700">
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
                                defaultValue={'NUMBER'}
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                            >
                                {['NUMBER', 'VALUE'].map((item) => (
                                    <Select.Option value={item}>
                                        {item.charAt(0).toLocaleUpperCase() +
                                            item.slice(1).toLocaleLowerCase()}
                                    </Select.Option>
                                ))}
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-700">
                                Header
                            </label>
                            <Select
                                placeholder="Select template type"
                                onChange={(value) => console.log(value)}
                                allowClear
                                className="h-[35px] w-full rounded-lg focus:border-primary hover:border-primary focus:outline-none"
                                defaultValue={'NONE'}
                            >
                                {['NONE', 'TEXT', 'DOCUMENT', 'IMAGE'].map(
                                    (item) => (
                                        <Select.Option value={item}>
                                            {item
                                                .charAt(0)
                                                .toLocaleUpperCase() +
                                                item
                                                    .slice(1)
                                                    .toLocaleLowerCase()}
                                        </Select.Option>
                                    ),
                                )}
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-700">
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
                                onChange={handleBodyChanges}
                            />
                            {
                                variableError && <div className="text-sm text-gray-600 mt-4">
                                <Alert
                                    message={
                                        'This template contains too many variable parameters relative to the message length. You need to decrease the number of variable parameters or increase the message length.'
                                    }
                                    type="error"
                                    key="eror"
                                />
                            </div>
                            }
                            {
                               variables.length > 0 && (
                                <div className="flex flex-col gap-2 w-full my-3">
                                    <label className="text-sm text-gray-700">
                                    Samples for body content
                                    </label>
                                    <p className='text-sm text-gray-500'>To help us review your message template, please add an example for each variable in your body text. Do not use real customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of our services.</p>

                                    {
                                      variables.map(i => (
                                        <div key={i.toLocaleString()} className='flex items-end mt-2'>
                                            <span className='w-[200px] text-gray-600 text-sm'>{`{{${i}}}`}</span>
                                            <Input placeholder={`Enter sample value for ${i}`}/>
                                        </div>
                                      ))  
                                    }
                                </div>
                               ) 
                            }
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm text-gray-700">
                                Footer
                                <span className="text-[12px] text-gray-600 font-normal ml-5">
                                    Optional
                                </span>
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
                <div className="w-full bg-white py-5 px-4 rounded-lg border-1 border-[#E0E0E0]">
                    <h2 className="text-base font-semibold text-gray-700">
                        Buttons{' '}
                        <span className="text-[12px] text-gray-600 font-normal ml-5">
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

export default React.memo(marketing);

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
