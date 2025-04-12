import React from 'react';

type SidebarConextType = {
    isOpen: boolean;
    toggleSidebar: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarConextType | undefined>(
    undefined,
);

type SidebarProviderProps = {
    children: React.ReactNode;
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    return (
        <SidebarContext.Provider
            value={{ closeSidebar, isOpen, openSidebar, toggleSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = (): SidebarConextType => {
    const context = React.useContext(SidebarContext);

    if (!context) {
        throw new Error('useSidebar must be used within a sidebarprovider.');
    }
    return context;
};
