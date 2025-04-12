import { menuOptions, IMenuOptions } from '@/utils/menu';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { Input } from 'antd';
// import { SearchIcon } from 'lucide-react';
import { cn } from '@/utils/util';

import useDebounce from '@/hooks/useDebounce';

const Navbar = () => {
    const location = useLocation();
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 300);

    // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearch(e.target.value);
    // };

    const [menu, setMenu] = useState<IMenuOptions>(menuOptions);

    useEffect(() => {
        const filteredMenu = Object.keys(menuOptions).reduce((acc, key) => {
            acc[key] = menuOptions[key].filter((item) =>
                item.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
            );
            return acc;
        }, {} as IMenuOptions);

        setMenu(filteredMenu);
    }, [debouncedSearch]);

    const handleResetSearch = () => {
        setSearch('');
        setMenu(menuOptions);
    };

    const menuSections = [
        { title: 'MAIN', items: menu.main },
        { title: 'FINANCING', items: menu.financing },
        { title: 'UTILS', items: menu.utils },
    ];

    return (
        <React.Fragment>
            <div className="py-3 w-[250px] max-w-[220px] font-roboto flex flex-col justify-between bg-gradient-to-b from-blue-100/20 to-primary/10">
                <div>
                    {/* <Input
                        type="text"
                        size="small"
                        placeholder="Search"
                        prefix={
                            <SearchIcon size={16} className="text-gray-500" />
                        }
                        className="mx-2 w-[calc(100%-1rem)] rounded-md px-2 py-1 border border-gray-300 mb-4 text-sm focus:!border-primary focus:!ring-primary focus:!ring-1 active:!border-primary active:!ring-primary focus:!outline-none"
                        value={search}
                        onChange={handleSearch}
                    /> */}
                    {menuSections.map((section, index) => (
                        <MenuSection
                            key={index}
                            title={
                                section.title === 'MAIN'
                                    ? undefined
                                    : section.title
                            }
                            items={section.items}
                            handleResetSearch={handleResetSearch}
                            location={location}
                        />
                    ))}

                    {Object.values(menu).every((menu) => menu.length === 0) && (
                        <p className="text-gray-500 text-xs font-roboto py-5 px-2">
                            No results found
                        </p>
                    )}
                </div>
                <div>
                    <div className="w-full h-[1px] bg-gray-200 my-3" />
                    <MenuSection
                        title="GENERAL"
                        items={menuOptions.general}
                        handleResetSearch={handleResetSearch}
                        location={location}
                        isGeneral
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default React.memo(Navbar);

interface MenuSectionsProps {
    title?: string;
    items: IMenuOptions[keyof IMenuOptions];
    handleResetSearch: () => void;
    location: ReturnType<typeof useLocation>;
    isGeneral?: boolean;
}

const MenuSection: React.FC<MenuSectionsProps> = ({
    title,
    items,
    handleResetSearch,
    location,
    isGeneral = false,
}) => {
    if (items.length === 0) return null;
    return (
        <div className="">
            {title && (
                <p className="text-[12px] font-roboto text-primary my-3 ml-2 uppercase">
                    {title}
                </p>
            )}
            {items.map((item) => (
                <Link
                    to={item.path}
                    className={cn(
                        'flex items-center gap-2 my-1 cursor-pointer px-3 py-[8px] hover:bg-gray-200 rounded-none group',
                        location.pathname === item.path 
                            ? 'bg-gray-200 border-r-[3px] border-primary'
                            : 'border-l-transparent transition-all duration-300',
                    )}
                    onClick={handleResetSearch}
                    key={item.path}
                >
                    <item.icon
                        size={20}
                        className={cn(
                            isGeneral
                                ? 'group-hover:text-red-700 group-hover:stroke-red-700'
                                : 'group-hover:text-primary group-hover:stroke-primary',
                            location.pathname === item.path
                                ? isGeneral
                                    ? 'text-red-700 stroke-red-700'
                                    : 'text-primary stroke-primary'
                                : 'text-gray-700 stroke-gray-700',
                        )}
                    />
                    <p
                        className={cn(
                            'text-[14px]',
                            isGeneral
                                ? 'text-gray-700 group-hover:text-red-700'
                                : 'text-gray-700',
                        )}
                    >
                        {item.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};
