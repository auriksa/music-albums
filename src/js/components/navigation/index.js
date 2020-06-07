import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './styles.module.scss'

class Navigation extends React.Component {
  render() {
    return (
      <nav className={css.nav}>
        <div className="l-center">
          <NavLink to="/" className={css.link} activeClassName={css.linkActive}>
            Home
          </NavLink>

          <NavLink to="/search" className={css.link} activeClassName={css.linkActive}>
            Search
          </NavLink>

          <NavLink to="/profile" className={css.link} activeClassName={css.linkActive}>
            Profile
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Navigation
