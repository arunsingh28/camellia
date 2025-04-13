import Header from "./Header"

import whatsappBg from '@/assets/whatsapp-bg.jpg'
import Message from "./Message"

const PhoneLayout = () => {
  return (
    <div className="w-[600px] border-2 rounded-lg h-[calc(100vh-300px)] flex flex-col justify-between sticky top-0"
        style={{
            backgroundImage: `url(${whatsappBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <Header/>
        <Message />
    </div>
  )
}

export default PhoneLayout