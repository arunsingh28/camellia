import {HandCoins} from 'lucide-react'
import { Typography } from 'antd'
const CurrentPlain = () => {
  return (
    <div className='p-2 px-4 bg-white rounded-md'>
        <div className='flex py-2 text-gray-700 gap-2'>
        <HandCoins className='w-6 h-6 text-gray-700'/>
        <Typography.Title level={5} className="!text-gray-700">Current Plan</Typography.Title>
        </div>
        <div>
            <Typography.Text className="text-xsm">You are currently on the Basic plan. Upgrade to get more features.</Typography.Text>
        </div>
    </div>
  )
}

export default CurrentPlain