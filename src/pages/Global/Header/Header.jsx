import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-black opacity-80 text-white px-8 py-4 fixed z-10 w-full max-w-screen-xl'>
      <h2 className='uppercase'>
        <span className='font-bold text-xl'>bistro boss</span>
        <br />
        <span className='tracking-rest'><span className='text-xl'>r</span>estaurant</span>
      </h2>
      <Navbar />
    </header>
  )
}