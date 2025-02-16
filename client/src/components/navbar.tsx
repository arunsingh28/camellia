import { menuOptions } from '@/utils/menu';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Input } from 'antd';
import { LifeBuoy, SearchIcon } from 'lucide-react';
import { cn } from '@/utils/util';

const Navbar = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <div className="px-2 py-3 w-[250px] max-w-[220px] font-roboto flex flex-col justify-between bg-gradient-to-b from-blue-100/20 to-primary/10">
                <div>
                    <Input
                        type="text"
                        size="small"
                        placeholder="Search"
                        prefix={
                            <SearchIcon size={16} className="text-gray-500" />
                        }
                        className="w-full rounded-md px-2 py-1 border border-gray-300 mb-4 text-sm"
                    />
                    {menuOptions.main.map((item) => (
                        <Link
                            to={item.path}
                            className={cn(
                                'flex items-center gap-2 my-2 cursor-pointer px-2 py-1.5 hover:bg-gray-200 border-l-[3px] rounded-none group',
                                location.pathname === item.path
                                    ? 'bg-gray-200 border-l-[3px] border-primary rounded-r-md'
                                    : 'border-l-transparent rounded-md',
                            )}
                        >
                            <item.icon
                                size={16}
                                className={cn(
                                    'group-hover:text-primary group-hover:stroke-primary',
                                    location.pathname === item.path
                                        ? 'text-primary stroke-primary'
                                        : 'text-gray-700 stroke-gray-700',
                                )}
                            />
                            <p className="text-sm text-gray-700">{item.name}</p>
                        </Link>
                    ))}

                    <div className="w-full h-[1px] bg-gray-200 my-3 mt-6" />
                    <div>
                        <p className="text-[12px] font-roboto text-primary mb-3">
                            FINANCING
                        </p>
                        {menuOptions.financing.map((item) => (
                            <Link
                                to={item.path}
                                className={cn(
                                    'flex items-center gap-2 my-2 cursor-pointer px-2 py-1.5 hover:rounded-r-md hover:bg-gray-200 border-l-[3px] border-primary rounded-none group',
                                    location.pathname === item.path
                                        ? 'bg-gray-200 border-l-[3px] border-primary rounded-r-md'
                                        : 'border-l-transparent rounded-md',
                                )}
                            >
                                <item.icon
                                    size={16}
                                    className={cn(
                                        'group-hover:text-primary group-hover:stroke-primary',
                                        location.pathname === item.path
                                            ? 'text-primary stroke-primary'
                                            : 'text-gray-700 stroke-gray-700',
                                    )}
                                />
                                <p className="text-sm text-gray-700">
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 my-3 mt-6" />
                    <div>
                        <p className="text-[12px] font-roboto text-primary mb-3">
                            UTILS
                        </p>
                        {menuOptions.utils &&
                            menuOptions.utils.map((item) => (
                                <Link
                                    to={item.path}
                                    className={cn(
                                        'flex items-center gap-2 my-2 cursor-pointer px-2 py-1.5 hover:rounded-r-md hover:bg-gray-200 border-l-[3px] border-primary rounded-none group',
                                        location.pathname === item.path
                                            ? 'bg-gray-200 border-l-[3px] border-primary rounded-r-md'
                                            : 'border-l-transparent rounded-md',
                                    )}
                                >
                                    <item.icon
                                        size={16}
                                        className={cn(
                                            'group-hover:text-primary group-hover:stroke-primary',
                                            location.pathname === item.path
                                                ? 'text-primary stroke-primary'
                                                : 'text-gray-700 stroke-gray-700',
                                        )}
                                    />
                                    <p className="text-sm text-gray-700">
                                        {item.name}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
                <div>
                    <div className="border p-2 rounded-md text-sm gap-2 bg-gray-100 font-roboto mx-2">
                        <p className="flex items-center gap-2 text-gray-600 text-[13px]">
                            <LifeBuoy size={16} />
                            Need Help ?
                        </p>
                        <p className="text-[12px]">
                            <span className="text-primary font-medium">
                                Get in touch
                            </span>{' '}
                            with one of our experts.
                        </p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-3" />
                    <div>
                        <p className="text-[12px] font-roboto text-primary mb-3 uppercase ">
                            genreal
                        </p>
                        {menuOptions.general.map((item) => (
                            <Link
                                to={item.path}
                                className={'flex items-center gap-2 my-1 cursor-pointer px-2 py-1.5 rounded-md hover:bg-white group'}
                            >
                                <item.icon
                                    size={16}
                                    className={'group-hover:text-red-700 group-hover:stroke-red-700'}
                                />
                                <p className="text-sm text-gray-700 group-hover:text-red-700">
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
