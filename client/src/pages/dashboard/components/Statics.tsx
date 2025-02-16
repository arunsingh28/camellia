import React from 'react'

interface StaticsProps{
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
    }>
    title: string
    value: string
    prefix?: string
}

const Statics = ({ icon, title, value,prefix='Rp'}: StaticsProps) => {
  return (
    <div className='rounded-xl p-2 border bg-white flex flex-col justify-between gap-5'>
        <div className='flex items-center gap-2'>
            {
                React.createElement(icon, {
                    className: 'w-6 h-6 border border-indigo-500 rounded-md p-1 text-indigo-500'
                })
            }
            <p className='text-sm font-medium text-gray-600'>{title}</p>
        </div>
        <p className='text-md font-[500] text-gray-700'>{prefix}{" "}{value}</p>
    </div>
  )
}

export default Statics