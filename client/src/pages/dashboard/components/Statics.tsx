import React from 'react';

interface StaticsProps {
    icon: React.ForwardRefExoticComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
            titleId?: string | undefined;
        }
    >;
    title: string;
    value: string;
    prefix?: string;
    className?: string;
    postfix?: string;
}

const Statics = ({
    icon,
    title,
    value,
    prefix = 'Rp',
    className,
    postfix,
}: StaticsProps) => {
    return (
        <div
            className={`rounded-xl p-2 border bg-white flex flex-col justify-between gap-5 hover:bg-purple-50 cursor-pointer ${className}`}
        >
            <div className="flex items-center gap-3">
                {React.createElement(icon, {
                    className:
                        'w-7 h-7 border border-purple-500 rounded-md p-1 text-purple-500 bg-purple-50',
                })}
                <p className="text-sm font-medium text-gray-600">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-xl font-[400] text-gray-700">
                    {prefix} {value}
                </p>
                {postfix && (
                    <p className="text-[10px] font-medium text-gray-700 bg-orange-400/30 rounded-full px-2 py-[1px]">
                        {postfix}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Statics;
