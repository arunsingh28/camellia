
const Header = () => {
  return (
    <div className='bg-[#0b5f56] rounded-t-lg p-[8px] flex items-center gap-2'>
        <img 
        src="https://ipsaligarh.in/assets/img/logo-dark.png"
        alt='Camellia Logo'
        loading='lazy'
        className='rounded-full w-10 h-10 object-cover pointer-events-none'
        />
        <p className='text-white font-medium text-base'>Camellia</p>
    </div>
  )
}

export default Header