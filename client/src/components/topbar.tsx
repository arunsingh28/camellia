import { APP_NAME, schoolName, schoolLogo } from "@/constants";
import {ChevronDownIcon, Settings} from "lucide-react"

const topbar = () => {
    return (
        <div className="py-2 z-10 bg-gradient-to-r from-blue-100/20 to-purple-100">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                <img src={schoolLogo} className="w-10 h-10"/>
                <h1 className="text-md font-[600] font-roboto text-gray-700">
                    {schoolName} <pre className="text-xs text-gray-500">By {APP_NAME}</pre>
                </h1>
                </div>
               <div className="flex items-center gap-5">
               <div className="flex items-center gap-2 bg-white rounded-xl cursor-pointer px-2">
               <Settings className="text-gray-500 rounded-xl w-9 h-9 border-gray-200 "/>
               <p className="text-sm font-[500] font-roboto text-gray-700">Settings</p>
               </div>
               <Status/>
               <ProfileSettings />
               </div>
            </div>
        </div>
    );
};

export default topbar;

const ProfileSettings = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                src={
                    'https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=1200'
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
        <div className="flex items-center gap-2 border py-2 px-4 rounded-xl bg-green-100 border-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"/>
            <p className="text-sm font-[500] font-roboto text-green-700">
                Active
            </p>
        </div>
    );
};