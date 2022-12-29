import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className="d-flex justify-content-start">
      <ul className="list-inline">
        <li className='list-inline-item pr-3'><Link href="/">Home</Link></li>
        <li className='list-inline-item px-3'><Link href="/about">About</Link></li>
      </ul>
    </nav>
  )
}
