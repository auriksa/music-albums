import React from 'react'
import css from './styles.module.scss'

const Spinner = () => {
  return (
    <div className={css.container}>
      <span className={css.spinner} />
    </div>
  )
}

export default Spinner
