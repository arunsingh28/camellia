import { APP_NAME, schoolName, schoolLogo } from "@/constants";
import { Button,Drawer } from "antd";
import {ChevronDownIcon, Settings} from "lucide-react"
import { useState } from "react";
import SettingComponent from "./settings";

const topbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="py-1 z-10 bg-gradient-to-r from-blue-100/20 to-purple-100">
            <div className="flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                <img src={schoolLogo} className="w-10 h-10"/>
                <h1 className="text-md font-[600] font-roboto text-gray-700">
                    {schoolName} <pre className="text-xs text-gray-500">By {APP_NAME}</pre>
                </h1>
                </div>
               <div className="flex items-center gap-5">
                <Button type="primary" className="bg-primary border border-primary hover:!bg-primary/90 font-roboto  !rounded-lg" icon={<Settings size={16}/>} onClick={() => setOpen(true)}>Settings</Button>
               <Status/>
               <div className="w-[1px] h-[30px] bg-primary"/>
               <ProfileSettings />
               </div>
            </div>
            <Drawer open={open} onClose={() => setOpen(false)} size="large">
                <SettingComponent/>
            </Drawer>
        </div>
    );
};

export default topbar;

const ProfileSettings = () => {
    return (
        <div className="flex items-center gap-2 hover:bg-primary/10 px-2 py-1 rounded-lg cursor-pointer">
            <img
                src={
                    'https://images.pexels.com/photos/30148955/pexels-photo-30148955/free-photo-of-thoughtful-woman-posing-by-window-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                }
                className="w-10 h-10 rounded-full object-cover object-center"
            />
            <div className="">
                <p className="text-sm font-[500] font-roboto text-gray-700">
                    Arun Pratap Singh
                </p>
                <p className="text-xs font-roboto text-gray-500">
                   +91 7983613144
                </p>
            </div>
            <ChevronDownIcon size={16} className="text-gray-500"/>
        </div>
    );
};

const Status = () => {
    return (
        <div className="flex items-center gap-2 border py-[5px] px-4 rounded-lg bg-green-100 border-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"/>
            <p className="text-sm font-[500] font-roboto text-green-700">
                Active
            </p>
        </div>
    );
};
