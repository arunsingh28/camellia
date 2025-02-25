import { Typography } from 'antd'
import CurrentPlain from './components/current-plain'
import Payment from './components/payment'
import Billing from './components/billing-address'
import Credit from './components/credit'
import { CreditCard } from 'lucide-react'

const index = () => {
  return (
    <div className='p-2'>
      <Typography.Title className='!text-gray-700 flex items-center gap-1' level={3}>
        <CreditCard/>
        Credit Score</Typography.Title>
        <CurrentPlain />
        <Payment />
        <Billing />
        <Credit />
    </div>
  )
}

export default index