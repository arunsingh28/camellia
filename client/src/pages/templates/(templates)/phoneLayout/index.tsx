import Header from "./Header"

import whatsappBg from '@/assets/whatsapp-bg.jpg'
import Message from "./Message"

const PhoneLayout = () => {
  return (
    <div className="w-[700px] border-2 rounded-lg h-[calc(100vh-200px)] shadow-md flex flex-col justify-between mt-5"
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