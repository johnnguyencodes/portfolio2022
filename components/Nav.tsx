import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className="d-flex justify-content-start">
      <ul className="list-inline">
        <li className='list-inline-item pr-3'><a href="/">Home</a></li>
        <li className='list-inline-item px-3'><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}
