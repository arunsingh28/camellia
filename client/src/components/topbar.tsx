import { APP_NAME, schoolName, schoolLogo } from '@/constants';
import { Drawer } from 'antd';
import {
    ChevronDownIcon,
    PanelTopClose,
    PanelTopOpen,
} from 'lucide-react';
import {
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { useState } from 'react';
import SettingComponent from './settings';

import { useSidebar } from '@/context/navToggler';
import { ProfileMenu } from '@/utils/menu';
import { cn } from '@/utils/util';

const topbar = () => {
    const [open, setOpen] = useState(false);
    const { isOpen, toggleSidebar } = useSidebar();
    return (
        <div className="py-1 z-10 bg-gradient-to-r from-blue-100/20 to-purple-100">
            <div className="flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                    <img src={schoolLogo} className="w-10 h-10" />
                    <h1 className="text-md font-[600] font-roboto text-gray-700">
                        {schoolName}{' '}
                        <pre className="text-xs text-gray-500">
                            By {APP_NAME}
                        </pre>
                    </h1>
                    {!isOpen ? (
                        <PanelTopClose
                            size={25}
                            className="rotate-90 ml-3 cursor-pointer hover:text-gray-800"
                            onClick={toggleSidebar}
                            strokeWidth={1.3}
                        />
                    ) : (
                        <PanelTopOpen
                            size={25}
                            className="rotate-90 ml-3 cursor-pointer hover:text-gray-800"
                            onClick={toggleSidebar}
                            strokeWidth={1.3}
                        />
                    )}
                </div>
                <div className="flex items-center gap-5">
                   
                    <Status />
                    <div className="w-[1px] h-[30px] bg-primary" />
                    <ProfileSettings />
                </div>
            </div>
            <Drawer open={open} onClose={() => setOpen(false)} size="large">
                <SettingComponent />
            </Drawer>
        </div>
    );
};

export default topbar;

const ProfileSettings = () => {
    return (
        <Popover className="group">
            <PopoverButton>
                <div className="flex items-center gap-3 hover:bg-primary/10 px-2 py-1 rounded-lg cursor-pointer">
                    <img
                        src={
                            'https://images.pexels.com/photos/30148955/pexels-photo-30148955/free-photo-of-thoughtful-woman-posing-by-window-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                        }
                        className="w-10 h-10 rounded-full object-cover object-center"
                    />
                    <div className="flex flex-col items-start">
                        <p className="text-sm font-[500] font-roboto text-gray-700">
                            Arun Pratap Singh
                        </p>
                        <p className="text-xs font-roboto text-gray-500">
                            +91 7983613144
                        </p>
                    </div>
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                </div>
                <ProfileSettingsPopover />
            </PopoverButton>
        </Popover>
    );
};

const Status = () => {
    return (
        <div className="flex items-center gap-2 border py-[5px] px-4 rounded-lg bg-green-100 border-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <p className="text-sm font-[500] font-roboto text-green-700">
                Active
            </p>
        </div>
    );
};

function ProfileSettingsPopover() {
    return (
        <PopoverPanel
            transition
            anchor="bottom start"
            className="flex flex-col origin-top bg-white w-[210px] px-[10px] py-3 mt-2 rounded-md shadow-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            {ProfileMenu.map((item) => {
                return (
                    <div
                        key={item.title}
                        className={cn(
                            'flex p-2 rounded-md cursor-pointer hover:bg-gray-100 items-center gap-2',
                            item.title.toLowerCase() === 'logout' &&
                                'hover:bg-red-100',
                        )}
                    >
                        <item.icon size="18" className={cn(item.title.toLowerCase() === 'logout' && 'text-red-600')}/>
                        <p
                            className={cn(
                                'text-sm text-gray-700',
                                item.title.toLowerCase() === 'logout' &&
                                    'text-red-600',
                            )}
                        >
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </PopoverPanel>
    );
}
