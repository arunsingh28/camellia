import React from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const open = React.useCallback(() => setIsOpen(true), []);
    const close = React.useCallback(() => setIsOpen(false), []);
    const toggle = React.useCallback(() => setIsOpen((prev) => !prev), []);
    return { isOpen, open, close, toggle };
};

export default useModal;
