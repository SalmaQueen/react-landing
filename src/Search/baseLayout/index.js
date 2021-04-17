import * as React from 'react'
import Hero from '../hero/index'
import Footer from '../../Login/components/Footer'

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        <Hero miniHero={miniHero} />
        {children}
      </main>
     <Footer/>
    </>
  )
}

export default BaseLayout
