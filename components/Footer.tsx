import footerStyles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div>
      <ul className="list-inline d-flex justify-content-center">
        <li className='list-inline-item pr-3'>Made by John Nguyen</li>
        <li className='list-inline-item px-3'>LinkedIn</li>
        <li className='list-inline-item px-3'>GitHub</li>
        <li className='list-inline-item px-3'>Instagram</li>
      </ul>
      <ul className="list-inline d-flex justify-content-center">
        <li className='list-inline-item'>Next.JS</li>
      </ul>
    </div>
  )
}
