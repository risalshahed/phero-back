import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-black opacity-80 text-white px-8 py-4 fixed z-10 w-full max-w-screen-xl'>
      <h2 className='uppercase'>bistro boss<br /><span>restaurant</span></h2>
      <Navbar />
    </header>
  )
}