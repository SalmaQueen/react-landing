import * as React from 'react'
import classnames from 'classnames'
import Navbar from '../../Register/components/Navbar'
import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div >
        <Navbar/>
      </div>
    </div>
  )
}

export default Hero
