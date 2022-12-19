import React from 'react'

import {About, Footer, Menu, Navbar, Order, Reviews, Services} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Menu />
      <Services />
      <Reviews />
      <Order />
      <Footer />


    </div>
  )
}

export default App
