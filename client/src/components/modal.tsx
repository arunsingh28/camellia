import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps extends React.ComponentProps<typeof Dialog> {
    isOpen: boolean;
    children: React.ReactNode;
    footer?: React.ReactNode;
    width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ children, isOpen, footer,width="lg", onClose,...props }) => {
    return (
        <Dialog
        open={isOpen}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        onClose={onClose}
        {...props}
        >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 w-screen overflow-y-auto p-4">
                <div className="flex min-h-full items-center justify-center">
                    <DialogPanel
                        transition
                        className={`max-w-${width ? width  :'5xl'} space-y-4 rounded-lg bg-white p-5 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 relative`}
                    >
                        <div className='absolute right-5 top-5 border rounded-md p-1 cursor-pointer hover:bg-gray-100' onClick={onClose}><X /></div>
                        {children}
                        {footer && footer}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
