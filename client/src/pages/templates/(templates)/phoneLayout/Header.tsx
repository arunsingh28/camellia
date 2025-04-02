import camelliaLogo from '@/assets/camellia-logo.png'

const Header = () => {
  return (
    <div className='bg-[#0b5f56] rounded-t-lg p-[8px] flex items-center gap-2'>
        <img 
        src={camelliaLogo}
        alt='Camellia Logo'
        loading='lazy'
        className='rounded-full w-10 h-10 object-cover pointer-events-none'
        />
        <p className='text-white font-medium text-lg'>Camellia</p>
    </div>
  )
}

export default Header