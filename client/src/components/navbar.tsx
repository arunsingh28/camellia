import { menuOptions, IMenuOptions } from '@/utils/menu';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
// import { Input } from 'antd';
// import { SearchIcon } from 'lucide-react';
import { cn } from '@/utils/util';

import { useSidebar } from '@/context/navToggler';
import useDebounce from '@/hooks/useDebounce';

const Navbar = () => {
    const location = useLocation();
    const { isOpen } = useSidebar();
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
        { title: 'UTILS', items: menu.utils },
    ];

    return (
        <React.Fragment>
            <div
                className={cn(
                    'py-2 font-roboto flex flex-col justify-between bg-gradient-to-b from-blue-100/20 to-primary/10 transition-all duration-300',
                    isOpen
                        ? 'w-[250px] max-w-[220px]'
                        : 'w-[70px] max-w-[60px]',
                )}
            >
                <div>
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
                            isOpen={isOpen}
                        />
                    ))}

                    {Object.values(menu).every((menu) => menu.length === 0) && (
                        <p className="text-gray-500 text-xs font-roboto py-5 px-2">
                            No results found
                        </p>
                    )}
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
    isOpen: boolean;
}

const MenuSection: React.FC<MenuSectionsProps> = ({
    title,
    items,
    handleResetSearch,
    location,
    isGeneral = false,
    isOpen,
}) => {
    if (items.length === 0) return null;
    return (
        <div>
            {isOpen && title && (
                <p className="text-[12px] font-roboto text-primary my-3 ml-2 uppercase">
                    {title}
                </p>
            )}
            {items?.map((item) => {
                 const isActive =
                 item.path === '/'
                     ? location.pathname === item.path
                     : location.pathname === item.path || location.pathname.startsWith(item.path);
                const linkContent = (
                    <Link
                        to={item.path}
                        className={cn(
                            'flex items-center gap-2 my-1 cursor-pointer px-3 py-[8px] hover:bg-gray-200 rounded-none group',
                            isActive
                                ? 'bg-gray-200 border-r-[3px] border-primary'
                                : 'border-l-transparent transition-all duration-300',
                            !isOpen ? 'px-[17px] py-[12px]' : '',
                        )}
                        onClick={handleResetSearch}
                        key={item.name}
                    >
                        <item.icon
                            size={21}
                            className={cn(
                                isGeneral
                                    ? 'group-hover:text-red-700 group-hover:stroke-red-700'
                                    : 'group-hover:text-primary group-hover:stroke-primary',
                                    isActive
                                    ? isGeneral
                                        ? 'text-red-700 stroke-red-700'
                                        : 'text-primary stroke-primary'
                                    : 'text-gray-700 stroke-gray-700',
                            )}
                        />
                        {isOpen && (
                            <p
                                className={cn(
                                    'text-[14px]',
                                    isGeneral
                                        ? 'text-gray-700 group-hover:text-red-700'
                                        : 'text-gray-700',
                                )}
                            >
                                {item?.name}
                            </p>
                        )}
                    </Link>
                );
                return !isOpen ? (
                    <Tooltip
                        placement="left"
                        color="white"
                        key={item.name}
                        title={<p className="text-gray-700">{item?.name}</p>}
                    >
                        {linkContent}
                    </Tooltip>
                ) : (
                    linkContent
                );
            })}
        </div>
    );
};
