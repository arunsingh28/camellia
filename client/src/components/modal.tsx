import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    children: React.ReactNode;
    footer?: React.ReactNode;
    width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, close, footer,width="lg" }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 w-screen overflow-y-auto p-4">
                <div className="flex min-h-full items-center justify-center">
                    <DialogPanel
                        transition
                        className={`max-w-${width} space-y-4 rounded-lg bg-white p-5 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0`}
                    >
                        {children}
                        {footer && footer}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
