"use client";
import Link from "next/link";
import styles from './NavBar.module.css'

export default function NavBar() {
  const Links = [{
    label: 'Home',
    route: '/'
  },{
    label: 'Feed',
    route: '/feed'
  },{
    label: 'Register',
    route: '/register'
  }]
  return (
    <div className={styles.container}>
      <nav >
        <ul className={styles.navbar}>
          
          {Links.map(({label, route}) => (
            <li key={label}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
          
        </ul>
        
      </nav>
      
    </div>
  );
}
