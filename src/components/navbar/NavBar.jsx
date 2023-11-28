import React from 'react'
import styles from './navbar.module.css'

function NavBar() {
  const links = [
    {
      id: 1,
      title: "Home"
    },

    {
      id: 2,
      title: "Blog"
    },

    {
      id: 3,
      title: "About"
    },

    {
      id: 4,
      title: "Contact"
    }
  ];

  return (
    <div className={styles.container}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map(link => (
        <div>{link.title}</div>
        ))}
      </div>
    </div>
  )
}

export default NavBar