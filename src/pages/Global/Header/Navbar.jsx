import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className='flex gap-x-5'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/order'>order</Link></li>
        <li><Link to='/menu'>our menu</Link></li>
        <li><Link to='/'>dashboard</Link></li>
        <li><Link to='/'>our shop</Link></li>
      </ul>
    </nav>
  )
}